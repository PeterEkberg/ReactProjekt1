import UserModel from '../models/User.model.js'
import Statuscode from '../../configurations/Statuscode.js'

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
const deleteUser2 = async (request, response) => {
    const user = request.body.userName
    try {
        const databaseResponse = await UserModel.deleteOne({ userName: user })
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({
            message: error.message
        })
    }
}
const deleteUser = async (request, response) => {
    const user = request.params.userId
    try {
        const databaseResponse = await UserModel.findByIdAndDelete(user)
        response.status(200).send({message: 'Succesfully deleted', data: databaseResponse})
    } catch (error) {
        response.status(500).send({
            message: 'ERROR DELETING, ${userId}'
        })
    }
}
const updateUser = async (request, response) => {
    const userId = request.params.userId
    const data = {
        userName:request.body.userName,
        passWord:request.body.passWord
    }
    try {
        const databaseResponse = await UserModel.findByIdAndUpdate(userId, data,{new: true})
        response.status(200).send({message: 'Succesfully updated', data: databaseResponse})
    } catch (error) {
        response.status(500).send({
            message: `ERROR UPDATING, ${userId}`
        })
    }
}
const queryUsername = async (request, response) => {
     try {
        const databaseResponse = await UserModel.find({userName:request.query.userName})
        response.status(200).send({message: 'Succesfully found user', data: databaseResponse})
    } catch (error) {
        response.status(500).send({
            message: `ERROR retriving user, ${request.query.userName}`
        })
    }
}
const queryUserById = async (request, response) => {
    try {
       const databaseResponse = await UserModel.findById({_id:request.query.id})
       response.status(200).send({message: 'Succesfully found user by ID', data: databaseResponse})
   } catch (error) {
       response.status(500).send({
           message: `ERROR retriving user by Id, ${request.query.userId}`
       })
   }
}
export default {
    createUser,
    getAllUsers,
    deleteUser,
    deleteUser2,
    updateUser,
    queryUsername,
    queryUserById
}