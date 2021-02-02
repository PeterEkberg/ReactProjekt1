import './SideBar.css'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'


export const SideBar = (props) => {
    const history = useHistory()
    const handleRedirect = (selectedView) =>{
        history.push(selectedView)
        props.drawerHandler(false)
    }
   
    return (
        <div className={props.drawerIsOpen ?'side-drawer open':'side-drawer' }>
        <button onClick={()=>props.drawerHandler(false)}>CLOSE sidebar</button>
        <div className='profileDropdownx'>
            <span className='liTabs' onClick={() => handleRedirect(RoutingPath.shopView)}>Butik</span>
            <span className='liTabs' onClick={() => handleRedirect(RoutingPath.accessoriesView)}>Accesoarer</span>
            <span className='liTabs' onClick={() => handleRedirect(RoutingPath.brandsView)}>Varumärken</span>
            <span className='liTabs' onClick={() => handleRedirect(RoutingPath.newsView)}>Nyheter</span>
         </div>
        </div>
    )
}
