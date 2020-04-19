module.exports = (app) => {

    require('../routes/user.routes')(app);
    require('../routes/route.guard')(app);
    
}