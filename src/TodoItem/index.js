import './TodoItem.css';
import {FaCheck} from 'react-icons/fa'
import {BsX} from 'react-icons/bs'
import React from 'react';

function TodoItem({text,completed,onComplete,onDelete}){
    return (
      <li>
        <span className={`check Icon ${completed&&"Icon-active-completed"}`}><FaCheck onClick={onComplete}/></span>
        <p className={`text-todo ${completed&&"p-completed"}`}>{text}</p>
        <span className='delete'>
          <BsX color='white' onClick={onDelete}/></span>
      </li>
    );
  }

  
  export { TodoItem};