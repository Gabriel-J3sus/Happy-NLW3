import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import Register from '../pages/RestrictAccess/Register';
import Login from '../pages/RestrictAccess/Login';
import ForgotPassword from '../pages/RestrictAccess/ForgotPassword';
import NewPassword from '../pages/RestrictAccess/NewPassword';
import CreateOrphanage from '../pages/CreateOrphanage';
import OrphanageSuccess from '../pages/OrphanageSuccess';

function AuthRoutes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/forgot_password" component={ForgotPassword} />
                <Route path="/new_password/:email/:token" component={NewPassword} />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/success" component={OrphanageSuccess} /> 
                <Route path="/orphanages/:id" component={Orphanage} />
                
                <Redirect from={`/${user?.name}/orphanages`} to="/" />
                <Redirect from={`/${user?.name}/pending`} to="/" />
                <Redirect from="/orphanages/delete/:orphanageName" to="/" />        
            </Switch>
        </BrowserRouter>
        
    );
}

export default AuthRoutes;