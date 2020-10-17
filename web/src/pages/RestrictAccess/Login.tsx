import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/loginandregister.css';

function Login() {
    return (
        <div id="container">
            <div className="buttons">
                <Link to="/options" className="arrow">
                    <FiArrowLeft size={32} color="#12AFCB" />
                </Link>
            </div>
            <div className="form-container">
                
                <form>
                    <fieldset>
                        <legend> Fazer Login </legend>

                        <div className="input-block">
                            <label htmlFor=""> E-mail </label>
                            <input id="email" />
                        </div>
                            
                        <div className="input-block">
                            <label htmlFor=""> Senha </label>
                            <input id="password" type="password"/>
                        </div>

                        <div className="about-password">
                            <div className="checkbox-container">
                                <input id="check" type="checkbox"/> 
                                <label htmlFor="check">Lembra-me</label>
                            </div>

                            <Link to="/" className="forgot-password">
                                Esqueci minha senha
                            </Link>
                        </div>

                        <Link to="/" className="enter">
                            Entrar
                        </Link>
                    </fieldset>
                </form>
                
            </div>

            <RestrictAccess />
        </div>
    );

}

export default Login;