import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Annonces from "./components/Annonces";
function App() {
  return(
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Annonces" element={<Annonces/>}/>
    </Routes>
   
  </div>
  )
}

export default App;