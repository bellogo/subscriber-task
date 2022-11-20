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
    async getAllUsersWithSubscribers(filterObj = {}) {
      const filterObject = filterObj;
      filterObject.include = [{ model: db.users, as: 'subscribers',through: { attributes: [] } }];
      const data = await this.model.findAll(filterObject);
      return data;
    }


};
