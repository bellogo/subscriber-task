const express = require('express');

const router = express.Router();

const Validations = require('../middleware/joi-validations');
const {validateGetFriends} = new Validations

const UserRepository = require('../database/repositories/user_repo');
const UserSubscriberRepository = require('../database/repositories/user_subscriber_repo');
const UserController = require('../controllers/user_controller');

const userController = new UserController(new UserRepository(), new UserSubscriberRepository());
 
router.get('/', userController.getAllUsers);
router.get('/:id/friends', validateGetFriends, userController.getFriends);


module.exports = router;
