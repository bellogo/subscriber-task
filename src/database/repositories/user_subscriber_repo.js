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

 /**
   *
   *
   * @param {*} filterObj
   * @return {*}
   * @memberof BaseRepository
   */
  async getModelByCondition(filterObj) {
    return this.model.findOne(filterObj);
  }

  /**
   *
   *
   * @param {*} filterObj
   * @return {*}
   * @memberof BaseRepository
   */
   async getSubsriptionCount(subscriber_id) {
    const {count} = await this.model.findAndCountAll({where: {subscriber_id}});
    
    return count;
  }

  /**
   *
   *
   * @param {*} data
   * @return {*}
   * @memberof BaseRepository
   */
      async create(data) {
        return this.model.create(data);
   }
};
