import './App.css';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Home from './Pages/Accueil/home';
import About from './Pages/About/about';
import Header from "./components/Headers/header";
import Footer from "./components/Footer/footer";
import Logement from '../src/Pages/Logement/logement';
import Erreur from './Pages/Erreur/erreur';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/logement/:id' element={<Logement />} />
          <Route path='/*' element={<Erreur />}/>
        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
