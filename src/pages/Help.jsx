import { useEffect } from "react";

import styles from "../style";

import { getCurrentLang } from "../constants";

import { LinkToFormular } from "./Formular";

import Faq from "../components/_help/Faq";
import { Footer } from "../components";

const Help = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = getCurrentLang() === "sb" ? "kostrjanc - Pomoc" : "kostrjanc - Hilfe";
    }, []);

    return (
        <div className={`bg-primary flex-col flex w-full ${styles.flexCenterVert}`}>

            <div className={`${styles.paddingY} w-full`}>
                <h1 className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`}>
                    {
                        getCurrentLang() === "sb" ?
                            "Pomoc - Naš Faq" :
                            "Hilfe - Unser Faq"
                    }
                </h1>
            </div>

            <div className={`${styles.paddingX} ${styles.boxWidth} flex-col`}>
                <Faq />
                <LinkToFormular text={getCurrentLang() === "sb" ? "Naš formular za wšo" : "Unser Formular für alles"} />
                <Footer />
            </div>

        </div>
    );
}

export default Help;
