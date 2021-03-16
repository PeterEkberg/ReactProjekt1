/*import { getPython } from "../../../shared/api/service/PythonAPIService"
export const NewsView = () => {
    getPython()
    return (
        <div>
            NEWS
       </div>
    )
}
*/

import BackendAPIService from '../../../shared/api/service/BackendAPIService'
import { useState, useEffect } from 'react'


export const NewsView = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [newUser, setNewUser] = useState({
        userName: '',
        passWord: '',
        age: ''
    })
    const create = async () => {
        try {
            setLoading(true)
            await BackendAPIService.createUser(newUser)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchData = async () => {
        const response = await BackendAPIService.getAllUsers()
        setUsers(response.data)
    }
    /*useEffect(() => {
        fetchData()
    }, [loading])*/
    return (
        <div>
            <h1>{newUser.userName}</h1><br/>
            <h1>{newUser.passWord}</h1><br/>
            Backend API
            <p>USERNAME</p><input onBlur={(event) => setNewUser({ ...newUser, userName: event.target.value })}></input>
            <p>PASSWORD</p><input onChange={(event) => setNewUser({ ...newUser, passWord: event.target.value })}></input>
            <p>AGE</p><input onBlur={(event) => setNewUser({ ...newUser, age: event.target.value })}></input>
            <button onClick={() => create()}>Create user</button>
            <button onClick={() => fetchData()}>Get all users</button>
            <div>
                {users.map((x) => <div><span>{x.userName}</span></div>)}
            </div>
        </div>
    )
}
