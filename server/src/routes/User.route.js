import UserController from '../controllers/User.controller.js'

const routes = (application) => {
    application.post('/user', UserController.createUser)
    application.get('/user', UserController.getAllUsers)
    application.delete('/del', UserController.deleteUser2)
    application.delete('/user/:userId', UserController.deleteUser)
    application.put('/user/:userId', UserController.updateUser)
    application.get('/search', UserController.queryUsername)
    application.get('/getuser', UserController.queryUserById)
}

export default { routes }