import Head from "next/head";
import React from "react";
import NavBar from "./Navigation/NavBar";

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mejabi Durotimi | Software Engineer</title>
      </Head>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
