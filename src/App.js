
import React from 'react';
import './App.css';
import Coffee from './components/cofee';
import Yummy from './components/Yummy';
import { Admin } from './components/Admin';

function App() {
  return (
    <div>
      <Coffee />
      <Yummy/>
      <Admin/>
    </div>
  );
}

export default App;
