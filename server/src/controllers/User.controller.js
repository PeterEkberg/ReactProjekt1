import UserModel from '../models/User.model.js'

const createUser = async (request, response) => {
    const user = new UserModel({
        userName: request.body.userName,
        passWord: request.body.passWord,
        age: request.body.age,
    })

    try {
        const databaseResponse = await user.save()
        response.status(201).send(databaseResponse)
    } catch (error) {
        response.status(500).send({
            message: 'ERROR CREATING USER',
            stack: error.message
        })
    }
}

const getAllUsers = async (request, response) => {
    try {
        const databaseResponse = await UserModel.find()
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({
            message: error.message
        })
    }
}
/*const deleteUser = async (request, response) => {
    const user = request.body.userName
    try {
        const databaseResponse = await user.deleteUser()
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({
            message: error.message
        })
    }
}*/

export default {
    createUser,
    getAllUsers
}