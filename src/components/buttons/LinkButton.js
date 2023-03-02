import React from 'react';
import './buttons.css'

function LinkButton({href, text, icon, className}) {
  return (
    <a href={href} className={className}> {text}{icon} </a>
  )
}

export default LinkButton