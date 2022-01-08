import { Image } from "antd";
import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import Animations from "~/utilities/animations/Animations";
import { NavigationContext } from "~/utilities/context/NavigationContext";
import { sections } from "~/utilities/data";
import useElementInView from "~/utilities/hooks/useElementInView";
import classes from "./About.module.css";

const About = () => {
  const targetSection = useRef(null);

  const { elementInView } = useElementInView(targetSection, 0.5);
  const [currentSection, setCurrentSection] =
    useContext<any>(NavigationContext);

  useEffect(() => {
    if (elementInView) {
      setCurrentSection(sections.ABOUT);
      Animations.fadeInUpStaggeredWithVisibility(targetSection.current);
    }
  }, [elementInView, setCurrentSection]);

  return (
    <section id="about" className="section">
      <div
        ref={targetSection}
        className={`${classes.about__section} container`}
      >
        <div className="heading">About Me</div>
        <div className="fs-xl">
          A more in-depth look into
          <span className="primary"> who I am.</span>
        </div>
        <div className={classes.about__content}>
          <Image
            alt="Avatar"
            className={classes.avatar}
            preview={false}
            src="/images/avatar.jpg"
          />
          <div className={classes.about__info}>
            I&apos;m <span className="primary">Oluwadurotimi Mejabi</span>, a 23
            year old software engineer from Nigeria. <br />
            I have been interested in tech, especially software development for
            many years right from when I was about 14 years old.
            <br />
            I have learnt a vast majority of things over these past few years
            and most especially, I have learnt how to be self sufficient.
            <br />
            <br />
            <div>
              When I am not coding, or trying to solve a problem 😉 ( cuz
              there&apos;s always problems to solve), I make
              <span className="primary"> films </span>
              and take pictures.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
