import React from 'react';
import { FaCheck } from "react-icons/fa6";

const CompleteIcon = (props) => {
    const { className, onClick, completed } = props;
    const fillColor = completed ? "green" : "gray";

    return (
        <FaCheck
            className={className}
            onClick={onClick}
            fill={fillColor}
        />
    );
}

export { CompleteIcon };