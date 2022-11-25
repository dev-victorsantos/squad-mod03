import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Cardapio from "./components/pages/Cardapio";
import Admin from "./components/pages/Admin";
import Pedido from "./components/pages/Pedido";
import Sobre from "./components/pages/Sobre";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
function App() {

  return (
                      
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Cardapio" element={<Cardapio/>}/>
      <Route path="/Admin" element={<Admin/>}/> 
      <Route path="/Pedido" element={<Pedido/>}/>
      <Route path="/Sobre" element={<Sobre/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
