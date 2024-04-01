import { Route, Routes, HashRouter } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home'
import Sobremi from './componentes/Sobremi';
import Footer from './componentes/Footer';
import Contact from './componentes//Contact';
import Proyectos from './componentes/Proyects'
import Error404 from './componentes/Error404'


export default function App() {
  return (
    <HashRouter>
      <Navbar/>
        <Routes>
          <Route exact path ='/' element={<Home/>} />
          <Route exact path='/about' element={<Sobremi/>}/>
          <Route exact path='/proyects' element={<Proyectos/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route path ='*' element={<Error404/>} />
        </Routes> 
      <Footer/>
    </HashRouter>
  )
}