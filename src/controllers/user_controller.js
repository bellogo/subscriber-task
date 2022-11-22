
const {
  responseCode, errorResponse, successResponse,
} = require('../utilities/helpers');


module.exports = class UserController {
  constructor(userRepo, userSubscriberRepo) {
    this.userRepo = userRepo;
    this.userSubscriberRepo = userSubscriberRepo;
  }

  /**
   *
   * get all users with subscribers controller
   * @static
   * @param {*} req
   * @param {*} res
   * @return {*}
   */
   getAllUsers = async (req, res) => {
      try {
        const users = await this.userRepo.getAllUsersWithSubscriptions()
        return successResponse(res, responseCode.SUCCESS, 'Users retreived with subscriptions.', users);
      } catch (err) {
        console.log(err);
        return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, 'An error occurred.', err);
      }
    }

    /**
   *
   * get all users with subscribers controller
   * @static
   * @param {*} req
   * @param {*} res
   * @return {*}
   */
    getFriends = async (req, res) => {
    try {
      const {order_by, order_type} = req.query;

      const user = await this.userRepo.getModelById(req.params.id)
      
      //people who subcribed to the user
      const subscribers = await this.userSubscriberRepo.getSubscribers(req.params.id);
      const subscriber_ids = subscribers.map((item) => item.subscriber_id);

      // People who you the user subcribed to
      const subscriptions = await this.userSubscriberRepo.getSubscriptions(req.params.id);
      const subscriptionsUser_ids = subscriptions.map((item) => item.user_id);

      // find intersect between subscriptions and subscribers to get friends list
      const friendsIds = subscriber_ids.filter(value => subscriptionsUser_ids.includes(value));
      
      const friends = await this.userRepo.getOrderedUsers(friendsIds, order_by, order_type )
      user.dataValues.friends = friends;

      return successResponse(res, responseCode.SUCCESS, 'Friends retreived.', user);
    } catch (err) {
      console.log(err);
      return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, 'An error occurred.', err);
    }
  }

  /**
   *
   * get max followings(users with max subscriptions)
   * @static
   * @param {*} req
   * @param {*} res
   * @return {*}
   */
   getMaxFollowing = async (req, res) => {
    try {
      const users = await this.userRepo.getTop5MaxFollowings()
      return successResponse(res, responseCode.SUCCESS, 'Top 5 max followings retreived', users);
    } catch (err) {
      console.log(err);
      return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, 'An error occurred.', err);
    }
  }

  /**
   *
   * get users with zero followings(users with 0 subscriptions)
   * @static
   * @param {*} req
   * @param {*} res
   * @return {*}
   */
   getNotFollowing = async (req, res) => {
    try {
      const users = await this.userRepo.getUsersWithFollowingCount()
      const notFollowing = users.filter((item) => item.dataValues.SubscriptionCount == 0);

      return successResponse(res, responseCode.SUCCESS, 'User with zero followings retreived', notFollowing);
    } catch (err) {
      console.log(err);
      return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, 'An error occurred.', err);
    }
  }

  /**
   *
   * get users with zero followings(users with 0 subscriptions)
   * @static
   * @param {*} req
   * @param {*} res
   * @return {*}
   */
   suscribeToUser = async (req, res) => {
    try {
      const { subscriber_id, user_id } = req.body;

      const subscription = await this.userSubscriberRepo.getModelByCondition({where: {subscriber_id, user_id} })
      console.log(subscription);
      if (subscription) return errorResponse(res, responseCode.BAD_REQUEST, 'User already subscribed');

      const subscriptionCount = await this.userSubscriberRepo.getSubsriptionCount(subscriber_id)
      if (subscriptionCount === 150) return errorResponse(res, responseCode.BAD_REQUEST, 'User has reached max subscriptions');

      const subscribed = await this.userSubscriberRepo.create({ subscriber_id, user_id })

      return successResponse(res, responseCode.SUCCESS, 'User subscribed successfully', subscribed );
    } catch (err) {
      console.log(err);
      if (err.name === 'SequelizeForeignKeyConstraintError') {
        return errorResponse(res, responseCode.BAD_REQUEST, `${err.fields} does not exist`);
      }
      return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, 'An error occurred.', err);
    }
  }
  
};
