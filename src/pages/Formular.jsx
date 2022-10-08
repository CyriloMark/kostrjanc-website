import { useEffect, useState } from "react";

import styles from "../style";

import {
  getCurrentLang,
  getPersistantAttributes,
  formularSections,
} from "../constants";

import SectionSelect from "../components/_formular/SectionSelect";

import Business from "../components/_formular/Business";
import Werifikacija from "../components/_formular/Werifikacija";
import Ban from "../components/_formular/Ban";
import Hack from "../components/_formular/Hack";

import Feedback from "../components/_formular/Feedback";

import { Footer } from "../components";

import { Link } from "react-router-dom";
import Bugs from "../components/_formular/Bugs";

const Formular = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      getCurrentLang() === "sb"
        ? "kostrjanc - Formular"
        : "kostrjanc - Formular";
    if (window.location.hash)
      setActiveSection(window.location.hash.split("#")[1]);
  }, []);

  const onSectionLoad = () => {
    document.getElementById(activeSection).scrollIntoView({
      behavior: "auto",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className={`bg-primary ${styles.flexCenterVert} flex-col w-full`}>
      <div
        className={`z-[5] flex flex-col ${styles.padding} ${styles.boxWidth}`}
      >
        <h1
          className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`}
        >
          {getCurrentLang() === "sb" ? "Powěsćowy formular" : "Formular"}
        </h1>
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexCenterVert} ${styles.boxWidth} flex-col relative`}
      >
        <div className="z-[0] absolute top-0 left-0 rounded-full w-[10%] h-[10%] red__gradient" />
        <div className="z-[1] absolute top-[15%] right-[15%] rounded-full w-[30%] h-[10%] blue__gradient" />

        <div className="z-[1] absolute bottom-[25%] right-[5%] w-[40%] h-[5%] blue__gradient" />
        <div className="z-[0] absolute bottom-[30%] right-[10%] w-[5%] h-[10%] red__gradient" />
        <div className="z-[0] absolute bottom-[35%] right-[25%] w-[10%] h-[5%] white__gradient" />

        <SectionSelect
          active={activeSection}
          onSectionChange={(section) => {
            setActiveSection(section);
          }}
        />

        {activeSection === "business" ? (
          <Business
            onLoad={onSectionLoad}
            sectionInfo={formularSections.find(
              (sec) => sec.id === activeSection
            )}
          />
        ) : null}
        {activeSection === "werifikacija" ? (
          <Werifikacija
            onLoad={onSectionLoad}
            sectionInfo={formularSections.find(
              (sec) => sec.id === activeSection
            )}
          />
        ) : null}
        {activeSection === "ban" ? (
          <Ban
            onLoad={onSectionLoad}
            sectionInfo={formularSections.find(
              (sec) => sec.id === activeSection
            )}
          />
        ) : null}
        {activeSection === "hack" ? (
          <Hack
            onLoad={onSectionLoad}
            sectionInfo={formularSections.find(
              (sec) => sec.id === activeSection
            )}
          />
        ) : null}
        {activeSection === "bugs" ? (
          <Bugs
            onLoad={onSectionLoad}
            sectionInfo={formularSections.find(
              (sec) => sec.id === activeSection
            )}
          />
        ) : null}
        {activeSection === "feedback" ? (
          <Feedback
            onLoad={onSectionLoad}
            sectionInfo={formularSections.find(
              (sec) => sec.id === activeSection
            )}
          />
        ) : null}
        <Footer />
      </div>
    </div>
  );
};

export default Formular;

export const LinkToFormular = ({ styles, text, section }) => {
  return (
    <button
      type="button"
      className={`border-secondary border-[1px] rounded-lg py-2 px-3 font-barlow font-medium
            text-[18px] text-gradient transition-all duration-300 hover:rounded-none ${styles}`}
    >
      <Link
        to={
          "/pomoc/formular?" +
          getPersistantAttributes() +
          (section ? "#" + section : "")
        }
      >
        {text}
      </Link>
    </button>
  );
};
