import React from 'react';

const Navbar = ({ setActiveComponent }) => {
  return (
    <div className="navbar">
      <button onClick={() => setActiveComponent('timer')}>Timer</button>
      <button onClick={() => setActiveComponent('stopwatch')}>Stopwatch</button>
    </div>
  );
};

export default Navbar;
