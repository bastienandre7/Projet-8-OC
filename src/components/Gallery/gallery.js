import './gallery.css';
import array from '../../logements.json';
import { NavLink } from 'react-router-dom';





function gallery(index) {

    
    return(
        
        <div className="galerie">
            {
                array.map((index) => 
                (<NavLink to="/logement" id={index.id} state={index.id}> 
                    <div className='card' >
                        <img src={index.cover} alt={index.title} className='image'/>
                        <figcaption className='card-title'>{index.title}</figcaption>
                    </div>
                </NavLink>
            ))
            }
        </div>

    );
}




export default gallery ;