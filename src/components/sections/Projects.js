import React, { useRef, useState } from 'react';
import './projects.css';
import useSpring from '../../hooks/useSpring';
import { animated } from '@react-spring/web';
import chorinho from '../../assets/sounds/chorinho.mp3';
import { BsFillPlayFill } from "react-icons/bs";

function Projects() {

    const [audio, setAudio] = useState(null);
    const audioControlRef = useRef(null);

    const handlePlay = () => {
        if (!audio) {
          const audioElement = new Audio(chorinho);
          setAudio(audioElement);
        }
        setTimeout(() => {
            audioControlRef.current.play();
        }, 100);
      }

    const projetos = [
        {
            title:'CD Tesselas',
            text:"Em 2002, junto com Hamilton de Holanda e Douglas Humberto, compôs o CD chamado Tesselas. O álbum possui 12 músicas e algumas estão disponíveis no Youtube.",
            iframe:
            <iframe 
                className='iframe' 
                data-cookieconsent="marketing"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/m6GpnrlCNSc" 
                title="Samba onisciente" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>,
        },
        {
            title:'Chorinho da Josi',
            text:"Este é um chorinho composto, gravado e produzido por Luiz Graciliano, com o objetivo de animar sua filha durante um período em que ela estava doente com rubéola durante as férias. Por meio da música, o artista busca transmitir uma atmosfera alegre e nostálgica, evocando elementos característicos de uma época passada, para trazer conforto e alegria para sua filha em um momento difícil.",
            sound:
            <audio controls autoPlay className='chorinho'>
                <source src={chorinho} ref={audioControlRef} type="audio/mpeg" />
            </audio>,
        }
        ,{
            title:'Projeto Intercâmbio',
            text:'Criou e coordenou o Projeto Intercâmbio em Goiânia, com o objetivo de incentivar a formação de corais escolares e novos regentes na cidade.',
        },
        {
            title:'Projeto Minha Cidade Canta',
            text:'O objetivo do projeto era expandir o canto coral nas escolas, empresas públicas, privadas e comunidade, utilizando alunos dos cursos de música de nível médio e superior.',
        },
        {
            title:'Projeto A Escola Vai à Música',
            text:'Criador do projeto, cujo objetivo é levar os alunos das escolas, em horário escolar, a apresentações musicais, comentadas de forma didática como atividade extra-classe.',
        },
        {
            title:'Formação e aperfeiçoamento do Regente de Coro',
            text:'Idealizador do projeto que tinha como objetivo o aperfeiçoamento e formação de novos regentes na região Centro-oeste.',
        },
    ]

    const props = useSpring();

  return (
    <section className='container' id='projetos'>
        <div className='projects__title-container title'>
            <h1>Projetos</h1>
        </div>
        <div className='projects__content content'>
            {
                projetos.map((projeto, index)=>(
                    <animated.div key={index} style={props} className='project__info-container'>
                        <h2>{projeto.title}</h2>
                        <p>{projeto.text}</p>
                        {
                            projeto.iframe && projeto.iframe
                        }
                        {
                            projeto.sound && <div className='container__chorinho'>
                                {audio === null && <button className='play-btn'
                                onClick={handlePlay}>
                                    {<BsFillPlayFill size={60}color='#292626' />}
                                    </button>}
                                {audio && projeto.sound}
                            </div>
                        }
                    </animated.div>
                ))
            }
        </div>
    </section>
  )
}

export default Projects