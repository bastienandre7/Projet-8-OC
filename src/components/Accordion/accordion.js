import './accordion.css';

import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
    <div className="collapse">
        <div className="button" onClick={() => setIsActive(!isActive)}>
            <h3 className='title-accordion'>{title}</h3>
                <div>
                <i className={"fa-sharp fa-solid fa-chevron-down chevron fa-2x "+ (isActive ? "fleche" : "")  }></i>
            </div>
        </div>
        {isActive && <p className="texte-accordeon">{content}</p>}
    </div>
    );
};

export default Accordion;