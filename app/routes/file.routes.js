var multer = require('multer');
var upload = multer({dest:'uploads/'});
const auth = require('../../authorization.middleware');
const file = require('../controllers/file.controller');

module.exports = (app)=>{
    app.post('/upload', auth.Authenticate, file.uploadFile);

}