var multer = require('multer');
var upload = multer({dest:'uploads/'});
const auth = require('../../authorization.middleware');
const file = require('../controllers/file.controller');

// var multer = require('multer');
// var storage = multer.diskStorage({
//     destination: function(req, file, cb) { 
//         cb(null, 'uploads/');    
//      }, 
//      filename: function (req, file, cb) { 
//         cb(null , file.originalname);   
//      }
// })
// var upload = multer({storage: storage});

module.exports = (app)=>{
    app.post('/upload', auth.Authenticate , upload.single('file'), file.uploadFile);

}