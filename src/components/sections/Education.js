import React from 'react';
import Timeline from '../timeline/Timeline';
import './education.css';

function Education() {


  return (
    <section className='container' id='formacao'>
        <div className='education__title-container title'>
            <h1>Formação</h1>
        </div>
        <div className='education__content content'>
            <Timeline />
        </div>
    </section>
  )
}

export default Education