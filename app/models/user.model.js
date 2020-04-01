const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fName: String,
    lName: String,
    dob: Date,
    phoneNo: Number,
    emailId: String,
    password: String
},{
    timestamps: true
});

module.exports = mongoose.model("UserSchema", UserSchema);