var multer = require('multer');
var upload = multer({dest:'uploads/'});
var mime = require('mime-types');
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

      console.log('file => ',file)
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      let ext = mime.extension(file.mimetype);
      cb(null, file.originalname.replace('.'+ext, '_' + uniqueSuffix + '.' + ext));
      // cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
    }
  })

var upload = multer({ storage: storage }).single('profileImg')

exports.uploadFile = (req, res) => {
    // upload(req, res ,(err) => {
    //     (err)?res.send({ data: 'data not uploaded ', success: false }):res.send({ data: 'data uploaded ' });
    // });
}