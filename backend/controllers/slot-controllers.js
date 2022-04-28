const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');

const slot=require('../models/slot');
const slotadd = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
    const slotInsert = new slot({
      
      WeekDays: req.body.WeekDays,
      Date: req.body.Date,
      Time:req.body.Time,
      chef:req.body.chef
    });
    const createdslot = await slotInsert.save() ;
    res.status(201).json({ slotInfo: createdslot });

}

exports.slotadd = slotadd;
