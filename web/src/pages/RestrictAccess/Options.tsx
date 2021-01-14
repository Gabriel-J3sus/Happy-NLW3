import React from 'react';

import { ArrowButton, OptionButton } from '../../components/Buttons';
import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/options.css';

function Options() {
    return (
        <div id="options">           
            <div className="buttons">
                <ArrowButton goBack="/" />

                <OptionButton goBack="/register" title="Cadastrar" />
                    
                <OptionButton goBack="/login" title="Login" />
            </div>


            <RestrictAccess />
            
        </div>
    );
}

export default Options;