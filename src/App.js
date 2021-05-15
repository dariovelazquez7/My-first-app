import React from 'react';
import './App.css';
import {Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Game from "./components/Game/game"
import Home from "./components/Home/home"
import Deals from "./components/Deals/deals"
import About from "./components/About/about"




function App () {
  return(
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route exact path= "/ofertas" component={Deals} />
      <Route exact path="/info" component={About} />
      <Route exact path= "/juegos" component={Game}/>
    </React.Fragment>   
  )
}


export default App;
