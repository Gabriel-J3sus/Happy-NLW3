import React from 'react';

import { ArrowLeftButton, TextButton } from '../../components/Buttons';
import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/options.css';

function Options() {
    return (
        <div id="options">           
            <div className="buttons">
                <ArrowLeftButton go="/" buttonClass="arrow" iconSize={32} color="#12AFCB"/>

                <TextButton go="/register" title="Cadastrar" buttonClass="option-button"/>
                    
                <TextButton go="/login" title="Login" buttonClass="option-button"/>
            </div>


            <RestrictAccess />
            
        </div>
    );
}

export default Options;