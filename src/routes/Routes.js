import {BrowserRouter, Switch, Route} from 'react-router-dom'
import RoutingPath from './RoutingPath'
import {HomeView} from '../pages/HomeView'
import {LoginView} from '../pages/LoginView'
import {brandsView} from '../pages/navtabviews/brands/BrandsView'
import {newsView} from '../pages/navtabviews/news/NewsView'
import {ShopView} from '../pages/navtabviews/shop/ShopView'
import {accessoriesView} from '../pages/navtabviews/accessories/AccessoriesView'
import {SettingsView} from '../pages/authviews/SettingsView'
import {UserContext} from '../shared/provider/UserProvider'
import {useEffect, useContext} from 'react'

export const Routes = ({children}) => {
    const [authUser, setAuthUser] = useContext(UserContext)

    const blockRoute =  (allowed, notAllowed) => {
        return !authUser ? allowed: notAllowed
    }

    useEffect(() => {
		setAuthUser({ username: localStorage.getItem('user') })
	}, [])
    return(
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView}/>
                <Route exact path={RoutingPath.loginView} component={blockRoute(LoginView,HomeView)}/>
                <Route exact path={RoutingPath.accessoriesView} component={accessoriesView}/>
                <Route exact path={RoutingPath.newsView} component={newsView}/>
                <Route exact path={RoutingPath.brandsView} component={brandsView}/>
                <Route exact path={RoutingPath.shopView} component={ShopView}/>
                <Route exact path={RoutingPath.settingView} component={SettingsView}/>
                <Route component={HomeView}/>
            </Switch>
        </BrowserRouter>

    )
}