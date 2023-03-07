import logo from './logo.svg';
import './App.scss'

import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';
import Eighth from './components/Eighth';
import Nineth from './components/Nineth';
import Tenth from './components/Tenth';
import { Routes, Route } from 'react-router-dom';


import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './App.scss';

function App(props) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('index', 1);
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', e => {
      
      let counter = Number(localStorage.getItem('index'));
      console.log(counter)
      if(e.key === 'ArrowRight'){
        if(counter < 9)
          localStorage.setItem('index', counter+1);
      }
      if(e.key === 'ArrowLeft'){
        if(counter > 1)
          localStorage.setItem('index', counter-1);
       }
     }) 
     
  })

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/1" element={<First />} />
          <Route path="/2" element={<Second />} />
          <Route path="/3" element={<Third />} />
          <Route path="/4" element={<Fourth />} />
          <Route path="/5" element={<Fifth />} />
          <Route path="/6" element={<Sixth />} />
          <Route path="/7" element={<Seventh />} />
          <Route path="/8" element={<Eighth />} />
          <Route path="/9" element={<Nineth />} />
          <Route path="/10" element={<Tenth />} />
          <Route path="*" element={<First />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
