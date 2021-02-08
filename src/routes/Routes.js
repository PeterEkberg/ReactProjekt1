import {BrowserRouter, Switch, Route} from 'react-router-dom'
import RoutingPath from './RoutingPath'
import {HomeView} from '../pages/HomeView'
import {LoginView} from '../pages/LoginView'
import {BrandsView} from '../pages/navtabviews/brands/BrandsView'
import {NewsView} from '../pages/navtabviews/news/NewsView'
import {ShopView} from '../pages/navtabviews/shop/ShopView'
import {AccessoriesView} from '../pages/navtabviews/accessories/AccessoriesView'
import {SettingsView} from '../pages/authviews/SettingsView'
import {UserContext} from '../shared/provider/UserProvider'
import {useEffect, useContext} from 'react'

export const Routes = ({children}) => {
    const [authUser, setAuthUser] = useContext(UserContext)
    console.log(authUser ? 'INLOGGAD':'UTLOGGAD')
    const blockRoute =  (allowed, forbidden) => {
        return authUser ? allowed: forbidden
    }

    useEffect(() => {
		setAuthUser({ username: localStorage.getItem('user') })
	}, [])
    
    return(
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView}/>
                <Route exact path={RoutingPath.loginView} component={blockRoute(HomeView,LoginView)}/>
                <Route exact path={RoutingPath.accessoriesView} component={AccessoriesView}/>
                <Route exact path={RoutingPath.newsView} component={NewsView}/>
                <Route exact path={RoutingPath.brandsView} component={BrandsView}/>
                <Route exact path={RoutingPath.shopView} component={ShopView}/>
                <Route exact path={RoutingPath.settingsView} component={blockRoute(SettingsView, HomeView)}/>
                <Route component={HomeView}/>
            </Switch>
        </BrowserRouter>

    )
}