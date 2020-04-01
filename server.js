const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var index = require('./app/routes/index');
var cors = require('cors');

const dbconfig = require('./app/config/configuration');

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.connect(dbconfig.url,{useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{
    console.log('connected to mongodb');
    app.listen(3000, () => {
        index(app);
        console.log("Server is listening on http://localhost:3000");
    });
}).catch(err => {
    console.log('err while connecting ',err)
})