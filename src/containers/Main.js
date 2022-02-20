import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import OpenSourceProjects from "./openSourceProjects/OpenSourceProjects";
import LargeProjects from "./largeProjects/LargeProjects";
import Achievement from "./achievement/Achievement";
import Education from "./education/Education";
import Top from "./topButton/Top";
import Contact from "./contact/Contact";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <OpenSourceProjects />
        <LargeProjects />
        <Achievement />
        <Contact />
        <Top />
      </StyleProvider>
    </div>
  );
};

export default Main;
