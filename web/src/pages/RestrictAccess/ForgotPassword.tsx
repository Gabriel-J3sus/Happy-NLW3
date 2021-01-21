import React, { FormEvent, useState } from 'react';

import api from '../../services/api';

import { ArrowLeftButton } from '../../components/Buttons';
import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/login_register_newPassword.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const data = { email }

        await api.post("auth/forgot_password", data);

        alert('Vai ver seu email!!!');
    }

    return (
        <div id="container">
            <ArrowLeftButton go="/login" buttonClass="arrow" iconSize={32} color="#12AFCB"/>

            <div className="form-container" style={{ marginBottom: 150 }}>
                
                <form onSubmit={() => {}}>
                    <fieldset>
                        <legend> Esqueci a senha </legend>

                        <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>

                        <div className="input-block">
                            <label htmlFor=""> E-mail </label>
                            <input 
                                id="email" 
                                type="email" 
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>

                    </fieldset>
                    <button type="submit" className="enter" style={{ marginTop: 21 }} onClick={handleSubmit}>
                        Entrar
                    </button>
                </form>
                
            </div>

            <RestrictAccess />
        </div>
    );
}

export default ForgotPassword;