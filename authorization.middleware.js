const jwt = require('jsonwebtoken');
const config = require('./app/config/configuration');

exports.Authenticate = (req, res, next) => {
    
    jwt.verify(req.headers.authorization, config.privateKey, (err, decoded) => {
        (decoded) ? next() : res.send({ success: false, message: 'Authentication failed !' });
    })
}
