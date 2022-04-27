const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');

const booking=require('../models/Booking');
const bookingup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
    const bookingcreate = new booking({
      
      customer: req.body.customer,
      chef: req.body.chef,
      slot:req.body.slot,
      status: 0
    });
    const createdbooking = await bookingcreate.save() ;
    res.status(201).json({ BookingInfo: createdbooking });

}

exports.bookingup = bookingup;
