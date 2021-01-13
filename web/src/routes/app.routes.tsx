import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import RegisteredOrphanages from '../pages/RestrictAccess/RegisteredOphanages';
import PendingOrphanages from '../pages/RestrictAccess/PendingOrphanages';
import CreateOrphanage from '../pages/CreateOrphanage';
import OrphanageSuccess from '../pages/OrphanageSuccess';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/users/orphanages" exact component={RegisteredOrphanages} />
                <Route path="/users/pending" component={PendingOrphanages} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/success" component={OrphanageSuccess} />        
                
                <Redirect from="/" to="/users/orphanages" />
                <Redirect from="/options" to="/users/orphanages" />
                <Redirect from="/register" to="/users/orphanages" />
                <Redirect from="/login" to="/users/orphanages" />
                <Redirect from="/app" to="/users/orphanages" />
                <Redirect from="/orphanages/:id" to="/users/orphanages" />

            </Switch>    
        </BrowserRouter>
    );
}

export default AppRoutes;