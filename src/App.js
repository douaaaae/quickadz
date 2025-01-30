import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Annonces from "./components/Annonces";
import SignUp from "./components/SignUp";
/* import Filter from "./components/Filter";*/
import AnnoncesList from './components/AnnoncesList'; 
import AboutUs from "./components/AboutUs";
import AdminHome from "./components/AdminHome";
import HomePage from "./components/HomePage";
import ListeAnnonces2 from "./components/ListeAnnonces2";
/* import AddAnnonce from "./Reducers/addAnnonce";*/
import AddAnnounce from "./components/AddAnnounce";
import Dashboard from "./components/Dashboard";
import ListeAnnoncesA from "./components/AnnonceListA";
import ListeAnnonceM from './components/AnnonceListM';
function App() {
  return(
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Annonce" element={<Annonces/>}/>
{/*       <Route path="/Filtre" element={<Filter/>}/>
      <AnnoncesList/> */}
            <Route path="/About" element={<AboutUs/>}/>
            <Route path="/Sign" element={<SignUp/>}/>
            <Route path="/Annonces"  element={<AnnoncesList/>} />
            <Route path='/Admin' element={<AdminHome/>} />
            <Route path="/Manage" element={<ListeAnnonces2/>} />
            <Route path="/Member" element={<HomePage/>} />
{/*             <Route path="/AddAn" element={<AddAnnonce/>} />*/}
            <Route path="/AddAn" element={<AddAnnounce/>}/>
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path="/AnnonceAd" element={<ListeAnnoncesA/>}/>
            <Route path="/AnnonceM" element={<ListeAnnonceM/>} />
    </Routes>
   
  </div>
  )
}

export default App;