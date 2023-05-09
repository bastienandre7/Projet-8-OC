import "./about.css";
import Header from "../../components/Headers/header";
import Footer from "../../components/Footer/footer";


function home() {
    return(
        <div>
            <nav>
                <Header />
            </nav>
            <main>
                <p>A propos</p>

            </main>
            <footer>
                <Footer />
            </footer>
        </div>

    );
}

export default home;