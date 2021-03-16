import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import application from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const testingNonExistentRoute = () => {
    //describe('TESTINGNONEXISTENTROUTE', () => {
    test('Test against non existing route in API', done => {
        Chai.request(application)
            .get('/erererere')
            .end((request, response) => {
                response.should.have.a.status(404)
                done()
            })
    })
    //})
}

const getAllUsers = () => {
    test('Testing return of users', done => {
        Chai.request(application)
            .get('/user')
            .end((request, response) => {
                response.should.have.a.status(200)
                response.body.should.be.a('array')
                response.body.length.should.be.eq(11)
                done()
            })
    })
}

const updateUser = () => {
    const userID = '603d08b2650a88150ef1ffdf'
    test('Testing update o f user', done => {
        Chai.request(application)
            .put(`/user/${userID}`)
            .send({username: 'NEWUSERNAME',password:'1234'}) 
            .end((error, response) => {
                response.should.have.a.status(200)
                response.body.should.be.a('object')
                response.body.length.should.have.property('username').eq(OLDUSERNAME)
                //response.body.length.should.have.property('password').eq(userId)
                done()
            })
    })
}
describe('TESTING TESTING', () => {
    testingNonExistentRoute()
    getAllUsers()
    updateUser()
})