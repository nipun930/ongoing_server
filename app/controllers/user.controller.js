const User = require('../models/user.model');
const config = require('../config/configuration');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var res123;
exports.signup = (req, res) => {
    if (req.body) {
        User.countDocuments({ emailId: req.body.email }).then(count => {
            if (count !== 0) {
                res.send({ success: false, message: 'Email is already registered!' })
            } else {
                bcrypt.hash(req.body.password, 10, function (err, hash) {
                    if (hash) {
                        const user = new User({
                            fName: req.body.fname,
                            lName: req.body.lname,
                            dob: req.body.dob,
                            phoneNo: req.body.phone,
                            emailId: req.body.email,
                            password: hash,
                        });
                        user.save().then(data => {
                            res.send({ success: true, data });
                        });
                    }
                });
            }
        })

    } else {
        res.send({ success: false, message: 'No content is send in body of request' })
    }
}

exports.login = (req, res) => {
    if (req.body) {
        User.find({ emailId: req.body.emailId, }, (error, data) => {
            if (data.length) {
                bcrypt.compare(req.body.password, data[0].password, function (err, result) {
                    if (err) {
                        res.send({ success: false, message: 'Server Error!' });
                    } else {
                        if (result) {
                            let authToken = jwt.sign({ userName: req.body.emailId }, config.privateKey, { expiresIn: '24h' });
                            sessionObject = {
                                validFor : 24*60*60*1000,
                                loginTimeStamp : new Date()
                            }
                            res.send({ success: true, authToken: authToken, data: data });
                        } else {
                            res.send({ success: false, message: 'Invalid  Password' });
                        }
                    }
                });
            } else { res.send({ success: false, message: 'Invalid Username or Password' }); }
        });
    }
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}
