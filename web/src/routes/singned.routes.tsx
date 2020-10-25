import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateOrphanage from '../pages/CreateOrphanage';
import OrphanageSuccess from '../pages/OrphanageSuccess';

function SingnedRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/success" component={OrphanageSuccess} />
            </Switch>
        </BrowserRouter>
    );
}

export default SingnedRoutes;