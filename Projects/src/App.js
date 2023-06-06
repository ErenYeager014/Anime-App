import React, { useState, useContext } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Character from './Components/Character';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeContents from './Components/HomeContents';
import MainPage from './Components/MainPage';
function App() {
  const [baseUrl, setbaseUrl] = useState("");
  
  return (
 
    <div className="App">
      <Header />
      <Banner />
      <HomeContents/>
      <MainPage />      
      <Footer />
    </div>
    
  );
}

export default App;
