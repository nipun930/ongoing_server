const Auth = require('../../authorization.middleware');

module.exports = (app)=>{

    const user = require('../controllers/user.controller');
     // Create a new User/ Signup
    app.post('/signup', user.signup);

     // Login user
    app.post('/login', user.login);

    // // Retrieve all Notes
    // app.get('/user', user.create);

    // // Retrieve a single Note with noteId
    // app.get('/user', user.create);

    // // Update a Note with noteId
    // app.put('/user', user.create);

    // // Delete a Note with noteId
    // app.delete('/user', user.create);
}