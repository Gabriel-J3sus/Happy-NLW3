import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegisteredOrphanages from '../pages/RestrictAccess/RegisteredOphanages';
import PendingOrphanages from '../pages/RestrictAccess/PendingOrphanages';
import CreateOrphanage from '../pages/CreateOrphanage';
import OrphanageSuccess from '../pages/OrphanageSuccess';

function AppRoutes() {
    return (
        <Switch>
            <Route path="/user/orphanages" component={RegisteredOrphanages} />
            <Route path="/user/pending" component={PendingOrphanages} />
            <Route path="/orphanages/create" component={CreateOrphanage} />
            <Route path="/orphanages/success" component={OrphanageSuccess} />
        </Switch>
        
    );
}

export default AppRoutes;