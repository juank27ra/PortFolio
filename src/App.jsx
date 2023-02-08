import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home'
import Sobremi from './componentes/Sobremi';


export default function App() {
  return (
    <BrowserRouter>
      <div >
      <Routes>
        <Route exact path ='/' element={<Home/>} />
        <Route path='/about' element={<Sobremi/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  )
}
