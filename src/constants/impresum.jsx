import styles from "../style"
import { getCurrentLang } from "."

const classes = {
    st: "font-barlow font-semibold text-dimWhite text-[21px] leading-[35px] flex-col",
    p: "font-barlow font-normal text-dimWhite text-[18px] leading-[30.8px] ",
    a: "font-barlow font-normal text-gradient cursor-pointer"
}

export const impresumElements = [
    {
        title: "Předsedźerjo",
        title_de: "Vorsitzender",

        content:
            <div className={styles.paragraph}>
                <p>Mark, Cyril</p>
                <p>Baier, Korla</p>
            </div>
    },
    {
        title: "Kontakt",
        title_de: "Kontakt",

        content:
            <div className={styles.paragraph}>
                <p>Telefon: <a href="tel:+491794361854 " className={classes.a}>+49 179 4361854 </a></p>
                <p>{getCurrentLang() === "sb" ? "Email" : "E-Mail"}: <a href="mailto:info@kostrjanc.de" className={classes.a}>info@kostrjanc.de</a></p>
                <p>{getCurrentLang() === "sb" ? "Syć" : "Internet"}: <a href="https://www.kostrjanc.de/" className={classes.a}>kostrjanc.de</a></p>
            </div>
    },
]