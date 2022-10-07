import { useState, useEffect } from "react";

import styles from "../../style";

import star from "../../assets/_formular/star.svg";
import star_outline from "../../assets/_formular/star_outline.svg";

import { getCurrentLang } from "../../constants";
import { send } from "./submit";

import { Button, InputField } from "..";

const Feedback = ({ onLoad, sectionInfo }) => {
  const [message, setMessage] = useState({
    name: "",
    addText: "",
  });

  const starStyle =
    "w-[32px] h-[32px] cursor-pointer relative hover:scale-90 transition-all duration-300";

  const [activeStar, setActiveStar] = useState(0);

  const sendMail = () => {
    if (!message.addText) return;
    send({
      subject: "Feedback",
      body: `Twój feedback%0AInformacije nic změnić! Jenož wotpósłać!%0A%0DMjeno, Předmjeno: ${
        message.name
      }%0A%0DPřidatne informacije:%0A${message.addText.replace(
        /\n/gm,
        "%0A"
      )}%0A%0DHwězdy: ${activeStar}`,
    });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <section id="feedback" className={`${styles.boxWidth} ${styles.paddingY}`}>
      <h2 className={`${styles.heading2} max-w-[980px]`}>
        {getCurrentLang() === "sb" ? sectionInfo.title : sectionInfo.title_de}
      </h2>

      <div className={`w-full flex-col flex ${styles.marginY}`}>
        <InputField
          st={`mb-2`}
          placeholder={
            getCurrentLang() === "sb" ? "Mjeno, Předmjeno" : "Name, Vorname"
          }
          onChange={(txt) =>
            setMessage({
              ...message,
              name: txt,
            })
          }
        />

        <div className={`my-2 flex flex-row items-start`}>
          <img
            src={activeStar >= 1 ? star : star_outline}
            className={`${starStyle} mr-2`}
            alt="hwězda 1"
            onClick={() => setActiveStar(1)}
          />
          <img
            src={activeStar >= 2 ? star : star_outline}
            className={`${starStyle} mr-2`}
            alt="hwězda 2"
            onClick={() => setActiveStar(2)}
          />
          <img
            src={activeStar >= 3 ? star : star_outline}
            className={`${starStyle} mr-2`}
            alt="hwězda 3"
            onClick={() => setActiveStar(3)}
          />
          <img
            src={activeStar >= 4 ? star : star_outline}
            className={`${starStyle} mr-2`}
            alt="hwězda 4"
            onClick={() => setActiveStar(4)}
          />
          <img
            src={activeStar == 5 ? star : star_outline}
            className={`${starStyle}`}
            alt="hwězda 5"
            onClick={() => setActiveStar(5)}
          />
        </div>

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

export default Feedback;
