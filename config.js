// Import env package
require('dotenv').config({ silent: true, path: '.env' });

module.exports = {
  port: process.env.PORT,
  
};
