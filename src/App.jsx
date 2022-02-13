import './App.css';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Countdown from './components/Countdown/Countdown';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Header from './components/Header/Header';
import { BrowserRouter, } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
     <DigitalClock />
     <Countdown />
     <Stopwatch />
    </div>
  );
}

export default App;
