import React from 'react';

import { useAuth } from '../../../contexts/auth';
import UserSidebar from '../../../components/UserSidebar';
import Card from '../../../components/Card';

import '../../../styles/pages/RestrictAccess/Dashboard/registered_and_pending.css';

function RegisteredOrphanages() {
    const { user } = useAuth();

    return (
        <div id="page-registered-orphanages">
            <UserSidebar status="location" />
            
            <main>
                <div className="wrapper">
                    <div className="header">
                        <h1>Orfanatos Cadastrados</h1>
                        <h3>2 orfanatos</h3>
                    </div>

                    <div className="container">
                        <Card />
                        <Card />
                        <Card />

                    </div>
                </div>
            </main>
        </div>
    );
}

export default RegisteredOrphanages;