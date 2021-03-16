import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import application from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const testingNonExistentRoute = (expectedStatusCode) => {
    //describe('TESTINGNONEXISTENTROUTE', () => {
    test('Test against non existing route in API', done => {
        Chai.request(application)
            .get('/THISROUTEDOESNOTEXIST')
            .end((request, response) => {
                response.should.have.a.status(expectedStatusCode)
                done()
            })
    })
    //})
}

const getAllUsers = (expextedNumberOfUsers) => {
    test('Testing return of users', done => {
        Chai.request(application)
            .get('/user')
            .end((request, response) => {
                response.should.have.a.status(200)
                response.body.should.be.a('array')
                response.body.length.should.be.eq(expextedNumberOfUsers)
                done()
            })
    })
}

const updateUser = (userid, newname,newpass) => {
    //const userID = '603e5680213972158d557f82'
    test('Testing update of user', done => {
        Chai.request(application)
            .put(`/user/${userid}`)
            .send({userName: newname, passWord:newpass}) 
            .end((error, response) => {
                response.should.have.a.status(200)
                response.body.should.be.a('object')
                response.body.data.should.have.property('userName').eq(newname)
                response.body.data.should.have.property('passWord').eq(newpass)
                done()
            })
    })
}

/* SAMPLE ID for TEST
603d08b2650a88150ef1ffdf
603e5680213972158d557f82
604159ba33189d0749bc91c9
60415b6033189d0749bc91d1
60415c3a33189d0749bc91d5
604246c6a8b0ff02df733406
*/

describe('TESTING TESTING', () => {
    testingNonExistentRoute(404)
    getAllUsers(13)
    updateUser('603d08b2650a88150ef1ffdf','erik','ddd')
})