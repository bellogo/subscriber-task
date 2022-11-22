// Import env package
require('dotenv').config({ silent: true, path: '.env' });

module.exports = {
  port: process.env.PORT,
  dbName: process.env.DBNAME,
  dbUser: process.env.DBUSER,
  dbPassword: process.env.DBPASSWORD,
  dbHost: process.env.DBHOST,
  dbDialect: process.env.DBDIALECT,
};
