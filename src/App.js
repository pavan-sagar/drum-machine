import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Drumpad from './components/Drumpad'
import Display from './components/Display'

function App() {
  return (
    <div className="App">
      <div className="container">
      <Drumpad />
        <Display />
        </div>
    </div>
  );
}

export default App;
