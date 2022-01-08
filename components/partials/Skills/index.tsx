import { Image } from "antd";
import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import Animations from "~/utilities/animations/Animations";
import { NavigationContext } from "~/utilities/context/NavigationContext";
import { mySkills } from "~/utilities/data";
import useElementInView from "~/utilities/hooks/useElementInView";
import classes from "./Skills.module.css";

const Skills = () => {
  const targetSection = useRef(null);
  const skillsTarget = useRef(null);

  const { elementInView } = useElementInView(targetSection, 0.3);
  const [currentSection, setCurrentSection] =
    useContext<any>(NavigationContext);

  useEffect(() => {
    if (elementInView) {
      // Animations.fadeInUpStaggeredWithVisibility(targetSection.current);
      // Animations.fadeInUpStaggered(skillsTarget.current, 1);
    }
  }, [elementInView]);

  return (
    <section id="skills" className="section bg-light">
      <div
        ref={targetSection}
        className={`${classes.skills__section} container`}
      >
        <div className="heading">Skills & Tools</div>
        <div className="fs-xl">
          A couple of
          <span className="primary"> technologies </span> I am familiar with.
        </div>

        <div ref={skillsTarget} className={classes.tech__stack}>
          {mySkills.map((skill) => (
            <div key={skill.name}>
              <Image
                alt={skill.name}
                className={classes.tech__stack__skill}
                src={skill.src}
                preview={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
