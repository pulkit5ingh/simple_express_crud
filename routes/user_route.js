const express = require('express');
const router = express.Router();

const UserController = require("../controllers/user_controller");

// ok
router.get('/', UserController.getAllUser);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.replaceUser)
router.patch('/:id', UserController.updateUser)


module.exports = router;