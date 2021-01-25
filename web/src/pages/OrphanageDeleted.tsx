import React from 'react';
import { useParams } from 'react-router-dom';

import Done from '../components/done';
import deleteImg from '../images/delete.svg';

interface OrphanageParams {
    orphanageName: string;
}

function OrphanageDelete() {
    const params = useParams<OrphanageParams>();
    
    return (
        <Done 
            title="Excluir!"
            description={`Você tem certeza que quer excluir ${params.orphanageName}?`}
            image={deleteImg}
            backgroundColor="#FF669D"
            buttonClass="deleteButton"
        />
    );
}

export default OrphanageDelete;