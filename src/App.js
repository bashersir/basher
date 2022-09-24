
import React from 'react';
import './App.css';
import profileImage1 from './img/abul_basher.jpg';
import profileImage2 from './img/basher.jpg';
import profileImage01 from './img/basher01.jpg';
import profileImage02 from './img/basher02.jpg';
import profileImage03 from './img/basher03.jpg';
function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Muhammad Abul Basher, Lecturer in English</h2>
      <p>Transforming Lives We are the only project in Bangladesh offering a safe haven and livelihood training to single mothers and their children, transforming their lives with independence, confidence and dignity. Sreepur Village has becoming increasingly well known throughout the country for empowering mothers and their children with hope for a brighter future</p>
      <img className="img1" src={profileImage1} alt="profile-pic1" />
      <img className="img2" src={profileImage2} alt="profile-pic2" />
      <img className="img3" src={profileImage01} alt="profile-pic3" />
      <img className="img4" src={profileImage02} alt="profile-pic4" />
      <img className="img5" src={profileImage03} alt="profile-pic5" />
    </div>
  );
}

export default App;
