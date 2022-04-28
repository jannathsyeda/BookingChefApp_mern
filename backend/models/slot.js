const mongoose = require('mongoose');
const slotSchema = mongoose.Schema({
    WeekDays:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true,
    },
    chef:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Chef"
    },
 },{
   timestamps:true 
 }
)


module.exports = mongoose.model('Slot', slotSchema);