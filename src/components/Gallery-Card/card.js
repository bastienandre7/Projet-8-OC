import { NavLink } from 'react-router-dom';

function card (index) {
    console.log(index)
    return(
        <NavLink to="/logement"> 
            <div className='card' >
                <img src={props.imageUrl} alt={props.title} className='image'/>
                <figcaption className='card-title'>{props.title}</figcaption>
            </div>
        </NavLink>

    );
}

export default card();