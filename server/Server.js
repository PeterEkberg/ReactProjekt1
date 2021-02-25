
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Configurations from './configurations/Configurations.js'
import Middlewares from './src/middlewares/Middlewares.js'


const application = express()
application.use(helmet())
application.use(morgan('common'))

Configurations.ConnectToDatabase()
Configurations.ConnectToDPort(application)


/*
mongoose.connect('mongodb://127.0.0.1:27017/namndb', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Succefully connected to mongoDB'))
	.catch((error) => {
		console.log('ERROR WHILE CONNECT: ' + error)
		process.exit()
	})
	*/
	/*
application.listen(3001, () => {
	console.log('Server igång')
})
*/

application.get('/recipe', (request, response) => {
	response.send('KLART')
})

application.get('/dice', (request, response) => {
	response.send(Math.random().toString())
})

application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)

/*
application.get('/test', aa)
//get skickar in två objekt, request och response till funktionen
function aa(request, response) {
	response.send('TESTAR')
}
*/
/*
const notFound=(request, response,next)=>{
	const error= new Error('not found' + request.originalUrl)
	response.status(404)
	next(error)
}
const errorHandler=(error,request, response,next)=>{
	const statusCode = response.statusCode?500 : response.statusCode
	response.status(statusCode)
	response.json({
		statusCode:statusCode,
		message: error.message,
		stackTrace: error.stack
	})
}
application.use(notFound)
application.use(errorHandler)

const checkIfAdmin = (rec, res, next) => {
	console.log("is admin") //request.query
	next
}
application.use(checkIfAdmin) //Körs alltid
*/
