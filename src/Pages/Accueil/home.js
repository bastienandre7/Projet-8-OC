import "./home.css";
import Gallery from '../../components/Gallery/gallery';
import Banner from '../../components/Banner/banner';
import Imagebanner from '../../assets ( images )/IMG.png';


function home() {
    const txt = "Chez vous, partout et ailleurs";
    return(
            <main>
                <Banner image={Imagebanner} content={txt} />
                <Gallery />
            </main>
    );
}

export default home;