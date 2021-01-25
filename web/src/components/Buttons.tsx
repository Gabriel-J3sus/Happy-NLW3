import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiPlus } from 'react-icons/fi';

import '../styles/components/Buttons.css';

interface Options {
    go: string;
    buttonClass: string;
    iconSize?: number;
    color?: string;
    title?: string;
}

export const ArrowRightButton = ({ go, buttonClass, iconSize, color }: Options) => {
    return (/*enter-app*/
        <Link to={go} className={buttonClass}>
            <FiArrowRight size={iconSize} color={color} />
        </Link>
    );
}

export const ArrowLeftButton = ({ go, buttonClass, iconSize, color }: Options) => {
    return (
            <Link to={go} className={buttonClass}>
                <FiArrowLeft size={iconSize} color={color} />
            </Link>
    );
}

export const PlusButton = ({ go, buttonClass, iconSize, color }: Options) => {
    return (
        <Link to={go} className={buttonClass}>
            <FiPlus size={iconSize} color={color} />
        </Link>
    );
}

export const TextButton = ({ go, title, buttonClass }: Options) => {
    return (
        <Link to={go} className={buttonClass}>
            {title}
        </Link>
    );
}
