const express = require('express');
const { check } = require('express-validator');
const checkAuth=require('../middleware/check-auth')
const chefController=require('../controllers/chef-controllers');

const router = express.Router();
router.use(checkAuth);
router.post(
    '/chefadd',[
      check('name')
        .not()
        .isEmpty(),
        check('details')
        .not()
        .isEmpty(),
        check('image')
        .not()
        .isEmpty()
    ],
    chefController.chefadd
  );

module.exports = router;
