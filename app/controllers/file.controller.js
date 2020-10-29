var multer = require('multer');
const mime = require('mime');
const fs = require('fs');
// const fssd = require('../uploads/');

var storage = multer.diskStorage({
    destination: function(req, file, cb) { 
        cb(null, 'uploads/');    
     }, 
     filename: function (req, file, cb) { 
        cb(null , file.name);   
     }
});
var upload = multer({storage: storage}).single('file');

exports.uploadFile = (req, res) => {

    //**************    / IF file is directoly attached in a key 'file' **************
    

    // upload(req, res, (err)=>{
    //     if(err){
    //         res.send({status:false, error: err} );
    //     }
    // });
    

    //**************    / IF file is attached as base 64 url encoded in a key 'file' **************

    // var matches = req.body.encodedFile.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var matches = req.body.encodedFile.match(/^data:(.+);base64,(.+)$/);
    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }
    let file = {};
    file.type = matches[1];
    file.data = new Buffer.from(matches[2], 'base64');
    let fileType = file.type;
    // let extension = mime.getExtension(fileType);
    let fileName = req.body.filename;
    // let fileName = "image." + extension;
    fs.writeFileSync("uploads/" +new Date().valueOf() +fileName, file.data, 'utf8');

    res.send({ data: 'data uploaded ' });
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

}

exports.uploadFile = (req, res) => {
    // upload(req, res ,(err) => {
    //     (err)?res.send({ data: 'data not uploaded ', success: false }):res.send({ data: 'data uploaded ' });
    // });
}