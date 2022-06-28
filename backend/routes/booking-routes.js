const express = require('express');
const { check } = require('express-validator');
const checkAuth=require('../middleware/check-auth')

const bookingController=require('../controllers/booking-controllers');

const router = express.Router();

router.use(checkAuth);
router.get('/',bookingController.getAvailableChef)

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
        .isEmpty(),
        check('bookingDate')
        .not()
        .isEmpty()
    ],
    bookingController.bookingup
  );

  

module.exports = router;
