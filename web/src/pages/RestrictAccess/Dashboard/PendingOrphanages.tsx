import React from 'react';

import Dashboard from '../../../components/Dashboard';
import Card from '../../../components/Card';

function PendingOrphanages() {
    return (
        <Dashboard status="warning" title="Cadastros Pendentes" orphanages={0}>
            <div className="container">
                <Card />
                <Card />
            </div>
        </Dashboard>
    );
}

export default PendingOrphanages;