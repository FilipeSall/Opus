import React, { useState } from "react";
import "./experience.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function Experience() {
  const [ufg, setUfg] = useState(null);
  const [federalGoias, setFederalGoias] = useState(null);
  const [regente, setRegente] = useState(null);
  const [ministerio, setMinisterio] = useState(null);
  const [concertista, setConcertista] = useState(null);

  function handleClick(state,setState){
    setState(!state)
  }

  const dropdowns = [
    {
      title:'Professor na Universidade Federal de Goiás (UFG)',
      text:'Professor de piano e prática de Orquestra na Universidade Federal de Goiás por concurso até o ano de 1986.',
      function:()=>handleClick(ufg,setUfg),
      state:ufg,
    },
    {
      title:'Professor de música da Escola Técnica Federal de Goias',
      text:'Métodos didáticos utilizados nessa escola foram Dalcroze e Kodály.',
      function:()=> handleClick(federalGoias,setFederalGoias),
      state:federalGoias
    },
    {
      title:'Regente fundador do Coral da Cidade de Goiânia',
      text:'Regente fundador do Coral da Cidade de Goiânia à convite da Acessoria Cultural da Prefeitura de Goiânia',
      function:()=> handleClick(regente,setRegente),
      state:regente
    },
    {
      title:'Ministério da Cultura',
      text:'Em 1986, foi convidado para trabalhar na Secretaria de Atividades Sócio-Culturais (SEAC) do Ministério da Cultura, onde atuou como idealizador e coordenador na Coordenadoria de Cultura e Gerações',
      function:()=> handleClick(ministerio,setMinisterio),
      state:ministerio,
    },
    {
      title:'Como concertista',
      text:'Atuou como pianista e camerista, realizando concertos em vários estados do Brasil e no exterior.',
      function:()=> handleClick(concertista,setConcertista),
      state:concertista,
    }
  ]

  return (
    <section className="experience__container" id="experiencia">
      <div className="experience__title-container">
        <h1>Experiência</h1>
      </div>
      <div className="experience__content">
          {dropdowns.map((dropdown, index) => (
            <div className="experience__dropdown" key={index}>
              <h2 className='dropdown-title' onClick={dropdown.function}>{dropdown.title}{dropdown.state ? <IoMdArrowDropup size="40" /> : <IoMdArrowDropdown size="40" />}</h2>

              {dropdown.state &&(<div key={index} className="experience__dropdown-info">
                <p>{dropdown.text}</p>
              </div>)}

            </div>
          ))}
      </div>
    </section>
  );
}

export default Experience;
