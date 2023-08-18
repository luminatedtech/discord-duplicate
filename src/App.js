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
          element={<><ChannelBar topics={["About Allen"]}/><ContentContainer/></>}
          
      />
        
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
