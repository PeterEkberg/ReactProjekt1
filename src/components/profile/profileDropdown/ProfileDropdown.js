import './ProfileDropdown.css'
import {useHistory} from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import RoutingPath from '../../../routes/RoutingPath'
export const ProfileDropdown = () => {
    const history = useHistory()
    const[authUser,setAuthUser]=useContext(UserContext)
     const logout = () => {
        setAuthUser(false)
        localStorage.removeItem('user')
        history.push(RoutingPath.homeView)

    }
    return (
        <div>
               <div className='profileDropdown'>
                <span>Alt 1</span>
                <span>Alt 2</span>
                <span>Alt 3</span>
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
