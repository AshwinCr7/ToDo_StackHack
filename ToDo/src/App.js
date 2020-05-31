import React from 'react';
import Home from './Components/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter, Route} from "react-router-dom" ;

import Navbars from "./Components/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
