import './accordion.css';
import Fleche from './Vector.png';

import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    const [fleche, flecheBas] = useState(false);

    return (
    <div className="collapse">
        <div className="button" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
        </div>
        {isActive && <div className="texte-accordeon">{content}</div>}
    </div>
    );
};

export default Accordion;