import { useState, useEffect } from "react";

import styles from "../../style";

import { getCurrentLang } from "../../constants";
import { send } from "./submit";

import { Button, InputField } from "..";

const bugSections = [
  {
    // interface
    id: 0,
    title: "Zmylki z wužiwarskej płoninu abo z pokazku",
    title_de: "Fehler mit der Benutzeroberfläche oder mit der Anzeige",
  },
  {
    // slow / long loading times
    id: 1,
    title: "Zmylki z spěšnosću aplikacije abo dółhe nabiwanske časy",
    title_de: "Fehler mit der Leistung der App oder lange Ladezeiten",
  },
  {
    // system isnt working
    id: 2,
    title: "Defektne abo zmylne funcije",
    title_de: "Defekte oder fehlerhafte Funktionen",
  },
  {
    // crash / freeze
    id: 3,
    title:
      "Problemy z stabilitu aplikacije / aplikacija so stajnje wot samo začini",
    title_de: "Probleme mit der Stabilität / App stürtzt andauernd ab",
  },
  {
    id: 4,
    title: "Zmylki w žórłje abo z wěstotu",
    title_de: "Fehler mit dem Quellcode oder Sicherheitslücken",
  },
  {
    id: 5,
    title: "Tamny zmylk",
    title_de: "Sonstige Fehler",
  },
];

const FeatureCard = ({ title, onclick, active }) => (
  <div
    className={`flex-1 flex flex-row p-6 rounded-[20px] m-5 feature-card duration-300 w-full items-center xs:min-w-[480px] cursor-pointer
        ${active ? "border-secondary border-[1px]" : ""} `}
    onClick={onclick}
  >
    <h4 className="font-barlow font-semibold text-white text-[18px] leading-[23.4px]">
      {title}
    </h4>
  </div>
);

const Bugs = ({ onLoad, sectionInfo }) => {
  const [message, setMessage] = useState({
    name: "",
    contact: "",
    addText: "",
  });

  const [activeBugSection, setActiveBugSection] = useState(null);

  const sendMail = () => {
    if (
      !(message.addText && message.name && message.contact && activeBugSection)
    )
      return;
    send({
      subject: "Feedback",
      body: `Twój feedback%0AInformacije nic změnić! Jenož wotpósłać!%0A%0DMjeno, Předmjeno: ${
        message.name
      }%0AKontaktwa móžnosć: ${
        message.contact
      }%0A%0DPřidatne informacije:%0A${message.addText.replace(
        /\n/gm,
        "%0A"
      )}%0A%0DSection: ${activeBugSection}`,
    });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <section id="bugs" className={`${styles.boxWidth} ${styles.paddingY}`}>
      <h2 className={`${styles.heading2} max-w-[980px]`}>
        {getCurrentLang() === "sb" ? sectionInfo.title : sectionInfo.title_de}
      </h2>

      <div className={`w-full flex-col flex ${styles.marginY}`}>
        <div
          className={`${styles.flexCenter} mb-2 relative flex flex-row flex-wrap w-full`}
        >
          <h2 className={`${styles.heading2} mb-5`}>
            {getCurrentLang() === "sb"
              ? "Wuzwol sej typ twojeho zmylka:"
              : "Wähle einen Typ deines Fehlers aus:"}{" "}
            *
          </h2>
          {bugSections.map((section) => (
            <FeatureCard
              key={section.id}
              onclick={() => setActiveBugSection(section.id)}
              title={
                getCurrentLang() === "sb" ? section.title : section.title_de
              }
              active={activeBugSection === section.id}
            />
          ))}
        </div>

        <InputField
          st={`mb-2`}
          placeholder={
            (getCurrentLang() === "sb" ? "Mjeno, Předmjeno" : "Name, Vorname") +
            " *"
          }
          onChange={(txt) =>
            setMessage({
              ...message,
              name: txt,
            })
          }
        />

        <InputField
          st={`my-2`}
          placeholder={
            (getCurrentLang() === "sb"
              ? "Móžnosć za konaktowanje (email / telefoniske čisło)"
              : "Kontaktmöglichkeiten (E-Mail / Telefonnummer)") + " *"
          }
          onChange={(txt) =>
            setMessage({
              ...message,
              contact: txt,
            })
          }
        />

        <InputField
          st={"mt-2"}
          multiline
          placeholder={
            getCurrentLang() === "sb"
              ? "Přidatne informacija dodać *"
              : "Zusätzliche Informationen hinzufügen *"
          }
          onChange={(txt) =>
            setMessage({
              ...message,
              addText: txt,
            })
          }
        />
      </div>

      <p className={`${styles.marginY} ${styles.paragraph}`}>
        {getCurrentLang() === "sb"
          ? "Wšitke z * markěrowane pola su winowatostne zapodać!"
          : "Alle mit * markierten Felder sind unbedingt auszufüllen!"}
      </p>

      <Button
        text={getCurrentLang() === "sb" ? "Wotpósłać" : "Abschicken"}
        onClick={sendMail}
      />
    </section>
  );
};

export default Bugs;
