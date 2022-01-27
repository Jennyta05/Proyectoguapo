import '../styles/character.css';
import {BrowserRouter , Route , Routes} from "react-router-dom"
import {Navbar} from './Navbar';
import { Episodes } from '../pages/Episodes';
import { Locations } from '../pages/Locations';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { CharactersPage } from '../pages/CharactersPage';
import { Footer } from './Footer';

function App() {
  return (
    /* aqui hacemos una globaliacion, en browser esta routes y en esta se ponen la rutas */
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/characters" element={<CharactersPage/>}/>
    <Route path="/Episodes" element={<Episodes/>}/>
    <Route path="/Location" element={<Locations/>}/>
    {/* el asterisco se usa cuando una ruta no existe */ }
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     
  );
}

export default App;

