import './erreur.css';
import { Link } from "react-router-dom";

function erreur() {
    return(
        <div>
            <h1 className='error'>404</h1>
            <h2 className='oups'>Oups! La page que vous demandez n'existe pas.</h2>
            <li className='return'><Link to="/">Retourner sur la page d'accueil</Link></li>
        </div>
    );
}

export default erreur ;