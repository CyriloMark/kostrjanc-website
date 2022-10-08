import { useState, useEffect } from "react";

import styles from "../../style";

import { help, close } from "../../assets";

import { getCurrentLang } from "../../constants";
import { send } from "./submit";

import { Button, InputField } from "..";

import howto_copyid from "../../assets/_formular/howto_copyid.mp4";

const Hack = ({ onLoad, sectionInfo }) => {
  const [idVideoVisible, setIdVideoVisible] = useState(false);

  const [message, setMessage] = useState({
    subject: "kostrjanc Business program",

    id: "",
    contact: "",
    addText: "",
  });

  const sendMail = () => {
    if (!(message.id && message.contact && message.addText)) return;
    send({
      subject: "hack",
      body: `Nimam wjac přistup na mój konto abo sej myslu, zo je so mój konto hackował.%0AInformacije nic změnić! Jenož wotpósłać!%0A%0DKontaktwa móžnosć: ${
        message.contact
      }%0Akostrjanc id: ${message.id}
            ${
              message.addText
                ? `%0A%0DPřidatne informacije:%0A${message.addText.replace(
                    /\n/gm,
                    "%0A"
                  )}`
                : ""
            }`,
    });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <section id="hack" className={`${styles.boxWidth} ${styles.paddingY}`}>
      <h2 className={`${styles.heading2} max-w-[980px]`}>
        {getCurrentLang() === "sb" ? sectionInfo.title : sectionInfo.title_de}
      </h2>

      <div className={`w-full flex-col flex ${styles.marginY}`}>
        <div className="flex flex-col my-2">
          <div className={`flex flex-row ${styles.flexCenter}`}>
            <InputField
              st={`flex-1`}
              placeholder={
                (getCurrentLang() === "sb"
                  ? "Id twojeho kostrjanc Accounta"
                  : "Id deines kostrjanc Accounts") + " *"
              }
              onChange={(txt) =>
                setMessage({
                  ...message,
                  id: txt,
                })
              }
            />
            <div
              className={`ml-5 w-[32px] h-[32px] rounded-full cursor-pointer ${styles.flexCenter} bg-blue-gradient`}
            >
              <img
                src={idVideoVisible ? close : help}
                onClick={() => setIdVideoVisible((prev) => !prev)}
                className={`w-[50%] h-[50%] object-contain ${styles.iconAnimation}`}
              />
            </div>
          </div>
          {idVideoVisible ? (
            <video
              src={howto_copyid}
              autoPlay
              muted
              loop
              className={`my-2 max-h-[620px] self-center`}
            ></video>
          ) : null}
        </div>

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

export default Hack;
