const express = require('express');
const accommodationController = require('../controllers/accommodationController');

const router = express.Router();

router.get('/', accommodationController.getAllAccommodation);
router.get('/:id', accommodationController.getOneAccommodation);
module.exports = router;