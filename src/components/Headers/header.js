import { Link } from "react-router-dom";
import logo from './LOGOkasa.png';
import './header.css';

function header(){
    return(
        <div className="header">
            <div>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="links">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A Propos</Link></li>
            </div>
        </div>
    );
}

export default header ;