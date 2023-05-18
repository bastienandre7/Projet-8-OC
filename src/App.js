import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Accueil/home';
import About from './Pages/About/about';
import Header from "./components/Headers/header";
import Footer from "./components/Footer/footer";
import Logement from '../src/Pages/Logement/logement';
import Erreur from './Pages/Erreur/erreur';


function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logement' element={<Logement />} />
        <Route path='/*' element={<Erreur />}/>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
