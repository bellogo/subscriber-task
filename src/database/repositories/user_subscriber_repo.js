const db = require('../models');


module.exports = class UserRepository {
  constructor() {
    this.model = db.user_subscribers;
  }
  

   /**
   *  get all Users a user is subscribed to
   *
   * @param {*} id
   * @return {*}
   * @memberof BaseRepository
   */
    async getSubscribers(id) {
      const subscribers = await this.model.findAll({where: {
        user_id: id
      }});
      return subscribers;
    }

    /**
   *  get all Users a user subscribed to
   *
   * @param {*} id
   * @return {*}
   * @memberof BaseRepository
   */
     async getSubscriptions(id) {
      const subscriptions = await this.model.findAll({where: {
        subscriber_id: id
      }});
      return subscriptions;
    }


};
