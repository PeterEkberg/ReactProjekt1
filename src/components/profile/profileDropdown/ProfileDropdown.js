import './ProfileDropdown.css'
import {useHistory} from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import RoutingPath from '../../../routes/RoutingPath'
export const ProfileDropdown = () => {
    const history = useHistory()
    const[,setAuthUser]=useContext(UserContext)
     const logout = () => {
        setAuthUser(false)
        localStorage.removeItem('user')
        localStorage.removeItem('password')
        history.push(RoutingPath.homeView)

    }
    return (
        <div>
               <div className='profileDropdown'>
                <span>Edit profile</span>
                <span>Change password</span>
                <span>Settings</span>
                <span onClick={()=>logout()}>Logga ut</span>
            </div>
        </div>
    )
}

/*skapa funktion
Ta bort caches
ta bort globala uservariavbeö
onclick på span
navigera om*/
