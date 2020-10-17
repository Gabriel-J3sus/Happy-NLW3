import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/options.css';

function Options() {
    return (
        <div id="options">           
            <div className="buttons">
                <Link to="/" className="arrow">
                    <FiArrowLeft size={32} color="#12AFCB" />
                </Link>
            
                <Link to="/register" className="first-button">
                    Cadastro
                </Link>

                <Link to="/login" className="second-button">
                    Login
                </Link>
            </div>

            <RestrictAccess />
            
        </div>
    );
}

export default Options;