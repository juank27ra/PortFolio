import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home'
import Sobremi from './componentes/Sobremi';
import Proyects from './componentes/Proyects';
import Contact from './componentes/Contact';


export default function App() {
  return (
    <BrowserRouter>
      <div >
      <Routes>
        <Route exact path ='/' element={<Home/>} />
        <Route path='/about' element={<Sobremi/>}/>
        <Route path='/projects' element={<Proyects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/' element={</>}/> */}
      </Routes> 
    </div>
    </BrowserRouter>
  )
}
