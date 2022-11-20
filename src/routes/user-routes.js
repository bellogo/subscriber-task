const express = require('express');

const router = express.Router();

const UserRepository = require('../database/repositories/user_repo');
const UserController = require('../controllers/user_controller');

const userController = new UserController(new UserRepository());
 
router.get('/', userController.getAllUsers);


module.exports = router;
