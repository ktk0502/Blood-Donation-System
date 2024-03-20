import React from 'react'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/register";
// import Finddoner from './pages/Finddoner';
import Imgtxt from './pages/Imgtxt';


function App() {
  return (

    <>
      <Router>
      <Navbar/>
          <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/About" element={ <About/> } />
          <Route path="/Register" element={ <Register/> } />
          {/* <Route path='Finddoner' element={<Finddoner/>}></Route> */}
          <Route path='Imgtxt' element={<Imgtxt/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
