import React from 'react';

import RestrictAccess from '../../components/RestrictAccess';
import { ArrowLeftButton } from '../../components/Buttons';
import '../../styles/pages/RestrictAccess/login_register_newPassword.css';

function ForgotPassword() {
    return (
        <div id="container">
            <ArrowLeftButton go="/forgot" buttonClass="arrow" iconSize={32} color="#12AFCB"/>
            
            <div className="form-container" style={{ marginBottom: 150 }}>
                
                <form onSubmit={() => {}}>
                    <fieldset>
                        <legend> Redefinição de senha </legend>

                        <p>Escolha uma nova senha para você acessar o dashboard do Happy</p>

                        <div className="input-block">
                            <label htmlFor=""> Nova senha </label>
                            <input 
                                id="password" 
                                type="password" 
                                // value={email}
                                // onChange={event => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor=""> Repetir senha </label>
                            <input 
                                id="confirmation" 
                                type="password" 
                                // value={email}
                                // onChange={event => setEmail(event.target.value)}
                            />
                        </div>

                    </fieldset>
                    <button className="enter" style={{ marginTop: 21 }}>
                        Entrar
                    </button>
                </form>
                
            </div>

            <RestrictAccess />
        </div>
    );
}

export default ForgotPassword;