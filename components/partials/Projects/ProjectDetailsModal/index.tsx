import React, { Dispatch, SetStateAction } from "react";
import classes from "./ProjectDetailsModal.module.css";

interface IProps {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  project: {
    title: string;
    desc: string;
    technologiesUsed: string[];
    lessonsLearned: string[];
    improvements: string[];
    liveLink: string;
    github: string;
  };
}

const ProjectDetailsModal: React.FC<IProps> = ({
  setIsModalVisible,
  project: {
    title,
    desc,
    technologiesUsed,
    lessonsLearned,
    improvements,
    liveLink,
    github,
  },
}) => {
  return (
    <div className={classes.modal__bg}>
      <div className={`${classes.modal__container} container`}>
        <div className={classes.modal__header}>
          <div className="primary fs-xl">{title}</div>
          <span className="link fs-lg" onClick={() => setIsModalVisible(false)}>
            &times;
          </span>
        </div>
        <div className={classes.modal__body}>
          <div className="primary fs-lg">Overview</div>
          <div>{desc}</div>
          <br />
          <div className="primary fs-lg">Technologies Used</div>
          {technologiesUsed.map((tech) => (
            <span key={tech} className={classes.tech}>
              {tech}
            </span>
          ))}
          <br />
          <br />
          <div className="primary fs-lg">What I learned</div>
          <ul>
            {lessonsLearned.map((lesson) => (
              <ol key={lesson}>{lesson}</ol>
            ))}
          </ul>
          <br />
          <div className="primary fs-lg">Future Improvements</div>
          <ul>
            {improvements.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
          <div className={classes.modal__footer}>
            <div className={classes.modal__footer__links}>
              <button className="btn">
                <a target={"_blank"} href={liveLink} rel="noreferrer">
                  Live Link
                </a>
              </button>
              <button className="btn">
                <a target={"_blank"} href={github} rel="noreferrer">
                  Github
                </a>
              </button>
            </div>
            <button
              onClick={() => setIsModalVisible(false)}
              className="btn btn-filled"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
