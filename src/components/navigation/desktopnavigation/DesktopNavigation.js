import React from 'react'
import './DesktopNavigation.css'
import LogoType from '../../../shared/images/logotype.png'
export const DesktopNavigation = () => {
    return (
        <div className = 'desktopNavigationWrapper'>
            <img className='navigationLogotype'
                src={LogoType}
                alt={''}/>
        </div>
    )
}
