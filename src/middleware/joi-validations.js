const Joi = require('joi');
const {errorResponse, responseCode, validateRequestOnly} = require('../utilities/helpers');

module.exports = class Validations {


  /**
   * validate details on creation
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
   async validateGetFriends(req, res, next) {
  
      const querySchema = Joi.object({
        order_by: Joi.string().max(255).empty(),
        order_type: Joi.string().empty().valid('asc', 'ASC', 'DESC', 'desc'),
      });
  
      const paramsSchema = Joi.object({
        id: Joi.number().empty().required()
      });
  
      const paramErrors = await validateRequestOnly(req.params, res, paramsSchema);
      if (paramErrors) return errorResponse(res, responseCode.UNPROCESSABLE_ENTITY, 'A validation error has occurred', paramErrors);
  
       const queryErrors = await validateRequestOnly(req.query, res, querySchema);
      if (queryErrors) return errorResponse(res, responseCode.UNPROCESSABLE_ENTITY, 'A validation error has occurred', queryErrors);
  
      return next();
    
    
  }
}