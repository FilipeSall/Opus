import React from 'react';
import './timeline.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbSchool, TbMicroscope } from "react-icons/tb";
import { BsFillPersonFill, BsAwardFill } from "react-icons/bs";
import { GiGrandPiano } from "react-icons/gi";


function Timeline() {
    const timeline = [
        {
            title:'Curso superior de música - Instituto superior de artes da UFG',
            subTitle:'Professora Belkiss S. Carneiro de Mendonça',
            link:'https://www.aflag.com.br/academicas/9-belkiss-s-carneiro-de-mendonca',
            date:'1970 - 1975',
            icon: <TbSchool />,
        },
        {
            title:'Pós-graduação - Conservatório Tchaikovsky de Moscou',
            subTitle:'Professor Gleb. Barissovitvh Akcelrod',
            link:'https://pt.frwiki.wiki/wiki/Gleb_Axelrod',
            date:'1975 - 1978',
            icon: <BsAwardFill />
        },
        {
            title:'Especialização Conservatório Real de Bruxelas',
            subTitle:'Professor Nicole Henriot',
            date:'1978 - 1980',
            icon: <TbMicroscope />,
            link:'https://en.wikipedia.org/wiki/Nicole_Henriot-Schweitzer',
        },
        {
            title:'Estudou Técnica Pianistica com o pianista Antônio Guedes Barbosa',
            subTitle:'Professor Antônio Guedes Barbosa',
            date:'Rio de Janeiro',
            icon:<BsFillPersonFill />,
            link:'https://pt.wikipedia.org/wiki/Antonio_Guedes_Barbosa',
        },
        {
            title:'Estudou Técnica Pianistica com a professora Nise Obino',
            date:'Brasília',
            subTitle:'Professora Nise Obino',
            icon:<GiGrandPiano />,
            link:'https://enciclopedia.itaucultural.org.br/pessoa637124/nise-obino',
        },
    ]

  return (
        <VerticalTimeline lineColor='var(--cor-branca-1)'>
        {
            timeline.map((timeline, index) => (
                <VerticalTimelineElement key={index} 
                className="vertical-timeline-element--education timeline--element" 
                icon={timeline.icon} 
                dateClassName='date-timeline'
                iconStyle={{ background: 'var(--cor-branca-1)', color:'var(--cor-variavel-3)' }} >
                    <h3 className='timeline-title'>{timeline.title}</h3>
                    <h4 className='timeline-date'>{timeline.date}</h4>
                    <p className='timeline-local'><a href={timeline.link} className='timeline-link' target='__blank'>{timeline.subTitle}</a></p>

                </VerticalTimelineElement>
            ))
        }
        </VerticalTimeline>

  )
}

export default Timeline