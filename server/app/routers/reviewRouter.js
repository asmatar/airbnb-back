const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.get('/', reviewController.getAllReview);
router.get('/:id', reviewController.getOneReview);
module.exports = router;