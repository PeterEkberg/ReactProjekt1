import http from '../BackendAPI'


const createUser = (data)=>{
    return http.post('/user', data)
}
const getAllUsers = (data)=>{
    return http.get('/user')
}
// eslint-disable-next-line import/no-anonymous-default-export
export default{
    createUser,
    getAllUsers
}