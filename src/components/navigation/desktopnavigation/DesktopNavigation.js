import React from 'react'
import './DesktopNavigation.css'
import {useHistory} from 'react-router-dom'
import LogoType from '../../../shared/images/logotype.png'
import RoutingPath from '../../../routes/RoutingPath'



export const DesktopNavigation = () => {
    const history = useHistory()
    return (
        <div className = 'desktopNavigationWrapper'>
            <img className='navigationLogotype'
                src={LogoType}
                alt={''}/>
                <span onClick={() => history.push(RoutingPath.homeView)}>Products</span>
                <span onClick={() => history.push(RoutingPath.homeView)}>Brands</span>
                <span onClick={() => history.push(RoutingPath.homeView)}>News</span>
                <span onClick={() => history.push(RoutingPath.homeView)}>Guidelines</span>
                <span onClick={() => history.push(RoutingPath.loginView)}>Login</span>
        </div>
    )
}
