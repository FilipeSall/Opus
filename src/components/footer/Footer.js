import React from 'react';
import ContactIcons from './ContactIcons';
import './footer.css';

function Footer() {
    return (
        <footer className='footer__container'>
            <div className='footer__container-infos'>
                <div className='container-info'>
                    <h3>Telefone</h3>
                    <p>(61) 9.99827-2992</p>
                </div>
                <div className='container-info'>
                    <h3>Email</h3>
                    <p>Luizgraciliano@hotmail.com</p>
                    <p>Luizgraciliano52@gmail.com</p>
                </div>
            </div>
            <ContactIcons />
        </footer>
    )
}

export default Footer;