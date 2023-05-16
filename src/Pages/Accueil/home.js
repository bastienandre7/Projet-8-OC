import "./home.css";
import Gallery from '../../components/Gallery/gallery';
import Presentation from '../../components/Presentation-acceuil/presentation';


function home() {
    return(
            <main>
                <Presentation />
                <Gallery />
            </main>
    );
}

export default home;