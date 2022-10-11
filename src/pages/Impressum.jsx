import { useEffect } from "react";

import styles from "../style";

import { getCurrentLang } from "../constants";
import { impresumElements } from "../constants/impresum";

import { Button } from "../components";
import SectionElement from "../components/_impresum/SectionElement";

import { LinkToFormular } from "./Formular";

import { Footer } from "../components";

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      getCurrentLang() === "sb"
        ? "kostrjanc - Impresum"
        : "kostrjanc - Impressum";
  }, []);

  return (
    <div className={`bg-primary ${styles.flexCenterVert} flex-col w-full`}>
      <div
        className={`z-[5] flex flex-col ${styles.padding} ${styles.boxWidth}`}
      >
        <h1
          className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`}
        >
          {getCurrentLang() === "sb"
            ? "Impresum a podobne"
            : "Impressum und Ähnliches"}
        </h1>
        <h2 className={`${styles.heading2} z-[5] text-center mt-5`}>
          {getCurrentLang() === "sb"
            ? "Podaća po §5 TMG"
            : "Angaben nach §5 TMG"}
        </h2>

        <div className={`z-[5] flex flex-col ${styles.paragraph} mt-5`}>
          <p>Cyril Mark</p>
          <p>Łusč 1e</p>
          <p>02699 Bóšicy</p>
          <div className="h-5" />
          <p>Korla Baier</p>
          <p>Srjedźny puć 12</p>
          <p>01920 Pančicy-Kukow</p>

          <div className="absolute z-[1] w-[5%] h-[25%] red__gradient left-0 bottom-0 rounded-full" />
          <div className="absolute z-[1] w-[25%] h-[50%] blue__gradient right-0 top-[25%] rounded-full" />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.flexCenterVert} ${styles.boxWidth} ${styles.paddingX} flex-col`}
      >
        {impresumElements.map((el, index) => (
          <SectionElement key={index} {...el} />
        ))}

        <div className={`${styles.boxWidth} ${styles.paddingY} flex-col flex`}>
          <h2 className={styles.paragraph}>
            Dalše informacije wo škiće datow a dalšich prawniskich temow:
          </h2>
          <div className="w-full flex-col flex-1 mt-10">
            <div className="w-full flex-row">
              <Button
                styles={`mr-5`}
                text="Škit datow"
                link
                to="/impresum/skitdatow"
              />
              <Button
                styles={`mr-5`}
                text="Kontakt"
                link
                to="/impresum/kontakt"
              />
            </div>
            <LinkToFormular
              styles={"mt-5"}
              text={
                getCurrentLang() === "sb"
                  ? "Naš formular za wšo"
                  : "Unser Formular für alles"
              }
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Impressum;
