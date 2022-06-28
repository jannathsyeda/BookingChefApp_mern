const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const bookingSchema = mongoose.Schema({
    customer:{ type:mongoose.Schema.Types.ObjectId,required:true,ref:"Customer"},
    chef_description:{ type:String,required:true},
    chef_name:{ type:String,required:true},
    chef_image: { type: String, required: true },
    chef_timing:{type: String, required: true},
    booking_status:{type:Number,required:true, default:0 },
    bookingDate:[{ type:String, required:true}]
},
    { timestamps:true}
)

bookingSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Booking', bookingSchema);