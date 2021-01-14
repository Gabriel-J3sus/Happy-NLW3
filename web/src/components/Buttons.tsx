import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/components/Buttons.css';

interface Options {
    goBack: string;
    title?: string;
}

export const ArrowButton = ({ goBack }: Options) => {
    return (
            <Link to={goBack} className="arrow">
                <FiArrowLeft size={32} color="#12AFCB" />
            </Link>
    );
}

export const OptionButton = ({ goBack, title }: Options) => {
    return (
        <Link to={`${goBack}`} className="option-button">
            {title}
        </Link>
    );
}