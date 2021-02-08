
import {MobileNavigation} from './mobilenavigation/MobileNavigation'
import {DesktopNavigation} from './desktopnavigation/DesktopNavigation'
import {useWindowDimensions} from '../../hooks/useWindowDimensions'


export const Navigation = () => {
    
    const{width}=useWindowDimensions()
    const displayNavigationDependingOnDevice =()=>{
        return(width<=1000)
        ?<MobileNavigation/>
        :<DesktopNavigation/>
    }
    return (
        <div>
            {displayNavigationDependingOnDevice()}
            
        </div>
    )
}