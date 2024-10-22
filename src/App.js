import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDate from './pages/MovieDate';
import song from "./pages/MP3/birthdaySong.mp3";
import Birthday from './pages/BirthDay';
import Wishes from './pages/Wishes';
import Celebrate from './pages/Celebrate';
function App() {

  const [userData, setUserData] = useState({

    name:'AAYUSHI',
    dob: '18th of December',
    gender: 'Girl',
    prevAge: '21st',
    newAge:'22nd',
    relationship: 'love',
    fireworks: [' ','🩷',' ','🤍',],

    // ❅
    snowfall: ['❅'],


    // copy paste any Route path name here without ("/")
    page:'Birthday',
    
  });


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/date" element={<Home userData={userData}/>}/>
          <Route path="/MovieDate" element={<MovieDate userData={userData}/>} />
          <Route path="/Birthday" element={<Birthday userData={userData}/>} />
          <Route path="/Wishes" element={<Wishes userData={userData}/>} />
          <Route path="/Celebrate" element={<Celebrate userData={userData}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
