import React from 'react'
import './DesktopNavigation.css'
import {useHistory} from 'react-router-dom'
import LogoType from '../../../shared/images/logotype.png'
import RoutingPath from '../../../routes/RoutingPath'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import {Profile} from '../../profile/Profile'



export const DesktopNavigation = () => {
    const history = useHistory()
    const[authUser,setAuthUser] = useContext(UserContext)
    const hideButtonShowName=()=>{
        return authUser
        ? <Profile/>
        :<span onClick={() =>history.push(RoutingPath.loginView)}>LOGIN</span>
    }

    return (
        <div className = 'desktopNavigationWrapper'>
            <img className='navigationLogotype'
                src={LogoType}
                alt={''}/>
                <span onClick={() => history.push(RoutingPath.homeView)}>Products</span>
                <span onClick={() => history.push(RoutingPath.homeView)}>Brands</span>
                <span onClick={() => history.push(RoutingPath.homeView)}>News</span>
                <span onClick={() => history.push(RoutingPath.homeView)}>Guidelines</span>
                <span>{hideButtonShowName()}</span>
        </div>
    )
}
