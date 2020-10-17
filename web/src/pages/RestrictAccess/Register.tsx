import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/loginandregister.css';

function Register() {
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
                        <legend> Criar cadastro </legend>
                            
                        <div className="input-block">
                            <label htmlFor=""> Nome </label>
                            <input id="name" />
                        </div>

                        <div className="input-block">
                            <label htmlFor=""> E-mail </label>
                            <input id="email" />
                        </div>
                            
                        <div className="input-block">
                            <label htmlFor=""> Senha </label>
                            <input id="password" type="password"/>
                        </div>

                        <Link to="/" className="enter">
                            Cadastrar
                        </Link>
                    </fieldset>
                </form>
                
            </div>

            <RestrictAccess />
        </div>
    );

}

export default Register;