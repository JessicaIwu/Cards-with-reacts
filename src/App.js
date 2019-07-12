import React from 'react';
import Cards from './Cards';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="app" className="p-2">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Courses</h1>
        <Cards/>
    </div>
  );
}

export default App;
