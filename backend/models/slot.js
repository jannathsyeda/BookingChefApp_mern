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
   Start_Time:{
        type:String,
        required:true,
    },
   End_Time:{
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