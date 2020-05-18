var multer = require('multer');
var upload = multer({dest:'uploads/'});
// require('../uploads/')

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now()+'.png')
//     }
// });

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      console.log('file is  => ',file);
        
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

var upload = multer({ storage: storage }).single('profileImg')

exports.uploadFile = (req, res) => {
    // console.log('upload cntroller is called ', req);
    upload(req, res ,(err) => {
        if(!err){
            console.log('file uploaded');
            
        }
    });
    res.send({ data: 'data uploaded ' });
}