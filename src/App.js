import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import SideBar from './SideBar';
import ChannelBar from './ChannelBar';
import ContentContainer from './ContentContainer';
function App() {
  return (
    <div className="flex">
      <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path='/'
          element={<><ChannelBar topic={["About me"]} textChannel={["Who I am"]}/><ContentContainer/></>}
          />
          <Route path='/skills'
          element={<><ChannelBar topic={["Skills"]} textChannel={["My Projects"]}/><ContentContainer/></>}
          />
           <Route path='/projects'
          element={<><ChannelBar topic={["Projects"]} textChannel={["My Projects"]}/><ContentContainer/></>}
          />
         <Route path='/contact'
          element={<><ChannelBar topic={["Contact Me"]} textChannel={["How to Contact Me"]}/><ContentContainer/></>}
          />
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
