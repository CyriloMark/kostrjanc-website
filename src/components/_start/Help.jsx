import styles from "../../style";

import { getCurrentLang } from "../../constants";

import { Button } from "../";

const Help = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow ${styles.boxWidth}`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>{getCurrentLang() === "sb" ? "Trjebaš pomoc?" : "Brauchst du Hilfe?"}</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                {
                    getCurrentLang() === "sb" ?
                        "Jeli prjebaš pomoc, stłóć na knefl, sćěhuj linkej. Jeli so twój problem njezhrisa, móžeš nas kontaktěrować. Emailowa adresa abo telefoniske čisło namakaš w impresumje." :
                        "Falls du Hilfe brauchst, folge dem Link. Falls dies dein Problem nicht behebt, kannst du uns kontaktieren. Die E-Mail Adresse oder Telefonnummer findest du im Impressum."
                }
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 sm:flex-col flex-row`}>
            <Button text={getCurrentLang() === "sb" ? "Pomoc" : "Hilfe"} styles={"sm:mr-0 mr-5 sm:mb-5 mb-0"} link={true} to="/pomoc" />
            <Button text={getCurrentLang() === "sb" ? "Impresum" : "Impressum"} link={true} to="/impresum" />
        </div>
    </section>
)

export default Help;
