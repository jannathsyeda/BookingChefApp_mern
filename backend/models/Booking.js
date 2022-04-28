const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const bookingSchema = mongoose.Schema({
    customer:{ type:mongoose.Schema.Types.ObjectId,required:true,ref:"Customer"},
    chef:{ type:mongoose.Schema.Types.ObjectId,required:true,ref:"Chef"},
    slot:{type:mongoose.Schema.Types.ObjectId,required:true, ref:"Slot"},
    status:{type:Number,required:true, default:0 },
    bookingDate:{ type:String, required:true}
},
    { timestamps:true}
)

bookingSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Booking', bookingSchema);