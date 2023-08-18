import TopNavigation from './TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
import Post from './Post';
import React from 'react';

function ContentContainer({text}){

  return (
    
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>{
        text.map((singleText)=> (
          <Post key={text} text={singleText}/>
        ))
      }
        
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);



const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;
