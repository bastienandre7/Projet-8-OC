import './logement.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import array from '../../logements.json';
import Accordion from '../../components/Accordion/accordion';
import Tags from '../../components/Tags/tags'




function Logement() {
    const location = useLocation();
    const [selectedFlat, setSelectedFlat] = useState(null);
    useEffect(dataState, []);


    function dataState(){
        const state = array.filter((select) => select.id === location.state)[0];
        setSelectedFlat(state);
    };


    let index = 0;

    function suivante(){
        const img = document.getElementById("image");
        const cpt = document.getElementById("compteur");
        if (index >= selectedFlat.pictures.length-1)
            index = -1;
        index++;
        img.setAttribute("src", selectedFlat.pictures[index]);
        cpt.innerHTML = (index+1)+"/"+(selectedFlat.pictures.length);
        return
    };

    

    function precedente(){
        const img = document.getElementById("image");
        const cpt = document.getElementById("compteur");
        if (index <= 0 )
            index = selectedFlat.pictures.length;
        index--;
        img.setAttribute("src", selectedFlat.pictures[index]);
        cpt.innerHTML = (index+1)+"/"+(selectedFlat.pictures.length);
        return
    };
    
    
    if(selectedFlat == null) return;

    
    
    return(
            <main>
                <div className='container-carousel'>
                    <img src={selectedFlat.pictures[0]} id='image' className='img-banner' />
                    <i onClick={() => precedente()} id='arrow-carousel' className={selectedFlat.pictures.length === 1 ? "none" : "fa-sharp fa-solid fa-chevron-left fa-5x arrow-left"}></i>
                    <i onClick={() => suivante()} id='arrow-carousel' className={selectedFlat.pictures.length === 1 ? "none" : "fa-sharp fa-solid fa-chevron-right fa-5x arrow-right"}></i>
                    <div className="position">
                        <p id='compteur' className='compteur'>1/{selectedFlat.pictures.length}</p>
                    </div>
                </div>
                <div className='container-info'>
                    <div className='titre-loca-tag'>
                        <h2 className='titre-logement'>{selectedFlat.title}</h2>
                        <p className='location'>{selectedFlat.location}</p>
                        <Tags selectedTags={selectedFlat.tags}/>
                    </div>
                    <div className='nom-photo-stars'>
                        <div className='nom-photo'>
                            <p className='nom'>{selectedFlat.host.name}</p>
                            <img src={selectedFlat.host.picture} className='photo-profil' />
                        </div>
                        <div className='stars-container'>
                            {[1, 2, 3, 4, 5].map((number, index) => 
                            (<span key={index} className={selectedFlat.rating >= number ? "red-star" : "gray-star"}>
                                <i className="fa-sharp fa-solid fa-star fa-2x"></i>
                            </span>) 
                            )}
                        </div>
                    </div>
                </div>
                <div className='accordion-logement'>
                    <Accordion title="Description"  content={selectedFlat.description} />
                    <div className='txt-vertical'>
                        <Accordion title="Équipements"  content={selectedFlat.equipments.map((index)=> (<li className='li-tag' key={index}>{index}</li>))} />
                    </div>
                </div>
            </main>
    );
}

export default Logement;