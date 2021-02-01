import {BrowserRouter, Switch, Route} from 'react-router-dom'
import RoutingPath from './RoutingPath'
import {HomeView} from '../pages/HomeView'
import {LoginView} from '../pages/LoginView'
import {brandsView} from '../pages/navtabviews/brands/BrandsView'
import {newsView} from '../pages/navtabviews/news/NewsView'
import {shopView} from '../pages/navtabviews/shop/ShopView'
import {accessoriesView} from '../pages/navtabviews/accessories/AccessoriesView'

import {UserContext} from '../shared/provider/UserProvider'
import {useEffect, useContext} from 'react'

export const Routes = ({children}) => {
    const [, setAuthUser] = useContext(UserContext)
    useEffect(() => {
		setAuthUser({ username: localStorage.getItem('user') })
	}, [])
    return(
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView}/>
                <Route exact path={RoutingPath.loginView} component={LoginView}/>
                <Route exact path={RoutingPath.accessoriesView} component={accessoriesView}/>
                <Route exact path={RoutingPath.newsView} component={newsView}/>
                <Route exact path={RoutingPath.brandsView} component={brandsView}/>
                <Route exact path={RoutingPath.shopView} component={shopView}/>
                <Route component={HomeView}/>
            </Switch>
        </BrowserRouter>

    )
}