import './NavigationTabs.css'
import RoutingPath from '../../../../routes/RoutingPath'

import {useHistory} from 'react-router-dom'

export const NavigationTabs = () => {
    const history=useHistory()
    return (
        <ul className='ulTabsWrapper'>
            <li className='liTabs' onClick={() => history.push(RoutingPath.shopView)}>Butik</li>
            <li className='liTabs' onClick={() => history.push(RoutingPath.accessoriesView)}>Accesoarer</li>
            <li className='liTabs' onClick={() => history.push(RoutingPath.brandsView)}>Varumärken</li>
            <li className='liTabs' onClick={() => history.push(RoutingPath.newsView)}>Nyheter</li>
         </ul>
    )
}
