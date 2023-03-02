import React from 'react'
import LinkButton from '../buttons/LinkButton';
import './footer.css';
import { CiCircleChevUp } from "react-icons/ci";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import superProfIcon from '../../assets/icons/superprof.avif';

function ContactIcons() {
  return (
    <div className="icons__footer-container">
    <LinkButton href='#header' icon={<CiCircleChevUp size={60}/>} className='arrow-up' />
    <LinkButton href=' https://wa.me/5561996664806' target='__blank' icon={<AiOutlineWhatsApp size={60} className='whats-up' />}  />
    <LinkButton href='https://www.superprof.com.br/musica-classica-popular-canto-piano-para-criancas-jovens-adultos.html' target='___blank' icon={<img src={superProfIcon} alt='superprof icone'/> } className='super-prof' />
    <LinkButton href='tel:+5561998272992' target='___blank' icon={<BsTelephoneOutbound size={50} className='phone-up'/> } />
</div>
  )
}

export default ContactIcons