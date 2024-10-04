import { useState } from 'react'
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import CartDetail from './Pages/CartDetail';

function App() {


  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartDetail/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default App
