import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomeView} from '../pages/HomeView'
import {AboutView} from '../pages/AboutView'

export const Routes = ({children}) =>{
    return(
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={'/home'} component={HomeView}/>
                <Route exact path={'/about'} component={AboutView}/>
            </Switch>
        </BrowserRouter>

    )
}