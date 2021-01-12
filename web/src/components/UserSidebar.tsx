import React from 'react';
import { CgLogOff } from 'react-icons/cg';
import { GoLocation } from 'react-icons/go';
import { FiAlertCircle } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/userSidebar.css';
import { Link } from 'react-router-dom';

interface Button {
    status: string;
    navigate: string;
}

export default function UserSidebar({ status, navigate }: Button) {
    const statusLocationColors = status === "location" ?  { color: "#0089A5", background: "#FFD666" } : { color: "#FFF", background: "#12AFCB", };
    const statusWarningColors = status === "warning" ? { color: "#0089A5", background: "#FFD666" } : { color: "#FFF", background: "#12AFCB", };
    
    function logOff() {}

    return (
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy" />

            <main>
                <div className="location" style={{ background: `${statusLocationColors.background}`}}>
                    <Link to={`${navigate}`}>
                        <GoLocation size={24} color={`${statusLocationColors.color}`}/>
                    </Link >
                </div>

                <div className="warning" style={{ background: `${statusWarningColors.background}` }}>
                    <Link to={`${navigate}`}>
                        <FiAlertCircle size={24} color={`${statusWarningColors.color}`} />
                    </Link>
                </div>
            </main>

            <footer>
                <button type="button" onClick={logOff}>
                    <CgLogOff size={24} color="#FFF" />
                </button>
            </footer>
        </aside>

    );
}