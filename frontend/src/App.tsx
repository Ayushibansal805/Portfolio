
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import StarsBackground from "./components/StarsBackground";
import Footer from "./components/Footer";
import SpaceNavigator
from "./components/SpaceNavigator";
import AIAssistant from "./sections/AIAssistant";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Github from "./sections/Github";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Timeline from "./sections/Timeline";
import {usePortfolio,} from "./context/PortfolioContext";
import Achievements from "./sections/Achievements";
function App() {
  const {
  recruiterMode,
} = usePortfolio();

  return (
    <>
      {!recruiterMode && (
  <StarsBackground />
)}

      <ScrollProgress />

      <Navbar />
      <SpaceNavigator />


      <main
        className="
        w-full
        text-white
        overflow-x-hidden
        "
      >
        <Hero />

        <Stats />

        <Skills />

        <Projects />
        <Timeline />
        <Achievements />
        <AIAssistant />

        <Github />

        <Resume />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;