import { useEffect } from "react";

import styles from "../style";

import { getCurrentLang } from "../constants";

import Faq from "../components/_help/Faq";
import { Footer } from "../components";

const Help = () => {

    useEffect(() => {
        document.title = getCurrentLang() === "sb" ? "kostrjanc - Pomoc" : "kostrjanc - Hilfe";
    }, []);

    return (
        <div onLoad={() => window.scrollTo(0, 0)} className={`bg-primary ${styles.flexCenterVert} flex-col w-full`}>

            <div className={`flex ${styles.paddingY} ${styles.boxWidth}`}>
                <h1 className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`}>
                    {
                        getCurrentLang() === "sb" ?
                            "Pomoc - Naš Faq" :
                            "Hilfe - Unser Faq"
                    }
                </h1>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenterVert} w-full flex-col`}>
                <Faq />
                <Footer />
            </div>

        </div>
    );
}

export default Help;
