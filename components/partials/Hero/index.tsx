import { Image } from "antd";
import React, { useEffect, useRef, useContext, useState } from "react";
import Animations from "~/utilities/animations/Animations";
import HeroAnimations from "~/utilities/animations/HeroAnimations";
import classes from "./Hero.module.css";
import gsap from "gsap";
import useElementInView from "~/utilities/hooks/useElementInView";
import { externalLinks, sections } from "~/utilities/data";
import { NavigationContext } from "~/utilities/context/NavigationContext";

const Hero = () => {
  const targetSection = useRef(null);

  let cursorItem = useRef(null);
  let nameItem = useRef(null);
  let aboutItem = useRef(null);
  let linksItem = useRef(null);
  let avatarItem = useRef(null);
  let bgImage: any;

  const { elementInView } = useElementInView(targetSection, 0.9);

  const [currentSection, setCurrentSection] =
    useContext<any>(NavigationContext);

  const animations = () => {
    HeroAnimations.cursor(cursorItem.current);
    HeroAnimations.writeOn(nameItem.current);
    Animations.fadeInUp(aboutItem.current, 6.5, 3);
    Animations.fadeInUpStaggered(linksItem.current, 8);
    // HeroAnimations.imageReveal(bgImage, avatarItem.current);
  };

  const imageRevealInit = () => {
    const GSAP = require("gsap/dist/CSSRulePlugin");
    const { CSSRulePlugin } = GSAP;
    gsap.registerPlugin(CSSRulePlugin);
    bgImage = CSSRulePlugin.getRule(".hero__avatar::after");
  };

  useEffect(() => {
    if (elementInView) setCurrentSection(sections.HERO);
  }, [elementInView, setCurrentSection]);

  // useEffect(() => {
  //   imageRevealInit();
  // });
  
  useEffect(() => {
    animations();
  },[]);

  return (
    <div id="hero" className="container">
      <section ref={targetSection} className={classes.hero}>
        <div className={classes.hero__info}>
          <span ref={nameItem} className={`${classes.hero__name} fs-xxl`}>
            <span className="hello"></span>
            {/* <span className="hello">Hi! I&apos;m</span> */}
            <span className="primary"></span>
            {/* <span className="primary"> Mejabi Durotimi</span> */}
            <span ref={cursorItem}>_</span>
          </span>
          <div className={classes.hero__more}>
            <span ref={aboutItem} className={`${classes.hero__about} fs-lg`}>
              a <span className="primary">software engineer </span>
              who is enthusiastic about anything related to
              <span className="primary"> technology</span>.
            </span>
            <div ref={linksItem} className={classes.hero__links}>
              <div>Please feel free to check out my work!</div>
              <a href="#projects">
                <button className="btn btn-filled">Check out my work</button>
              </a>
              <a href={externalLinks.CV} target={"_blank"} rel="noreferrer">
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero__avatar">
          <div ref={avatarItem}>
            <Image
              preview={false}
              src="/images/avatar.jpg"
              className="hero__avatar__img"
              alt="Mejabi Durotimi Avatar"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
