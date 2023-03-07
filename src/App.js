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
  let [counter, setCounter] = useState(0);
  
  useEffect(() => {
    window.addEventListener('keydown', e => {

      if(e.key === 'ArrowRight'){
        if(counter === 9) return;
       setCounter(counter + 1)
      }
      if(e.key === 'ArrowLeft'){
        if(counter === 0) return;
        setCounter(counter - 1)
       }
     })    
  })

  return (
    <div className="App">
      <div className="container">
        {
          counter === 0 && <First />
        }
        {
          counter === 1 && <Second />
        }
        {
          counter === 2 && <Third />
        }
        {
          counter === 3 && <Fourth />
        }
        {
          counter === 4 && <Fifth />
        }
        {
          counter === 5 && <Sixth />
        }
        {
          counter === 6 && <Seventh />
        }
        {
          counter === 7 && <Eighth />
        }
        {
          counter === 8 && <Nineth />
        }
        {
          counter === 9 && <Tenth />
        }
      </div>
    </div>
  );
}

export default App;
