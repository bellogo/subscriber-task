
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
      //people who subcribed to the user
      const subscribers = await this.userSubscriberRepo.getSubscribers(req.params.id);
      const subscriber_ids = subscribers.map((item) => item.subscriber_id);
      console.log(subscriber_ids);
      // People who you the user subcribed to
      const subscriptions = await this.userSubscriberRepo.getSubscriptions(req.params.id);
      const subscriptionsUser_ids = subscriptions.map((item) => item.user_id);
      console.log(subscriptionsUser_ids);
      // find intersect between subscriptions and subscribers to get friends list
      const friendsIds = subscriber_ids.filter(value => subscriptionsUser_ids.includes(value));
      
      const friends = await this.userRepo.getOrderedUsers(friendsIds, order_by, order_type )

      return successResponse(res, responseCode.SUCCESS, 'Friends retreived.', friends);
    } catch (err) {
      console.log(err);
      return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, 'An error occurred.', err);
    }
  }

  
};
