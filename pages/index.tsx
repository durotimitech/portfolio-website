import React from "react";
import About from "~/components/partials/About";
import Connect from "~/components/partials/Connect";
import Hero from "~/components/partials/Hero";
import Projects from "~/components/partials/Projects";
import Skills from "~/components/partials/Skills";

const index = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Connect />
    </>
  );
};

export default index;
