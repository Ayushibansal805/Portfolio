import { useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import ScrollProgress from "./components/ScrollProgress";
import StarsBackground from "./components/StarsBackground";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Github from "./sections/Github";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {

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
      <StarsBackground />

      <ScrollProgress />

      <Navbar />

      <Socials />

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

        <Github />

        <Resume />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;