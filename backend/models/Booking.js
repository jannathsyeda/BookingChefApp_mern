const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const bookingSchema = mongoose.Schema({
    customer:{ type:mongoose.Schema.Types.ObjectId,required:true,ref:"Customer"},
    bookingDate:{ type:String, required:true},
    chef:{ type:mongoose.Schema.Types.ObjectId,required:true,ref:"Chef"},

},
    { timestamps:true}
)

bookingSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Booking', bookingSchema);