import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Repo } from '../pages/Repo'

export function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/repositorio/:repository+" component={Repo} />
            </Switch>
        </BrowserRouter>
    )
}