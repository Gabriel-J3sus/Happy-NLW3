import React from 'react';

import Done from '../components/done';
import successImg from '../images/success.svg';

function OrphanageSuccess() {
    return (
        <Done 
            title="Ebaaa!" 
            description="O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)"
            image={successImg}
            backgroundColor="#37C77F"
            buttonClass="successButton"
        />
    );
}

export default OrphanageSuccess;