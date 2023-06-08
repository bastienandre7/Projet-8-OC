import './cards.css';
import { NavLink } from 'react-router-dom';

const Cards = (liste) => {

    return(
        liste.liste.map((index) => 
        (<NavLink to={`/logement/${index.id}`} id={index.id} state={index.id} key={index.id} className="cadre"> 
            <div className='card' >
                <div className='filtre'>
                    <img src={index.cover} alt={index.title} className='imaged'/>
                </div>
                <figcaption className='card-title'>{index.title}</figcaption>
            </div>
            
        </NavLink>
        ))
    )
}

export default Cards;