const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const bookingSchema = mongoose.Schema({
    // customer:{ type:mongoose.Schema.Types.ObjectId,required:true,ref:"Customer"},
    // chef:{ type:mongoose.Schema.Types.ObjectId,required:true,ref:"Chef"},
    // slot:{type:mongoose.Schema.Types.ObjectId,required:true, ref:"Slot"},
    // status:{type:Number,required:true, default:0 },
    // bookingDate:{ type:Date, required:true, default:Date.now }
    customer: { type: String, required: true },
    chef: { type: String, required: true },
    slot: { type: String, required: true },
    status:{type:Number,required:true, default:0 },
},
    { timestamps:true}
)

bookingSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Booking', bookingSchema);