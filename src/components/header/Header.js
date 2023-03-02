import React from "react";
import LinkButton from "../buttons/LinkButton";
import "./header.css";
import {} from "react-icons/bs";

function Header() {
  return (
    <header className="header__container" id="header">
      <h1>Prof. Luiz Graciliano</h1>
      <section className="header__links-container">
        <LinkButton text={"Sobre a aula"} href={"#sobre-aula"} className='linkButton' />
        <LinkButton text={"Formação"} href={"#formacao"} className='linkButton'/>
        <LinkButton text={"Experiência"} href={"#experiencia"} className='linkButton' />
        <LinkButton text={"Projetos"} href={"#projetos"} className='linkButton'/>
      </section>
    </header>
  );
}

export default Header;
