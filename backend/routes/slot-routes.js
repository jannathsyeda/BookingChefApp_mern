const express = require('express');
const { check } = require('express-validator');
const checkAuth=require('../middleware/check-auth')
const slotController=require('../controllers/slot-controllers');

const router = express.Router();
router.use(checkAuth);
router.post(
    '/slotadd',[
      check('WeekDays')
        .not()
        .isEmpty(),
        check('Date')
        .not()
        .isEmpty(),
        check('Time')
        .not()
        .isEmpty(),
        check('chef')
        .not()
        .isEmpty()
    ],
    slotController.slotadd
  );

module.exports = router;
