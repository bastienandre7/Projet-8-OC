import './logement.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import array from '../../logements.json';
import Accordion from '../../components/Accordion/accordion';



function Logement() {
    const location = useLocation();
    const [selectedFlat, setSelectedFlat] = useState(null);
    useEffect(dataState, []);


    function dataState(){
        const state = array.filter((select) => select.id === location.state)[0];
        setSelectedFlat(state);
    };

    
    if(selectedFlat == null) return;

    
    return(
            <main>
                <img src={selectedFlat.cover} className='img-banner' />
                <div>
                    <h2>{selectedFlat.title}</h2>
                    <p>{selectedFlat.location}</p>
                    {selectedFlat.tags.map((tag) => (<span>{tag}</span>))}
                </div>
                <div>
                    <p>{selectedFlat.host.name}</p>
                    <img src={selectedFlat.host.picture} />
                    <div>
                        {[1, 2, 3, 4, 5].map((number) => 
                        (<span className={selectedFlat.rating >= number ? "red-star" : "gray-star"}>
                            <i className="fa-solid fa-star fa-sm"></i>
                        </span>) 
                        )}
                    </div>
                </div>
                <div className=''>
                    <Accordion title="Description" content={selectedFlat.description} />
                    <Accordion title="Équipements" content={selectedFlat.equipments} />
                </div>
            </main>
    );
}

export default Logement;