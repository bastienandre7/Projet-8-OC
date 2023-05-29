import "./about.css";
import Banner from '../../components/Banner/banner';
import Collapse from '../../components/Collapse/collapse';
import MountainIMG from './kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';


function home() {
    return(
            <main>
                <Banner image={MountainIMG} />
                <Collapse />
            </main>
    );
}

export default home;