const mongoose = require('mongoose');
const chefSchema = mongoose.Schema({
    name:{
        type:
        String,
        required:true
    },
    details:{
        type:
        String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
 },{
   timestamps:true
 }
)
module.exports = mongoose.model('Chef', chefSchema);