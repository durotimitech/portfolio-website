import {
  GithubOutlined,
  HomeOutlined,
  MailOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import React, { useContext, useEffect, useRef } from "react";
import Animations from "~/utilities/animations/Animations";
import { NavigationContext } from "~/utilities/context/NavigationContext";
import { externalLinks, sections } from "~/utilities/data";
import classes from "./NavBar.module.css";

const NavBar = () => {
  let navbarItem = useRef(null);
  let mobileNavbarItem = useRef(null);
  const [currentSection, setCurrentSection] =
    useContext<any>(NavigationContext);

  useEffect(() => {
    Animations.fadeInUp(navbarItem.current);
  }, []);

  return (
    <>
      <header ref={navbarItem} className={classes.header}>
        <nav className="container">
          <div className={classes.web__nav}>
            <a href="#hero">
              <Image
                className={classes.nav__logo}
                src="/images/logo-white.png"
                alt="Logo"
                preview={false}
              />
            </a>

            <ul className={classes.nav__links}>
              <li>
                <a href="#projects">
                  <span
                    className={`${
                      currentSection === sections.PROJECTS && "primary"
                    } link`}
                  >
                    Work
                  </span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <span
                    className={`${
                      currentSection === sections.ABOUT && "primary"
                    } link`}
                  >
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#connect">
                  <span
                    className={`${
                      currentSection === sections.CONNECT && "primary"
                    } link`}
                  >
                    Connect
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className={classes.nav__mobile} ref={mobileNavbarItem}>
        <a href="#hero">
          <HomeOutlined
            className={`link fs-lg ${
              currentSection === sections.HERO && classes.nav__mobile__active
            }`}
          />
        </a>

        <a href="#projects">
          <ProjectOutlined
            className={`link fs-lg ${
              currentSection === sections.PROJECTS &&
              classes.nav__mobile__active
            }`}
          />
        </a>

        <a href="#about">
          <UserOutlined
            className={`link fs-lg ${
              currentSection === sections.ABOUT && classes.nav__mobile__active
            }`}
          />
        </a>

        <a href="#connect">
          <MailOutlined
            className={`link fs-lg ${
              currentSection === sections.CONNECT && classes.nav__mobile__active
            }`}
          />
        </a>

        <a href={externalLinks.GITHUB} target="_blank" rel="noreferrer">
          <GithubOutlined className={`link fs-lg`} />
        </a>
      </div>
    </>
  );
};

export default NavBar;
