const UserController = require('./controllers/UserController')

module.exports = (app) =>{
    //get all
    app.get('/user', UserController.index),

    //create
    app.post('/user', UserController.creat),

    //edit
    app.put('/user/:userId', UserController.put)

    //delete
    app.delete('/user/:userId', UserController.delete)
    
    //show by id 
    app.get('/user/:userId', UserController.show)
}