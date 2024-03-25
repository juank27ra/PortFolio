import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home'
import Sobremi from './componentes/Sobremi';
import Footer from './componentes/Footer';
import Contact from './componentes//Contact';
import Proyectos from './componentes/Proyects'
import Error404 from './componentes/Error404'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path ='/' element={<Home/>} />
          <Route path='/about' element={<Sobremi/>}/>
          <Route path='/proyects' element={<Proyectos/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path ='*' element={<Error404/>} />
        </Routes> 
      <Footer/>
    </BrowserRouter>
  )
}