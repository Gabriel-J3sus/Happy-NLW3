import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../styles/pages/orphanage-success.css'

function OrphanageSuccess() {
    const history = useHistory();

    window.setTimeout(() => {
        history.push('/app');
    }, 6000);

    return (
        <div id="page-success">
            <div className="content-wrapper">
                <main>
                    <h1>Ebaaa!</h1>
                    <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)
                    </p>

                    <Link to="/users/orphanages" className="back-to-map">
                        Voltar para o mapa
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default OrphanageSuccess;