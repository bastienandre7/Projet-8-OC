import './carrousel.css';
import React, { useState } from 'react';

const Carrousel = ({length, source, title}) => {

    const [index, setIndex] = useState(0);

    function suivante(){
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
        return
    };

    

    function precedente(){
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length-1 : newIndex);
        return
    };


    return(

        <div className='container-carousel'>
                    <img src={source[index]} id='image' className='img-banner' alt={title} />
                    <i onClick={() => precedente()} id='arrow-carousel' className={length === 1 ? "none" : "fa-sharp fa-solid fa-chevron-left fa-5x arrow-left"}></i>
                    <i onClick={() => suivante()} id='arrow-carousel' className={length === 1 ? "none" : "fa-sharp fa-solid fa-chevron-right fa-5x arrow-right"}></i>
                    <div className="position">
                        <p id='compteur' className={length === 1 ? "none" : "compteur"}>{(index+1)+"/"+(length)}</p>
                    </div>
                </div>

    )
}

export default Carrousel;