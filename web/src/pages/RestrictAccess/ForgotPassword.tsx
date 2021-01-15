import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeftButton } from '../../components/Buttons';
import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/login_register_newPassword.css';

function ForgotPassword() {
    return (
        <div id="container">
            <ArrowLeftButton go="/login" buttonClass="arrow" iconSize={32} color="#12AFCB"/>

            <div className="form-container">
                
                <form onSubmit={() => {}}>
                    <fieldset>
                        <legend> Esqueci a senha </legend>

                        <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>

                        <div className="input-block">
                            <label htmlFor=""> E-mail </label>
                            <input 
                                id="email" 
                                type="email" 
                                // value={email}
                                // onChange={event => setEmail(event.target.value)}
                            />
                        </div>

                    </fieldset>
                    <Link to="/password" type="submit" className="enter" style={{ marginTop: 21 }}>
                        Entrar
                    </Link>
                </form>
                
            </div>

            <RestrictAccess />
        </div>
    );
}

export default ForgotPassword;