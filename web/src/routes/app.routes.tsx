import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';


import Options from '../pages/RestrictAccess/Options';
import Register from '../pages/RestrictAccess/Register';
import Login from '../pages/RestrictAccess/Login';
import RegisteredOrphanages from '../pages/RestrictAccess/RegisteredOphanages';
import PendingOrphanages from '../pages/RestrictAccess/PendingOrphanages';
import CreateOrphanage from '../pages/CreateOrphanage';
import OrphanageSuccess from '../pages/OrphanageSuccess';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/options" component={Options} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/user/orphanages" component={RegisteredOrphanages} />
                <Route path="/user/pending" component={PendingOrphanages} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/success" component={OrphanageSuccess} />
                <Route path="/orphanages/:id" component={Orphanage} />


            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;