
const {
  responseCode, errorResponse, successResponse,
} = require('../utilities/helpers');


module.exports = class UserController {
  constructor(userRepo) {
    this.userRepo = userRepo;
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
        const users = await this.userRepo.getAllUsersWithSubscribers()
        return successResponse(res, responseCode.SUCCESS, 'Users retreived with subscribers.', users);
      } catch (err) {
        console.log(err);
        return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, 'An error occurred.', err);
      }
    }

  
};
