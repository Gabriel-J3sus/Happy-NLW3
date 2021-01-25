import React, { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';
import RestrictAccess from '../../components/RestrictAccess';
import { ArrowLeftButton } from '../../components/Buttons';
import '../../styles/pages/RestrictAccess/login_register_newPassword.css';

interface User {
    email: string;
    token: string;
}

function ForgotPassword() {
    const params = useParams<User>();
    const history = useHistory();

    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (password !== confirmationPassword) {
            return;
        }
        
        const email = params.email;
        const token = params.token;

        const data = { email, password, token };
        
        await api.post("auth/reset_password", data);

        history.push('/login');
    }

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
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor=""> Repetir senha </label>
                            <input 
                                id="confirmation" 
                                type="password" 
                                value={confirmationPassword}
                                onChange={event => setConfirmationPassword(event.target.value)}
                            />
                        </div>

                    </fieldset>
                    <button className="enter" style={{ marginTop: 21 }} onClick={handleSubmit}>
                        Entrar
                    </button>
                </form>
                
            </div>

            <RestrictAccess />
        </div>
    );
}

export default ForgotPassword;