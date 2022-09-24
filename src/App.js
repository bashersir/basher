
import React from 'react';
import './App.css';
import profileImage from './img/abul_basher.jpg';
function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Muhammad Abul Basher, Lecturer in English</h2>
      <p>Transforming Lives We are the only project in Bangladesh offering a safe haven and livelihood training to single mothers and their children, transforming their lives with independence, confidence and dignity. Sreepur Village has becoming increasingly well known throughout the country for empowering mothers and their children with hope for a brighter future</p>
      <img src={profileImage} alt="profile-pic" />
    </div>
  );
}

export default App;
