var auth = require('../../authorization.middleware')
module.exports = (app) => {
    app.get('/rautGuard', auth.Authenticate, (req, res)=>{
        // console.log('req main ',req.body);
        res.send({ success: true, message: 'Authentication success !' });
    });
}