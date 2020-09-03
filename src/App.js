import React, {useState} from 'react';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Shipment from './component/Shipment/Shipment';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>count value: {count}</p>
      <Header count={count} setCount={setCount}/>
      <Home count={count}/>
      <Shipment/>
    </div>
  );
}

export default App;
