import './gallery.css';
import aray from './logements.json';
const galerieEl = document.getElementById("galerie");


let index = 0;


function gallery() {
    
    return(
        <div className="galerie">
            {
                aray.map((index) => <div className='card'><img src={index.cover} className='image'/><figcaption className='card-title'>{index.title}</figcaption></div> )
            }
            
        </div>

    );
}


export default gallery ;