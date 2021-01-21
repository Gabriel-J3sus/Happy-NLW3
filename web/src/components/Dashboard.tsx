import React from 'react';

import UserSidebar from './UserSidebar';
import { MapButton, PlusButton } from './Buttons';
import NoOrphanage from '../images/nothing-found.svg';
import '../styles/components/dashboard.css';


interface Dashboard {
    status: string;
    title: string;
    orphanages: number;
    children: any;
}

function Dashboard({ status, title, orphanages, children }: Dashboard) {
    if (orphanages === 0) {
        children = (
            <div className="empty-container">
                <img src={NoOrphanage} alt="Nenhum encontrado" />
            </div>
        );
    }

    return (
        <div id="dashboard">
            <UserSidebar status={`${status}`} />
            
            <div className="content">

                <main>
                    <div className="header">
                        <h1>{title}</h1>
                        <h3>{orphanages} orfanatos</h3>
                    </div>
                        
                    {children}
                        
                </main>
    
                <div className="footer">
                    <h4>Happy</h4>
                </div>
            </div>
            
            <MapButton go="/app" buttonClass="go-to-map" iconSize={32} color="#FFF" />
            <PlusButton go="/orphanages/create" buttonClass="create-orphanage" iconSize={32} color="#FFF"/>
        </div>
    );
}

export default Dashboard;