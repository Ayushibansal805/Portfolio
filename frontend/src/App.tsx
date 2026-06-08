import { useState } from "react";

import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Github from "./sections/Github";
import Resume from "./sections/Resume";

import StarsBackground from "./components/StarsBackground";
import SectionDivider from "./components/SectionDivider";
import Contact from "./sections/Contact";
import ScrollProgress from "./components/ScrollProgress";


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

      <main className="text-white">

        <Hero />

        <Stats />

        <SectionDivider />

        <Skills />

        <SectionDivider />

        <Projects />

        <SectionDivider />

        <Github />

        <SectionDivider />

        <Resume />
        <Contact />

      </main>
    </>
  );
}

export default App;