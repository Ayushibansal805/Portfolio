import { useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import StarsBackground from "./components/StarsBackground";
import Footer from "./components/Footer";
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
function App() {
  const {
  recruiterMode,
} = usePortfolio();
  const [loading, setLoading] =
    useState(true);

  if (loading) {
    return (
      <Loader
        onFinish={() =>
          setLoading(false)
        }
      />
    );
  }

  return (
    <>
      {!recruiterMode && (
  <StarsBackground />
)}

      <ScrollProgress />

      <Navbar />


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