import React, { FormEvent, useState } from 'react';

import { useAuth } from '../../contexts/auth';
import { ArrowLeftButton } from '../../components/Buttons';
import RestrictAccess from '../../components/RestrictAccess';
import '../../styles/pages/RestrictAccess/login_register_newPassword.css';

function Register() {
    const { signIn } = useAuth();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = { name, email, password };

        await signIn(data, "users");
    }

    return (
        <div id="container">
            <ArrowLeftButton go="/login" buttonClass="arrow" iconSize={32}  color="#12AFCB"/>
            
            <div className="form-container" style={{ marginBottom: 150 }}>  
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