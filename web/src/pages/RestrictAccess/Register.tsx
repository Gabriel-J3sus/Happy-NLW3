import React, { FormEvent, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import RestrictAccess from '../../components/RestrictAccess';
import api from '../../services/api';
import '../../styles/pages/RestrictAccess/loginandregister.css';

function Register() {
    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            name,
            email,
            password,
        };

        await api.post('users', data);

        alert("Cadastro realizado com sucesso");

        history.push('/login');
    }

    return (
        <div id="container">
            <div className="buttons">
                <Link to="/options" className="arrow">
                    <FiArrowLeft size={32} color="#12AFCB" />
                </Link>
            </div>
            <div className="form-container">  
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend> Criar cadastro </legend>
                            
                        <div className="input-block">
                            <label htmlFor="name"> Nome </label>
                            <input 
                                id="name" 
                                value={name} 
                                onChange={event => setName(event.target.value)} 
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="email"> E-mail </label>
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

                    </fieldset>
                    
                    <button type="submit" className="enter">
                        Cadastrar
                    </button>
                </form>
                
            </div>

            <RestrictAccess />
        </div>
    );

}

export default Register;