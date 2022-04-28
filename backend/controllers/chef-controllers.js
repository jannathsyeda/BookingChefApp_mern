const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');

const chef=require('../models/Chef');
const chefadd = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
    const chefInsert = new chef({
      
      name: req.body.name,
      details: req.body.details,
      image:req.body.image,
    });
    const createdchef = await chefInsert.save() ;
    res.status(201).json({ chefInfo: createdchef });

}

exports.chefadd = chefadd;
