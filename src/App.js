import React, {useState} from 'react';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Shipment from './component/Shipment/Shipment';
import { createContext } from 'react';

export const CategoryContext = createContext()

function App() {
  const [category, setCategory] = useState('Laptop')

  return (
    <div className="App">
      <CategoryContext.Provider value={[category,setCategory]}>
      <p>count value: {category}</p>
      <Header/>
      <Home/>
      <Shipment/>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
