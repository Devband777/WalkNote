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

import { useEffect, useState } from 'react';

import './App.scss';

function App(props) {
  let [counter, setCounter] = useState(10);
  
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if(e.key === 'ArrowRight'){
       setCounter(counter+1)
      }
      if(e.key === 'ArrowLeft'){
        setCounter(counter-1)
       }
     })    
  })

  return (
    <div className="App">
      <div className="container">
        {
          counter === 1 && <First />
        }
        {
          counter === 2 && <Second />
        }
        {
          counter === 3 && <Third />
        }
        {
          counter === 4 && <Fourth />
        }
        {
          counter === 5 && <Fifth />
        }
        {
          counter === 6 && <Sixth />
        }
        {
          counter === 7 && <Seventh />
        }
        {
          counter === 8 && <Eighth />
        }
        {
          counter === 9 && <Nineth />
        }
        {
          counter === 10 && <Tenth />
        }
      </div>
    </div>
  );
}

export default App;
