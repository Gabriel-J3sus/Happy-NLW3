import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import RegisteredOrphanages from '../pages/RestrictAccess/RegisteredOphanages';
import PendingOrphanages from '../pages/RestrictAccess/PendingOrphanages';
import CreateOrphanage from '../pages/CreateOrphanage';
import OrphanageSuccess from '../pages/OrphanageSuccess';
import { useAuth } from '../contexts/auth';

function AppRoutes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            <Switch>
                <Route path={`/${user?.name}/orphanages`} exact component={RegisteredOrphanages} />
                <Route path={`/${user?.name}/pending`} component={PendingOrphanages} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/success" component={OrphanageSuccess} />        
                
                <Redirect from="/" to={`/${user?.name}/orphanages`} />
                <Redirect from="/options" to={`/${user?.name}/orphanages`} />
                <Redirect from="/register" to={`/${user?.name}/orphanages`} />
                <Redirect from="/login" to={`/${user?.name}/orphanages`} />
                <Redirect from="/forgot" to={`/${user?.name}/orphanages`} />
                <Redirect from="/password" to={`/${user?.name}/orphanages`} />
                <Redirect from="/app" to={`/${user?.name}/orphanages`} />
                <Redirect from="/orphanages/:id" to={`/${user?.name}/orphanages`} />

            </Switch>    
        </BrowserRouter>
    );
}

export default AppRoutes;