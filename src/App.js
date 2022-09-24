
import React from 'react';
import './App.css';
import profileImage2 from './img/basher.jpg';
import profileImage01 from './img/basher01.jpg';
import profileImage02 from './img/basher02.jpg';
import profileImage03 from './img/basher03.jpg';
function App() {
  return (
    <div className="App">
      <h1 className='GValley'>Travelling to Green Valley Park, Ruppur, Nator 2022</h1>
      <h2>Organized by a Team of Teachers</h2>
      <p className='des01'>Green Valley Park is situated in Lalpur, Natore, Bangladesh. It is an amazing place to visit. I am really surprised visiting this place first time. It was a really nice trip. Want to go there again with my family. Hope, you will enjoy here.</p>
      <img className="img2" src={profileImage2} alt="profile-pic2" />
      <img className="img3" src={profileImage01} alt="profile-pic3" />
      <img className="img4" src={profileImage02} alt="profile-pic4" />
      <img className="img5" src={profileImage03} alt="profile-pic5" />
    </div>
  );
}

export default App;
