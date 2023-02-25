import React from 'react';
import './buttons.css'

function LinkButton({href, text, icon, className, target}) {
  return (
    <a href={href} className={className} target={target}> {text}{icon} </a>
  )
}

export default LinkButton