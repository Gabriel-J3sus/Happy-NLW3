import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';
import { ArrowLeftButton } from '../../components/Buttons';
import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/login_register_newPassword.css';

function Login() {
    const { signIn } = useAuth();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        const data = { email, password }

        await signIn(data, "auth");  
    }


    return (
        <div id="container">
            <ArrowLeftButton go="/" buttonClass="arrow" iconSize={32} color="#12AFCB"/>
            
            <div className="form-container" style={{ marginBottom: 75 }}>
                
                <form onSubmit={handleSignIn}>
                    <fieldset>
                        <legend> Fazer Login </legend>

                        <div className="input-block">
                            <label htmlFor=""> E-mail </label>
                            <input 
                                id="email" 
                                type="email" 
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                            
                        <div className="input-block">
                            <label htmlFor=""> Senha </label>
                            <input 
                                id="password" 
                                type="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="about-password">
                            <Link to="/forgot_password" className="forgot-password">
                                Esqueci minha senha
                            </Link>
                        </div>

                    </fieldset>
                    <button type="submit" className="enter">
                        Entrar
                    </button>
                    
                </form>
                
                    
                <Link to="/register" className="create-account">
                    Criar uma conta
                </Link>
                    
            </div>

            <RestrictAccess />
        </div>
    );

}

export default Login;