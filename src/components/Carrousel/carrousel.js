import './carrousel.css';

const Carrousel = ({length, source, title}) => {

    let index = 0;

    function suivante(){
        const img = document.getElementById("image");
        const cpt = document.getElementById("compteur");
        if (index >= length-1)
            index = -1;
        index++;
        img.setAttribute("src", source[index]);
        cpt.innerHTML = (index+1)+"/"+(length);
        return
    };

    

    function precedente(){
        const img = document.getElementById("image");
        const cpt = document.getElementById("compteur");
        if (index <= 0 )
            index = length;
        index--;
        img.setAttribute("src", source[index]);
        cpt.innerHTML = (index+1)+"/"+(length);
        return
    };

    return(

        <div className='container-carousel'>
                    <img src={source[0]} id='image' className='img-banner' alt={title} />
                    <i onClick={() => precedente()} id='arrow-carousel' className={length === 1 ? "none" : "fa-sharp fa-solid fa-chevron-left fa-5x arrow-left"}></i>
                    <i onClick={() => suivante()} id='arrow-carousel' className={length === 1 ? "none" : "fa-sharp fa-solid fa-chevron-right fa-5x arrow-right"}></i>
                    <div className="position">
                        <p id='compteur' className={length === 1 ? "none" : "compteur"}>1/{length}</p>
                    </div>
                </div>

    )
}

export default Carrousel;