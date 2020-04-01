const jwt = require('jsonwebtoken');
const config = require('./app/config/configuration');

exports.Authenticate = (req, res, next)=>{
    // jwt.verify(req.body.authToken, config.privateKey, (err, decoded)=>{
    //     if(err){
    //         res.send({success: false, message: 'Authentication failed !'});
    //     } else{
    //         next();
    //     }
    // })
    // res.send({success: false, message: 'middleware breaked the flow'});
    next();
}
