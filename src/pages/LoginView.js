import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const LoginView = () => {
    const history = useHistory()
    const[loginDetails, setLoginDetails] = useState({username:'',password:''})
    const logIn  = () =>{
        history.push(RoutingPath.homeView)
        localStorage.setItem('user',loginDetails.username)
    }
    return (
        <div>
            <h1>{loginDetails.username}</h1>
           <form>
            username: <input onChange={event => setLoginDetails({ ...loginDetails, username:event.target.value})} /> <br/>
            password: <input onChange={event => setLoginDetails({ ...loginDetails, password:event.target.value})} /> <br/>
            <button onClick={() => logIn()}>Logga in</button>
            </form>
        </div>
    )
}
