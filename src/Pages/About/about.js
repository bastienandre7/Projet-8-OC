import "./about.css";
import PresentationAbout from '../../components/Presentation-about/presentationabout';
import Collapse from '../../components/Collapse/collapse';


function home() {
    return(
        <div>
            <main>
                <PresentationAbout />
                <Collapse />
            </main>
        </div>

    );
}

export default home;