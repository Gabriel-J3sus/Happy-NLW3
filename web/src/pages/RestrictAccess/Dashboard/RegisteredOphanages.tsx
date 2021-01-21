import React from 'react';

import { useAuth } from '../../../contexts/auth';

import Dashboard from '../../../components/Dashboard';
import Card from '../../../components/Card';

function RegisteredOrphanages() {
    const { user } = useAuth();
    
    return (
        <Dashboard status="location" title="Orfanatos Cadastrados" orphanages={user?.orphanages.length as number}>
            <div className="container">
                {user?.orphanages.map(orphanage => {
                    return (
                        <Card key={orphanage.id} title={orphanage.name} latitude={orphanage.latitude} longitude={orphanage.longitude} />
                    );
                })}
            </div>
        </Dashboard>        
    );
}

export default RegisteredOrphanages;