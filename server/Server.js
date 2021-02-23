import mongoose from 'mongoose'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const application = express()
application.use(helmet())
application.use(morgan('common'))

application.get('/recipe', (request, response) => {
	response.send('KLART')
})

application.get('/dice', (request, response) => {
	response.send(Math.random().toString())
})

application.listen(3001, () => {
	console.log('Server igång')
})

application.get('/test', aa)
//get skickar in två objekt, request och response till funktionen
function aa(request, response) {
	response.send('TESTAR')
}

const checkIfAdmin = (rec, res, next) => {
	console.log("is admin") //request.query
	next
}
application.use(checkIfAdmin) //Körs alltid

mongoose.connect('mongodb://127.0.0.1:27017/namndb', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Succefully connected'))
	.catch((error) => {
		console.log('ERROR WHILE CONNECT: ' + error)
		process.exit()
	})

