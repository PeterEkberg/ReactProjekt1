import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const{DATABASE_URL,PORT} = process.env

const ConnectToDatabase =async ()=>{
    try{
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        console.log('UPPKOPPLAD')
    }catch(error){
        console.log('ERROR WHILE CONNECT: ' + error)
		process.exit()
    }

}

const ConnectToDPort =  (application)=>{
    application.listen(PORT,()=>{
        console.log('SERVER IS RUNNNIG')
    })
}

export default {
    ConnectToDatabase,
    ConnectToDPort
}