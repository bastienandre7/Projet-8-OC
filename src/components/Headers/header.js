import {NavLink } from "react-router-dom";
import logo from '../../assets/LOGOkasa.png';
import './header.css';

function header(){
    return(
        <div className="header">
            <div className="display-logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="links">
                <li><NavLink to="/" className={({isActive}) => (isActive ? 'underline' : '')}>Accueil</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => (isActive ? 'underline' : '')}>A Propos</NavLink></li>
            </div>
        </div>
    );
}

export default header ;