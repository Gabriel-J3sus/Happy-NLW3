import React from 'react';

import Dashboard from '../../../components/Dashboard';
import Card from '../../../components/Card';

function RegisteredOrphanages() {
    return (
        <Dashboard status="location" title="Orfanatos Cadastrados" orphanages={2}>
            <div className="container">
                <Card />
                <Card />
            </div>
        </Dashboard> 
    );
}

export default RegisteredOrphanages;