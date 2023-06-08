import './logement.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import array from '../../logements.json';
import Accordion from '../../components/Accordion/accordion';
import Tags from '../../components/Tags/tags';
import Carrousel from '../../components/Carrousel/carrousel';




function Logement() {
    
    const id = useParams();

    const selected = array.filter((select) => select.id === id.id)[0];

    useEffect(() => {
        fetch(`http://localhost:3000/logement/${selected.id}`)
    });

    
    if(selected == null) return;

    
    return(
            <main>
                <Carrousel length={selected.pictures.length} source={selected.pictures} title={selected.title} />
                <div className='container-info'>
                    <div className='titre-loca-tag'>
                        <h1 className='titre-logement'>{selected.title}</h1>
                        <h2 className='location'>{selected.location}</h2>
                        <Tags selectedTags={selected.tags}/>
                    </div>
                    <div className='nom-photo-stars'>
                        <div className='nom-photo'>
                            <p className='nom'>{selected.host.name}</p>
                            <img src={selected.host.picture} className='photo-profil' alt={selected.host.name} />
                        </div>
                        <div className='stars-container'>
                            {[1, 2, 3, 4, 5].map((number, index) => 
                            (<span key={index} className={selected.rating >= number ? "red-star" : "gray-star"}>
                                <i className="fa-sharp fa-solid fa-star fa-2x"></i>
                            </span>) 
                            )}
                        </div>
                    </div>
                </div>
                <div className='accordion-logement'>
                    <Accordion title="Description"  content={selected.description} />
                    <div className='txt-vertical'>
                        <Accordion title="Équipements"  content={selected.equipments.map((index)=> (<li className='li-tag' key={index}>{index}</li>))} />
                    </div>
                </div>
            </main>
    );
}

export default Logement;