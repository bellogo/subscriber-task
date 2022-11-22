const express = require('express');

const router = express.Router();

const Validations = require('../middleware/joi-validations');
const {validateGetFriends, validateSubscribeUser} = new Validations

const UserRepository = require('../database/repositories/user_repo');
const UserSubscriberRepository = require('../database/repositories/user_subscriber_repo');
const UserController = require('../controllers/user_controller');

const userController = new UserController(new UserRepository(), new UserSubscriberRepository());
 
router.get('/users', userController.getAllUsers);
router.get('/users/:id/friends', validateGetFriends, userController.getFriends);
router.get('/max-following', userController.getMaxFollowing);
router.get('/not-following', userController.getNotFollowing);
router.post('/suscribe', validateSubscribeUser, userController.suscribeToUser);


module.exports = router;
