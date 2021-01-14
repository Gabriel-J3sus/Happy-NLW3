import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/components/arrowButton.css';

interface Options {
    goBack: string;
}

function ArrowButton({ goBack }: Options) {
    return (
        <div className="buttons">
            <Link to={goBack} className="arrow">
                <FiArrowLeft size={32} color="#12AFCB" />
            </Link>
        </div>

    );
}

export default ArrowButton;