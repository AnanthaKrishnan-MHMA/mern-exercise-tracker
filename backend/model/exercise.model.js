const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username:{required:true,type:String},
    description:{required:true,type:String},
    duration:{required:true,type:Number},
    date:{required:true,type:Date},
},{
    timestamps:true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;