import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppCard } from './components/AppCard';

function App() {
  return (
    <div className="App">
      <div style={{padding: "1em"}}>
        <AppCard></AppCard>
      </div>
    </div>
  );
}

export default App;
