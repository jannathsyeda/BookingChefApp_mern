const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const mongoose = require('mongoose');
const chef=require('../models/Chef')
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
      bookingDate:req.body.bookingDate,
      status: 0
    });
    const createdbooking = await bookingcreate.save() ;
    res.status(201).json({ BookingInfo: createdbooking });

}


const getAvailableChef = async (req, res, next) => {

  const date = "22/05/22";

  let availablechefs
  try{
      availablechefs = await booking.find({ bookingDate: { $ne: date }  }).populate("chef","name details");            
    console.log(availablechefs)


  }catch(err){
    const error = new HttpError(
      'Fetching  failed, please try again later.',
      500
    );
    return next(error);
  }
res.json({ available:availablechefs });

   

};
// getAvailableChef()

exports.bookingup = bookingup;
exports.getAvailableChef = getAvailableChef;
