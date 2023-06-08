import "./footer.css";
import Rights from '../../assets ( images )/© 2020 Kasa. All rights reservedreserved.png';
import LogoBlack from '../../assets ( images )/LOGOlogo black.png';


function footer() {
    return(
        <div className="footer">
            <img src={LogoBlack} alt="logo footer" className="logoblack" />
            <img src={Rights} alt="right reserved" className="rights"/>
        </div>
    );
}

export default footer;