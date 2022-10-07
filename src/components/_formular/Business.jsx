import { useState, useEffect } from "react";

import styles from "../../style";

import { help, close, empty } from "../../assets";

import { getCurrentLang } from "../../constants";
import { send } from "./submit";

import { Button, InputField } from "..";

import howto_copyid from "../../assets/_formular/howto_copyid.mp4";

const Business = ({ onLoad, sectionInfo }) => {
  const [idVideoVisible, setIdVideoVisible] = useState(false);
  const [subjectToggle, setSubjectToggle] = useState(false);

  const [message, setMessage] = useState({
    subject: "kostrjanc Business program",

    name: "",
    birthdate: "",
    id: "",
    contact: "",
    addText: "",
  });

  const sendMail = () => {
    if (!(message.name && message.birthdate && message.id && message.contact))
      return;
    send({
      subject: message.subject,
      body: `Požadanje za kostrjanc Business program%0AInformacije nic změnić! Jenož wotpósłać!%0A%0DMjeno, předmjeno: ${
        message.name
      }%0ADźeń naroda: ${message.birthdate}%0AKontaktwa móžnosć: ${
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
  useEffect(() => {
    console.log(message.subject);
  });

  return (
    <section id="business" className={`${styles.boxWidth} ${styles.paddingY}`}>
      <h2 className={`${styles.heading2} max-w-[980px]`}>
        {getCurrentLang() === "sb" ? sectionInfo.title : sectionInfo.title_de}
      </h2>

      <div className={`w-full flex-col flex ${styles.marginY}`}>
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
            (getCurrentLang() === "sb" ? "Datum naroda" : "Geburtsdatum") + " *"
          }
          onChange={(txt) =>
            setMessage({
              ...message,
              birthdate: txt,
            })
          }
        />

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

        <div className={`flex flex-row ${styles.flexCenter} my-2`}>
          <InputField
            disabled={!subjectToggle}
            st={`flex-1`}
            placeholder={
              getCurrentLang() === "sb"
                ? "Tema: kostrjanc Business program"
                : "Betreff: kostrjanc Business program"
            }
            onChange={(txt) =>
              setMessage({
                ...message,
                subject: txt,
              })
            }
          />

          <div
            className={`ml-5 w-[32px] h-[32px] rounded cursor-pointer ${styles.flexCenter} border-secondary border-[1px]`}
          >
            <img
              title={
                getCurrentLang() === "sb" ? "Polo wobdźěłać" : "Feld bearbeiten"
              }
              src={subjectToggle ? close : empty}
              onClick={(prev) => {
                if (subjectToggle)
                  setMessage({
                    ...message,
                    subject: "kostrjanc Business program",
                  });
                setSubjectToggle((prev) => !prev);
              }}
              className={`w-[50 %] h-[50 %] object-contain ${styles.iconAnimation}`}
            />
          </div>
        </div>

        <InputField
          st={"mt-2"}
          multiline
          placeholder={
            getCurrentLang() === "sb"
              ? "Přidatne informacija dodać"
              : "Zusätzliche Informationen hinzufügen"
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

export default Business;
