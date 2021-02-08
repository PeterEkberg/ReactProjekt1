import React from 'react'
import {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import {UserContext} from '../shared/provider/UserProvider'

export const LoginView = () => {
    const history = useHistory();
    const[loginDetails, setLoginDetails] = useState(
        {username:'',password:''}
    )

    const userLogin=(e)=>{
        setLoginDetails({ ...loginDetails, [e.target.name]:e.target.value})
    }
    const [,setAuthUser] = useContext(UserContext)
    
    const logIn  = () =>{
        localStorage.setItem('user',loginDetails.username)
        localStorage.setItem('password',loginDetails.password)
        setAuthUser(loginDetails)
        history.push(RoutingPath.homeView)
    }
    return (
        <div align="center">
            <h1>{loginDetails.username}</h1><br/>
            <h1>{loginDetails.password}</h1>
           <form>
           {
           //username: <input name='username' onChange={event => setLoginDetails({ ...loginDetails, username:event.target.value})} /> <br/><br/>
           }
            username: <input name='username' onChange={event => userLogin(event)} /> <br/><br/>
            password: <input type='password' name='password' onChange={event => userLogin(event)} /> <br/><br/>
            <button onClick={() => logIn()}>Logga in</button>
            </form>
        </div>
    )
}
