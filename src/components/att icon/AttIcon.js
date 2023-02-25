import React from 'react';
import './AttIcon.css';

function AttIcon({src, text}) {
  return (
    <div className='att-icon'>
        <img src={src} alt={text}/>
        <p>{text}</p>
    </div>
  )
}

export default AttIcon