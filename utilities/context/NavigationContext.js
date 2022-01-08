import React, { createContext, useState } from "react";
import { sections } from "../data";

export const NavigationContext = createContext({});

export const NavigationProvider = (props) => {
  const [currentSection, setCurrentSection] = useState(sections.HERO);

  return (
    <NavigationContext.Provider value={[currentSection, setCurrentSection]}>
      {props.children}
    </NavigationContext.Provider>
  );
};
