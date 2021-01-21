import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomeView} from '../pages/HomeView'
import {AboutView} from '../pages/AboutView'
import RoutingPath from './RoutingPath'
import {LoginView} from '../pages/LoginView'

export const Routes = ({children}) =>{
    return(
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView}/>
                <Route exact path={RoutingPath.aboutView} component={AboutView}/>
                <Route exact path={RoutingPath.loginView} component={LoginView}/>
                <Route component={HomeView}/>
            </Switch>
        </BrowserRouter>

    )
}