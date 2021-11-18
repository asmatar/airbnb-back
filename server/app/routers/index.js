// require express server created in app.js
const express = require('express');
const accommodationRouter = require('./accommodationRouter');
const reviewRouter = require('./reviewRouter');
const router = express.Router();

router.use('/accommodation', accommodationRouter);
router.use('/review', reviewRouter);

module.exports = router;