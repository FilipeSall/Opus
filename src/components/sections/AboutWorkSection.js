import React from "react";
import useSpring from '../../hooks/useSpring';
import { animated } from '@react-spring/web'

import AttIcon from "../att icon/AttIcon";
import "./aboutWorkSection.css";
import Music from "../../assets/icons/musicicon.svg";
import Smartphone from "../../assets/icons/smartphone.svg";
import Aula from "../../assets/icons/aula.svg";
import Piano from "../../assets/icons/piano.svg";
import Canto from "../../assets/icons/canto.svg";

function AboutWorkSection() {

 const props = useSpring();

  return (
    <section className="aboutWork__container">
      <div className="aboutWork-title" id="sobre-aula">
        <h1>Aula</h1>
      </div>
      <div className="aboutWork-content">
        <h2>Como funcionam as minhas aulas</h2>
        <p>
        As aulas são regulares, com frequência semanal. O acompanhamento é realizado por meio do WhatsApp para monitorar a prática e o progresso do aluno. As aulas podem ser ministradas na residência do professor ou do aluno, desde que este último possua os instrumentos necessários.
        </p>
        <animated.div className="icon__container" style={props}>
          <AttIcon src={Piano} text="Aulas de piano e teclado" />
          <AttIcon src={Canto} text="Aulas de canto" />
          <AttIcon src={Aula} text="Teoria musical" />
          <AttIcon src={Music} text="Solfejo" />
          <AttIcon src={Smartphone} text="Auxilio pedágogico digital" />
        </animated.div>
      </div>
    </section>
  );
}

export default AboutWorkSection;
