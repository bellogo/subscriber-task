const config = require('../../../config');

module.exports = {
  development: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    dialect: 'mysql',
    logging: false,
  },
  // test: {
  //   username: config.dbUser,
  //   password: config.dbPassword,
  //   database: config.dbName,
  //   host: config.dbHost,
  //   dialect: 'postgres',
  //   logging: false,
  // },
  // production: {
  //   username: config.dbUser,
  //   password: config.dbPassword,
  //   database: config.dbName,
  //   host: config.dbHost,
  //   dialect: 'postgres',
  //   logging: false,
  // },
};
