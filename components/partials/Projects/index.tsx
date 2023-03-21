import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Image, Modal } from "antd";
import React, { useContext, useEffect, useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";
import ProjectAnimations from "~/utilities/animations/ProjectAnimations";
import { allProjects } from "~/utilities/data";
import classes from "./Projects.module.css";
import { sections } from "~/utilities/data";
import useElementInView from "~/utilities/hooks/useElementInView";
import { NavigationContext } from "~/utilities/context/NavigationContext";
import Animations from "~/utilities/animations/Animations";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = () => {
  const [projectId, setProjectId] = useState(0);
  const [project, setProject] = useState(allProjects[projectId]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const targetSection = useRef(null);
  let projectDemoItem = useRef(null);

  const { elementInView } = useElementInView(targetSection, 0.5);

  const [currentSection, setCurrentSection] =
    useContext<any>(NavigationContext);

  const previousProject = () => {
    if (projectId === 0) {
      setProjectId(allProjects.length - 1);
    } else {
      setProjectId(projectId - 1);
    }

    setProject(allProjects[projectId]);
  };

  const nextProject = () => {
    if (projectId === allProjects.length - 1) {
      setProjectId(0);
    } else {
      setProjectId(projectId + 1);
    }

    setProject(allProjects[projectId]);
  };

  useEffect(() => {
    if (elementInView) setCurrentSection(sections.PROJECTS);

    ProjectAnimations.infiniteBounce(projectDemoItem.current);
  }, [elementInView, setCurrentSection]);

  useEffect(() => {
    if (elementInView)
      Animations.fadeInUpStaggeredWithVisibility(targetSection.current);
  },[elementInView]);

  return (
    <section id="projects" className="section bg-light">
      <div
        ref={targetSection}
        className={`${classes.projects__section} container`}
      >
        {isModalVisible && (
          <ProjectDetailsModal
            setIsModalVisible={setIsModalVisible}
            project={project}
          />
        )}
        <div className="heading">Work</div>
        <div className="fs-xl">
          Some of my
          <span className="primary"> projects.</span>
        </div>

        <br />
        <br />
        <div className={classes.row}>
          <div ref={projectDemoItem}>
            <Image
              alt="Project Demo"
              className={classes.project__demo__gif}
              preview={false}
              src={project.demo}
            />
          </div>

          <br />
          <br />
          <div className={classes.project__info}>
            <div className={classes.projects__nav}>
              <div className={classes.nav__box}>
                <LeftOutlined onClick={previousProject} />
              </div>
              <span>
                {projectId + 1}/{allProjects.length}
              </span>
              <div className={classes.nav__box}>
                <RightOutlined onClick={nextProject} />
              </div>
            </div>
            <br />
            <span className="fs-lg">{project.title}</span>
            <br />
            <br />
            <div className={classes.technologies}>
              {project.technologiesUsed?.map((stack) => (
                <span className={`${classes.stack} fs-sm`} key={stack}>
                  {stack}
                </span>
              ))}
            </div>
            <br />
            <div>{project.shortDesc}</div>
            <br />
            <button
              onClick={() => setIsModalVisible(true)}
              className="btn btn-filled btn-row"
            >
              Learn More
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
