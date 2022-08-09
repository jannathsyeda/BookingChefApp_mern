const mongoose = require('mongoose');
const chefSchema = mongoose.Schema({
    chef_name:{
        type:
        String,
        required:true
    },
    chef_details:{
        type:
        String,
        required:true
    },
    chef_image:{
        type:String,
        required:true
    },
    chef_timing:{ type:mongoose.Schema.Types.ObjectId,required:true,ref:"Slot"},

    booking_status:{type:Number,required:true, default:0 },



 },{
   timestamps:true
 }
)
module.exports = mongoose.model('Chef', chefSchema);