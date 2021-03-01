import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = Schema({
    userName: {
        type: String,
        unique: true,
        allowNull: false,
        required: true,

    },
    passWord: {
        type: String,
        unique: false,
        allowNull: false,
        required: true,

    },
    age: {
        type: Number,
        min: [18, 'Not 18'],
        max: [90, 'Not under 91'],
        required: false

    }
},
    { timestamps: true }
)

const UserModel = mongoose.model('user', userSchema)
export default UserModel