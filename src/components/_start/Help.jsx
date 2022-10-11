import styles from "../../style";

import { getCurrentLang } from "../../constants";

import { Button } from "../";

const Help = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow ${styles.boxWidth}`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        {getCurrentLang() === "sb" ? "Trjebaš pomoc?" : "Brauchst du Hilfe?"}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {getCurrentLang() === "sb"
          ? "Jeli prjebaš pomoc, stłóć na knefl, sćěhuj linkej. Jeli so twój problem njezhrisa, móžeš nas kontaktěrować. Emailowa adresa abo telefoniske čisło namakaš w impresumje."
          : "Falls du Hilfe brauchst, folge dem Link. Falls dies dein Problem nicht behebt, kannst du uns kontaktieren. Die E-Mail Adresse oder Telefonnummer findest du im Impressum."}
      </p>
    </div>

    <div
      className={`${styles.flexCenter}
        sm:ml-10 sm:mt-0 sm:mb-0 sm:flex-col 
        xs:ml-0 xs:mt-10 xs:mb-5 xs:flex-row
        ml-0 mt-5 mb-0 flex-col `}
    >
      <Button
        text={getCurrentLang() === "sb" ? "Pomoc" : "Hilfe"}
        styles={"sm:mr-0 xs:mr-5 mr-0 sm:mb-5 xs:mb-0 mb-5"}
        link={true}
        to="/pomoc"
      />
      <Button
        text={getCurrentLang() === "sb" ? "Impresum" : "Impressum"}
        styles={"sm:mr-0 xs:mr-5 mr-0 sm:mb-5 xs:mb-0 mb-5"}
        link={true}
        to="/impresum"
      />
      <Button text={"Formular"} link to="/pomoc/formular" />
    </div>
  </section>
);

export default Help;
