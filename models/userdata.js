const mongoose = require('mongoose');


const dbSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    total_expenses:{
        type:String,
        required:true,
    },
    total_earnings:{
        type:String,
        required:true,
    },
    estimated_networth:{
        type:String,
        required:true,
    },
    targeted_networth:{
        type:String,
        required:true,
    },
    cashflow:{
        type:String,
        required:true,
    },
    stocks:{
        type:String,
        required:true,
    },
    real_estate:{
        type:String,
        required:true,
    },
    gold:{
        type:String,
        required:true,
    },
    fd:{
        type:String,
        required:true
    }
});

const userdata  = mongoose.model("userdata",dbSchema);

module.exports=userdata;