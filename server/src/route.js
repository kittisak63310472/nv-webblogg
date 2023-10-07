const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) =>{


    //get all user
    app.get('/users', 
    isAuthenController,
    UserController.index)

    //create
    app.post('/user', UserController.create)

    //edit
    app.put('/user/:userId' , UserController.put)

    //delete
    app.delete('/user/:userId', UserController.remove)

    //show by id
    app.get('/user/:userId', UserController.show)

    app.post('/login', UserAuthenController.login)

}