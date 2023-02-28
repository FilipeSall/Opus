import "./App.css";
import Header from "./components/header/Header";
import AboutWorkSection from "./components/sections/AboutWorkSection";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import IntroSection from "./components/sections/IntroSection";
import Projects from "./components/sections/Projects";


function App() {


  return (
    <div className="App">
      <Header />
      <IntroSection />
      <AboutWorkSection />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
