import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Formhw from "./pages/Formhw";
import Time from "./pages/Time";

function App() {
 
  return (
    <div className="App">
      
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/formhw" element={<Formhw/>}/>
      <Route path="/time" element={<Time/>}/>
      </Routes>
      </Router>
   </div>
  )
}


export default App
