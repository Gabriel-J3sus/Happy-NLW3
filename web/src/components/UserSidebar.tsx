import React from 'react';
import { CgLogOff } from 'react-icons/cg';
import { GoLocation } from 'react-icons/go';
import { FiAlertCircle } from 'react-icons/fi';

import { useAuth } from '../contexts/auth';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/userSidebar.css';
import { Link, useHistory } from 'react-router-dom';

interface Button {
    status: string;
}

function UserSidebar({ status }: Button) {
    const history = useHistory()
    const { signOut, user } = useAuth();

    const statusLocationColors = status === "location" ?  { color: "#0089A5", background: "#FFD666" } : { color: "#FFF", background: "#12AFCB", };
    const statusWarningColors = status === "warning" ? { color: "#0089A5", background: "#FFD666" } : { color: "#FFF", background: "#12AFCB", };
    
    function handleSignOut() {
        signOut();
        history.push('/login');
    }

    return (
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy" />

            <main>
                <Link to={`/${user?.name}/orphanages`}>
                    <div className="location" style={{ background: `${statusLocationColors.background}`}}>
                        <GoLocation size={24} color={`${statusLocationColors.color}`} />
                    </div>
                </Link >

                <Link to={`/${user?.name}/pending`}>
                    <div className="warning" style={{ background: `${statusWarningColors.background}` }}>
                        <FiAlertCircle size={24} color={`${statusWarningColors.color}`} />
                    </div>
                </Link>
            </main>

            <footer>
                <button type="button" onClick={handleSignOut}>
                    <CgLogOff size={24} color="#FFF" />
                </button>
            </footer>
        </aside>

    );
}

export default UserSidebar;