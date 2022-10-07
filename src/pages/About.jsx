import { useEffect } from "react";

import styles from "../style";

import { getCurrentLang } from "../constants";

import Hero from "../components/_about/Hero";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      getCurrentLang() === "sb"
        ? "kostrjanc - Štó my smy"
        : "kostrjanc - Wer wir sind";
  }, []);

  return (
    <div className={`bg-primary ${styles.flexCenterVert} flex-col w-full`}>
      <Hero />
      <div
        className={`${styles.paddingX} ${styles.flexCenterVert} ${styles.boxWidth} flex-col`}
      >
        <Footer />
      </div>
    </div>
  );
};

export default About;
