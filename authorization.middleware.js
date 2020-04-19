const jwt = require('jsonwebtoken');
const config = require('./app/config/configuration');

exports.Authenticate = (req, res, next) => {
    jwt.verify(req.body.authToken, config.privateKey, (err, decoded) => {
        if (decoded) {
            next();
        } else {
            res.send({ success: false, message: 'Authentication failed !' });
        }
    })
}
