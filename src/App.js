import React, { useState } from 'react';
import './styles.css';
import Timer from './Timer';
import Stopwatch from './Stopwatch';
import Navbar from './Navbar';

function App() {
  const [activeComponent, setActiveComponent] = useState('timer');

  return (
    <div className="App">
      <Navbar setActiveComponent={setActiveComponent} />
      {activeComponent === 'timer' ? <Timer /> : <Stopwatch />}
    </div>
  );
}

export default App;
