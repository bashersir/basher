
import React from 'react';
import './App.css';
import profileImage from './img/abul_basher.jpg';
function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Basher</h2>
      <img src={profileImage} alt="profile-pic" />
    </div>
  );
}

export default App;
