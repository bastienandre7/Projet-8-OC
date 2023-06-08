import './gallery.css';
import array from '../../logements.json';
import Cards from '../Cards/cards';




function gallery() {

    
    return(
        
        <div className="galerie">
            <Cards liste={array} />
        </div>

    );
}




export default gallery ;