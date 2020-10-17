import React from 'react';

import '../styles/components/RestrictAccess.css';
import secondlogo from '../images/secondlogo.svg';

function RestrictAccess() {
    return (
        <div id="RestrictAccess">
            <div className="left-container">
                <img src={secondlogo} alt="Happy" />

                <div className="location">
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </div>    
            </div>
        </div>
    );
}

export default RestrictAccess;