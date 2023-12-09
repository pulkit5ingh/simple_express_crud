const express = require('express');
const router = express.Router();

const userRoute = require('./user_route');
const postRoute = require('./post_route');

router.use("/users", userRoute);
router.use("/posts", postRoute);

module.exports = router;