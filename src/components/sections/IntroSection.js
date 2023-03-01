import React from 'react';
import './introSection.css';
import Perfil from '../../assets/imgs/perfil.avif';
import LinkButton from '../buttons/LinkButton';
import grupoMusical from '../../assets/imgs/grupoMusical.avif';


function IntroSection() {
  return (
    <section className='intro__section'>   
        <div className='intro__section-img-container'>
            <img src={Perfil} alt='Foto de Luiz' />
        </div>
        <div className='intro__section-text-container' id='sobre-luiz'>
            <h1 className='intro__section-title'><span className='intro__section-emphashis'>Olá</span>, <br/>eu sou Luiz<br/>Graciliano<span className='emphasis-color'>.</span></h1>
            <img src={grupoMusical} alt='grupo musical' className='img__group-device' />
            <p className='intro__section-text'>Sou <span className='emphasis-color'>professor de Técnica Vocal, Piano e Teclado </span> com mais 40 anos de experiência em aulas de música para crianças, jovens, adultos e idosos. Estudei no <span className='emphasis-color'>Conservatório Tchaikovsky</span> em Moscou e no Conservatório Real de Bruxelas, e também fui professor na Universidade federal de Goiás <span className='emphasis-color'>(UFG)</span> e <span className='emphasis-color'>Regente fundador</span> do Coral da Cidade de Goiânia. Que tal aprendermos um pouco de música juntos?</p>

            <LinkButton 
            className='contactButton' 
            text='CONTATAR'
            href=' https://wa.me/5561996664806'
            target='__blank'
            />
        </div>

    </section>
  )
}

export default IntroSection