import React from 'react';
import Home from './Components/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter} from "react-router-dom"

import Main from './Components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Main/>
      </div>
      </BrowserRouter>
  );
}

export default App;
