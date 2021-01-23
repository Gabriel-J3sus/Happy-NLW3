import React from 'react';

import Done from '../components/done';
import deleteImg from '../images/delete.svg';

function OrphanageDelete() {
    return (
        <Done 
            title="Excluir!"
            description="Você tem certeza que quer excluir Orf. Esperança?"
            image={deleteImg}
            backgroundColor="#FF669D"
            buttonClass="deleteButton"
        />
    );
}

export default OrphanageDelete;