import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';


import Options from '../pages/RestrictAccess/Options';
import Register from '../pages/RestrictAccess/Register';
import Login from '../pages/RestrictAccess/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/options" component={Options} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/app" component={OrphanagesMap} />

                {/* <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/success" component={OrphanageSuccess} /> */}
                <Route path="/orphanages/:id" component={Orphanage} />


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;