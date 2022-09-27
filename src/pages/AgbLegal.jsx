import { useEffect } from "react";

import styles from "../style";

import { getCurrentLang } from "../constants";
import { privacySections } from "../constants/privacy";

import { Footer } from "../components";

const AgbLegal = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = getCurrentLang() === "sb" ? "kostrjanc - Škit datow / Prawniske" : "kostrjanc - Datenschutz / Rechliches";
    }, []);

    return (
        <div className={`bg-primary ${styles.flexCenterVert} flex-col w-full`}>

            <div className={`z-[5] flex flex-col ${styles.padding} ${styles.boxWidth}`}>
                <h1 className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`}>
                    {
                        getCurrentLang() === "sb" ?
                            "Škit datow / Prawniske" :
                            "Datenschutz / Rechliches"
                    }
                </h1>
            </div>

            <div className={`z-[5] ${styles.paddingX} ${styles.flexCenterVert} ${styles.boxWidth} flex-col`}>
                <div className={`${styles.paddingY} ${styles.flexStart} flex w-full flex-col`}>
                    {
                        privacySections.map((section, index) => (
                            <div key={index} className={`flex flex-col w-full ${index === privacySections.length - 1 ? "mb-0" : "mb-5"}`}>
                                <h2 className={`${styles.heading2}`}>{getCurrentLang() === "sb" ? section.title : section.title_de}</h2>
                                <p className={`${styles.paragraph} mt-2`}>{getCurrentLang() === "sb" ? section.content : section.content_de}</p>
                                {
                                    section.links ?
                                        section.links.map((link, ind) => (
                                            <a key={ind} className={`${styles.paragraph} text-gradient cursor-pointer`} href={link} >{link}</a>
                                        ))
                                        : null
                                }
                            </div>
                        ))
                    }
                </div>
                <div className={`${styles.flexStart} ${styles.paragraph} self-start w-full max-w-[720px]`}>
                    {
                        getCurrentLang() === "sb" ?
                            "Jeli chceš sej twoje daty wobhladać abo twoje daty wotstronić móžeš to cyle jednorje w zastajenjach w app činić." :
                            "Falls du dir deine Benutzerspezifischen Daten anschauen (bzw. löschen) möchtest, kannst du das in den Einstellungen in der App machen."
                    }
                </div>
                <Footer />

            </div>

            <div className="absolute w-[25%] h-[40%] z-[0] left-0 blue__gradient" />
            <div className="absolute w-[40%] h-[5%] z-[0] left-[2%] rounded-full -bottom-[25%] white__gradient" />
            <div className="absolute w-[10%] h-[10%] z-[1] right-[5%] rounded-full bottom-[25%] red__gradient" />
            <div className="absolute w-[20%] h-[5%] z-[0] right-[10%] rounded-full bottom-[50%] white__gradient" />

        </div>
    );
}

export default AgbLegal;
