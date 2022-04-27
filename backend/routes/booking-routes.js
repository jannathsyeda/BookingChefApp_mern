const express = require('express');
const { check } = require('express-validator');

const bookingController=require('../controllers/booking-controllers');

const router = express.Router();
router.post(
    '/bookingup',[
      check('customer')
        .not()
        .isEmpty(),
        check('chef')
        .not()
        .isEmpty(),
        check('slot')
        .not()
        .isEmpty(),
        check('status')
        .not()
        .isEmpty()
    ],
    bookingController.bookingup
  );

module.exports = router;
