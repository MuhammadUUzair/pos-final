const mongoose =require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,

    },
    email: {
        unique: true,
        type: String,
        required: true,
        validate: {
            validator: function (v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: "Email must be in valid format!" 

        }
    },
    phone: {
        type: Number,//to use regex in future type: string
        required: true,
        validate: {
            validator: function (v){
                return /\d{10}/.test(v)
            },
            message: "Enter a valid Phone Number"
        }
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }


},{timestamps : true})

userSchema.pre('save', async function (next){

    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model("User", userSchema);