import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

import RegisteredOrphanages from '../pages/RestrictAccess/Dashboard/RegisteredOphanages';
import PendingOrphanages from '../pages/RestrictAccess/Dashboard/PendingOrphanages';
import CreateOrphanage from '../pages/CreateOrphanage';
import OrphanageSuccess from '../pages/OrphanageSuccess';
import OrphanageDelete from '../pages/OrphanageDeleted';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';


function AppRoutes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            <Switch>
                <Route path={`/${user?.name}/orphanages`} exact component={RegisteredOrphanages} />
                <Route path={`/${user?.name}/pending`} component={PendingOrphanages} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/success" component={OrphanageSuccess} /> 
                <Route path="/orphanages/delete" component={OrphanageDelete} />        
                {/* <Route path={`/orphanages/${1}`} component={Orphanage} />         */}
                <Route path="/app" component={OrphanagesMap} />
                
                <Redirect from="/" to={`/${user?.name}/orphanages`} />
                <Redirect from="/register" to={`/${user?.name}/orphanages`} />
                <Redirect from="/login" to={`/${user?.name}/orphanages`} />
                <Redirect from="/forgot" to={`/${user?.name}/orphanages`} />
                <Redirect from="/password" to={`/${user?.name}/orphanages`} />
                {/* <Redirect from="/orphanages/:id" to={`/${user?.name}/orphanages`} /> */}

            </Switch>    
        </BrowserRouter>
    );
}

export default AppRoutes;