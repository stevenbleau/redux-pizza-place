import React from 'react';
import axios from 'axios';
import './App.css';
import ScreenTwo from '../ScreenTwo/ScreenTwo.jsx';
import ScreenThree from '../ScreenThree/ScreenThree.jsx';



function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <ScreenTwo/>
      <ScreenThree/>
  
    </div>
  );
}

export default App;
