import "./home.css";
import Gallery from '../../components/Gallery/gallery';
import Presentation from '../../components/Presentation-acceuil/presentation';


function home() {
    return(
        <div>
            <main>
                <Presentation />
                <Gallery />
            </main>
        </div>
    );
}

export default home;