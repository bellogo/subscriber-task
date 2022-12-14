exports.responseCode = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOW: 405,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  ACCOUNT_NOT_VERIFIED: 209,
};

/**
 *
 * @param {object} res response object
 * @param {number} statusCode
 * @param {string} message
 * @param {*} errors
 * @param files
 * @returns {object} res
 */
 exports.errorResponse = function (res, statusCode = this.responseCode.NOT_FOUND,
  message = 'error', errors = []) {
  res.status(statusCode).json({
    status: 'error',
    message,
    errors,
  });
};

/**
 *
 * @param {object} res response object
 * @param {number} statusCode
 * @param {string} message
 * @param {*} data
 * @returns {object} res
 */
 exports.successResponse = function (res, statusCode = this.responseCode.SUCCESS,
  message = 'success', data = null) {
  res.status(statusCode).json({
    status: 'success',
    message,
    data,
  });
};

/**
 * The validation rule
 * @param req
 * @param res
 * @param next
 * @param schema
 */
 exports.validateRequestOnly = (object, res, schema) => {
  const FormattedError = [];
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: false, // ignore unknown props
    // stripUnknown: true, // remove unknown props
  };
  const { error, data } = schema.validate(object, options);
  if (error) {
    /**
         * loop through the error messages and return readable error message
         */
    error.details.forEach((e) => {
      FormattedError.push(e.message.replace(/"/g, ''));
    });

    /**
         * returns a single error at a time
         */
    return FormattedError;
  }

};