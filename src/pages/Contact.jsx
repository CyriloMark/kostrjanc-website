import { useEffect } from "react";

import styles from "../style";

import { getCurrentLang } from "../constants";

import Contactlist from "../components/_impresum/ContactList";
import TextField from "../components/_impresum/TextField";
import { Footer } from "../components";

const Contact = () => {

    useEffect(() => {
        document.title = "kostrjanc - Kontakt";
    }, []);

    return (
        <div onLoad={() => window.scrollTo(0, 0)} className={`bg-primary ${styles.flexCenterVert} flex-col w-full`}>

            <div className={`z-[5] flex flex-col ${styles.padding} ${styles.boxWidth}`}>
                <h1 className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`}>
                    {
                        getCurrentLang() === "sb" ?
                            "Kontakty" :
                            "Kontakt"
                    }
                </h1>
            </div>

            <div className={`z-[5] ${styles.paddingX} ${styles.flexCenterVert} ${styles.boxWidth} flex-col`}>
                <Contactlist />
                <TextField />
                <Footer />
            </div>

            <div className="absolute w-[40%] h-[40%] z-[0] left-[5%] top-0 blue__gradient" />
            <div className="absolute w-[10%] h-[5%] z-[1] bottom-[25%] rounded-full right-[15%] pink__gradient" />
            <div className="absolute w-[10%] h-[25%] opacity-50 z-[0] bottom-0 rounded-full right-[5%] white__gradient" />

        </div>
    );
}

export default Contact;
