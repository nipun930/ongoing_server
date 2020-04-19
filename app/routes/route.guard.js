var auth = require('../../authorization.middleware')
module.exports = (app) => {
    app.post('/authenticatePath', auth.Authenticate, (req, res)=>{
        // console.log('req main ',req.body);
        res.send({ success: true, message: 'Authentication success !' });
    });
}