import React from 'react';
import '../css/App.css';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import HomePane from '../components/HomePane';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <SideBar/>
      <HomePane/>
    </div>
  );
}

export default App;
