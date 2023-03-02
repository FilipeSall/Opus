import "./App.css";
import LinkButton from "./components/buttons/LinkButton";
import Header from "./components/header/Header";
import AboutWorkSection from "./components/sections/AboutWorkSection";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import IntroSection from "./components/sections/IntroSection";
import Projects from "./components/sections/Projects";
import { CiCircleChevUp } from "react-icons/ci";
import { AiOutlineWhatsApp } from "react-icons/ai";
import superProfIcon from './assets/icons/superprof.avif';

function App() {

  return (
    <div className="App">
      <Header />
      <IntroSection />
      <AboutWorkSection />
      <Education />
      <Experience />
      <Projects />
      <div className="arrow-container container">
        <LinkButton href='#header' icon={<CiCircleChevUp size={60}/>} className='arrow-up' />
        <LinkButton href=' https://wa.me/5561996664806' target='__blank' icon={<AiOutlineWhatsApp size={60} className='whats-up' />}  />
        <LinkButton href='https://www.superprof.com.br/musica-classica-popular-canto-piano-para-criancas-jovens-adultos.html' target='___blank' icon={<img src={superProfIcon} alt='superprof icone'/> } className='super-prof' />
      </div>
    </div>
  );
}

export default App;
