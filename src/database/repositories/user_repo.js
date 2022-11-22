const db = require('../models');
const Sequelize = require('sequelize')

module.exports = class UserRepository {
  constructor() {
    this.model = db.users;
  }
  

  /**
   *
   *
   * @param {*} id
   * @return {*}
   * @memberof BaseRepository
   */
   async getModelById(id) {
    return this.model.findOne({ where: { id } });
  }

   /**
   *  get top 5 Users With highest Subscriptions or followings
   *
   * @param {*} [filterObj={}]
   * @return {*}
   * @memberof BaseRepository
   */
    async getTop5MaxFollowings(filterObj = {}) {
      const data = this.model.findAll({
        subQuery: false,
        attributes: {
         include: [[db.Sequelize.fn("COUNT", db.Sequelize.col("userSubscriptions.id")), "SubscriptionCount"]] 
      },
        include: [{ model: db.user_subscribers, as: 'userSubscriptions',
          attributes: []
        },],
        group: ['users.id'],
        order: [['SubscriptionCount', 'DESC']],
        limit:5
        
    });
    return data;
    }

     /**
   *  get all Users With subcriptions count
   *
   * @param {*} [filterObj={}]
   * @return {*}
   * @memberof BaseRepository
   */
      async getUsersWithFollowingCount(filterObj = {}) {
        const data = this.model.findAll({
          subQuery: false,
          attributes: {
           include: [[db.Sequelize.fn("COUNT", db.Sequelize.col("userSubscriptions.id")), "SubscriptionCount"]] ,
        },
          include: [{ model: db.user_subscribers, as: 'userSubscriptions',
            attributes: []
          },],
          group: ['users.id'],
          
      });
      return data;
      }
  
    /**
     *  get ordered list of users
     *
     * @param {*} userIds
     * @param {*} order_by
     * @param {*} order_type
     * @return {*} 
     */
    async getOrderedUsers(userIds, order_by, order_type) {
      const filterObj = {  where: { id: userIds }, order: [] };

      if (order_by && order_type) {
        // check if order_by value is a model property
        if (this.model.rawAttributes[order_by]) {
          filterObj.order.push([order_by, order_type])
        }
      }
      const data = await this.model.findAll(filterObj);
      return data;
    }

    /**
   *  get all Users With Subscribers
   *
   * @param {*} [filterObj={}]
   * @return {*}
   * @memberof BaseRepository
   */
     async getAllUsersWithSubscriptions(filterObj = {}) {
      const filterObject = filterObj;
      filterObject.include = [{ model: db.users, as: 'subscriptions',through: { attributes: [] } }];
      const data = await this.model.findAll(filterObject);
      return data;
    }

};
