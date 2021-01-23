import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

import '../styles/components/done.css';

interface Done {
    title: string;
    description: string;
    image: string;
    backgroundColor: string;
    buttonClass: string;
}

function Done({ title, description, image, backgroundColor, buttonClass }: Done) {
    const history = useHistory();

    window.setTimeout(() => {
        history.push(`/app`);
    }, 6000);

    return (
        <div id="done" style={{ backgroundColor: backgroundColor }}>
            <div className="content-wrapper" style={{ background: `url(${image}) no-repeat 80%, center` }}>
                <main>
                    <h1>{title}</h1>
                    <p>{description}</p>

                    <Link to={`/app`} className={buttonClass}>
                        Voltar
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Done;