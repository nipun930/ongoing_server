module.exports = (app) => {

    require('../routes/user.routes')(app);
    require('../routes/route.guard')(app);
    require('../routes/file.routes')(app);
    
}