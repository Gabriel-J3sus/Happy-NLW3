import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import Dashboard from '../../../components/Dashboard';
import Card from '../../../components/Card';


interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function RegisteredOrphanages() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    
    useEffect(() => {
        const token = localStorage.getItem('@HappyAuth:token');

        api.post('notPending', { headers: {'Authorization': api.defaults.headers.authorization = `Bearer ${token}`} }).then(response => {
            setOrphanages(response.data); //returns backend response from the authentication
        })
    }, []);

    if (!orphanages) {
        return <p>Carregando...</p>
    }

    return (
        <Dashboard status="location" title="Orfanatos Cadastrados" orphanages={orphanages.length}>
            <div className="container">
                {orphanages.map(orphanage => {
                    return (
                        <Card key={orphanage.id} latitude={orphanage.latitude} longitude={orphanage.longitude} title={orphanage.name} id={orphanage.id} url="orphanages"/>
                    );
                })}
            </div>
        </Dashboard>        
    );
}

export default RegisteredOrphanages;