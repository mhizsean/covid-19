import React from 'react';
//import fetch from './components/fetch'
import './App.css';
import Navbar from './Components/Navbar';
import WorldTable from './Components/WorldTable';
import Cards from './Components/Cards';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <WorldTable />
    </div>
  );
}

export default App;
