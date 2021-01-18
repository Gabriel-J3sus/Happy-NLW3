import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import Options from '../pages/RestrictAccess/Options';
import Register from '../pages/RestrictAccess/Register';
import Login from '../pages/RestrictAccess/Login';
import ForgotPassword from '../pages/RestrictAccess/ForgotPassword';
import NewPassword from '../pages/RestrictAccess/NewPassword';
import { useAuth } from '../contexts/auth';

function AuthRoutes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/options" component={Options} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/forgot" component={ForgotPassword} />
                <Route path="/password" component={NewPassword} />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/:id" component={Orphanage} />

                <Redirect from={`/${user?.name}/orphanages`} to="/" />
                <Redirect from={`/${user?.name}/pending`} to="/" />
                <Redirect from='/orphanages/create' to="/" />
                <Redirect from='/orphanages/success' to="/" />

            </Switch>
        </BrowserRouter>
        
    );
}

export default AuthRoutes;