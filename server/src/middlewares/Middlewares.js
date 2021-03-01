import dotenv from 'dotenv'

dotenv.config()
const {ENVIRONMENT} = process.env


const notFound=(request, response,next)=>{
	const error= new Error('not found' + request.originalUrl)
	response.status(404)
	next(error)
}

const errorHandler=(error,request, response,next)=>{
	const statusCode = response.statusCode==200? 500 : response.statusCode
	response.status(statusCode)
	response.json({
		statusCode:statusCode,
		message: error.message,
		stackTrace: ENVIRONMENT === 'PRODUCTION'? null:  error.stack
	})
}

export default{
    notFound,
    errorHandler
}