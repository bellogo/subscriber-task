const db = require('../models');


module.exports = class UserRepository {
  constructor() {
    this.model = db.users;
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


};
