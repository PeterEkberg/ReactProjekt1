import React from 'react'
import './DesktopNavigation.css'
import {useHistory} from 'react-router-dom'
import LogoType from '../../../shared/images/borabam.png'
import RoutingPath from '../../../routes/RoutingPath'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import {Profile} from '../../profile/Profile'
import {NavigationTabs} from './navigationTabs/NavigationTabs'


export const DesktopNavigation = () => {
    const history = useHistory()
    const[authUser,] = useContext(UserContext)
    const login=()=>{
        return authUser
        ? <div className= 'profile'> <Profile/> </div>
        :<span className= 'loginButton' onClick={() =>history.push(RoutingPath.loginView)}>LOGIN</span>
    }

    return (
        <div className = 'desktopNavigationWrapper'>
            <img className='navigationLogotype'
                src={LogoType}
                alt={''}/>
                <div className='navigationTabs'>
                    <NavigationTabs/>
                </div>
                
                {login()}

        </div>
    )
}
