import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useContext, useEffect, useRef } from "react";
import Animations from "~/utilities/animations/Animations";
import { NavigationContext } from "~/utilities/context/NavigationContext";
import { externalLinks, sections } from "~/utilities/data";
import useElementInView from "~/utilities/hooks/useElementInView";
import classes from "./Connect.module.css";

const Connect = () => {
  const targetSection = useRef(null);
  const [form] = Form.useForm();
  const handleSubmit = () => {};

  const { elementInView } = useElementInView(targetSection, 0.5);

  const [currentSection, setCurrentSection] =
    useContext<any>(NavigationContext);

  useEffect(() => {
    if (elementInView) {
      setCurrentSection(sections.CONNECT);
      Animations.fadeInUpStaggeredWithVisibility(targetSection.current);
    }
  }, [elementInView]);

  return (
    <section id="connect" className="section">
      <div
        ref={targetSection}
        className={`${classes.connect__section} container`}
      >
        <div className="heading">Connect with me</div>
        <div className="fs-xl">
          <span className="primary">Interested </span>
          in working with me or perhaps just talk?
        </div>
        <br />
        <div>
          You can reach me via mail at
          <span className="primary">
            <a href={`mailto:${externalLinks.EMAIL}`}> {externalLinks.EMAIL}</a>
          </span>
        </div>
        <footer className={classes.footer}>
          <div className="fs-md">© 2021 Oluwadurotimi Mejabi</div>
          <div className={classes.footer__socials}>
            <a href={externalLinks.LINKEDIN} target={"_blank"}>
              <LinkedinOutlined className="fs-l" />
            </a>

            <a target={"_blank"} href={externalLinks.GITHUB}>
              <GithubOutlined className="fs-l" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Connect;
