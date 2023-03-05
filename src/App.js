import "./App.css";
import AboutWorkSection from "./components/sections/AboutWorkSection";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
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
      <Footer />
    </div>
  );
}

export default App;
