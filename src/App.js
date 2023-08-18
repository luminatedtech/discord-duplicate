import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import SideBar from './SideBar';
import ChannelBar from './ChannelBar';
import ContentContainer from './ContentContainer';
function App() {
  const aboutText =["Hello! Welcome to my Portfolio website, My name is Allen Kim","I am a software engineer"]
  const projectText=["Here are some projects that display my passions and use of fullstack technologies","This first project is called Thrifty"]
  const skillsText=["With 500+ hours in creating fullstack applications, I have learned several important skills along the way.","Frontend Technologies: JavaScript, HTML, CSS, TypeScript, React, Python"]

  console.log(skillsText)

  return (
    <div className="flex">
      <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path='/'
          element={<><ChannelBar topic={["About me"]} textChannel={["Who I am"]}/><ContentContainer text={aboutText}/></>}
          />
          <Route path='/skills'
          element={<><ChannelBar topic={["Skills"]} textChannel={["Skills"]}/><ContentContainer/> text={skillsText} </>}
          />
           <Route path='/projects'
          element={<><ChannelBar topic={["Projects"]} textChannel={["My Projects"]}/><ContentContainer/> text={projectText}</>}
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
