import './gallery.css';
import aray from '../../logements.json';




function gallery() {
    
    return(
        <div className="galerie">
            {
                aray.map((index) => <div className='card'><img src={index.cover} alt={index.title}
                className='image'/><figcaption className='card-title'>{index.title}</figcaption></div> )
            }
            
        </div>

    );
}


export default gallery ;