import React, { FormEvent, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/loginandregister.css';

function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        const data = {
            email,
            password,
        };

        const response = await api.post("auth", data);

        console.log(response.data);

        alert('ok');
    }


    return (
        <div id="container">
            <div className="buttons">
                <Link to="/options" className="arrow">
                    <FiArrowLeft size={32} color="#12AFCB" />
                </Link>
            </div>
            <div className="form-container">
                
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
                            <Link to="/" className="forgot-password">
                                Esqueci minha senha
                            </Link>
                        </div>

                    </fieldset>
                    <button type="submit" className="enter">
                        Entrar
                    </button>
                </form>
                
            </div>

            <RestrictAccess />
        </div>
    );

}

export default Login;