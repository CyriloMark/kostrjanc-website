import styles from "../style";
import { getCurrentLang } from "."

import { Button } from "../components/";

import Install from "../components/_start/Install";

const classes = {
    container: "w-full mt-5",
    st: "font-barlow font-semibold text-dimWhite text-[21px] leading-[35px] flex-col",
    p: "font-barlow font-normal text-dimWhite text-[18px] leading-[30.8px] ",
    a: "font-barlow font-normal text-gradient cursor-pointer"
}

export const faq = [
    {
        title: "P: Chcu na kostrjanc wabjenje šaltować",
        title_de: "F: Ich möchte auf kostrjanc Werbung schalten",
        answer:
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={`${classes.p} mb-5`}>
                    {
                        getCurrentLang() === "sb" ?
                            "My so za waš zajim za kostrjanc wabjenje jara wjeselimy, dokelž nam wabjenje pomha projekt kostrjanc dale běžeć dać. Hdyž wy na kostrjanc wabiće njepomhaće jenož nam, ale móžeće z tym nowych kupcow namakać." :
                            "wüsokwswoswkosw"
                    }
                </p>
                <p className={classes.st}>
                    {
                        getCurrentLang() === "sb" ?
                            "Kak funguje wabjenje na kostrjanc?" :
                            "Wie funktioniert Werbung auf kostrjanc?"
                    }
                </p>
                <p className={`${classes.p} mb-5`}>
                    {
                        getCurrentLang() === "sb" ?
                            "Hdyž wužiwarjo kostrjanc wužiwaja, woni druhdy jedne wabjenje widźa. Hdyž so jedne wabjenje pokaza so připadnje jedne wabjenje pokaza. Hdyž so jedne wabjenje pokaza płaći to 5 centow." :
                            "swskowskwskow"
                    }
                </p>
                <p className={classes.st}>
                    {
                        getCurrentLang() === "sb" ?
                            "Maće zajim na kostrjanc wabjenju?" :
                            "Hab Ihr Interesse am Schalten von Werbung in kostrjanc?"
                    }
                </p>
                <p className={classes.p}>
                    {
                        getCurrentLang() === "sb" ?
                            <p>Hdyž chceće na kostrjanc wabić trjebaće wy jedyn wabjenski wobraz we wulkosći 900x1000 pikselow. Potom pisaće wy nam jednu mailku na <a href="mailto:info@kostrjanc.de" className={classes.a} >info@kostrjanc.de</a>. W mailce posćeleće nam prošu wabjenski wobraz a potom prajiće nam kak husto ma so waše wabjenje wobhladać.</p> :
                            "swskowskwskow"
                    }
                </p>
            </div>,
    },
    {
        title: "P: Ja sym so njesprawnje banował. Što něk?",
        title_de: "F: Ich wurde ungerecht von kostrjanc gebannt. Was nun?",
        answer:
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {
                        getCurrentLang() === "sb" ?
                            <p>Hdyž sy so njesprawne banował pisaj prošu mailku na <a className={classes.a} href="mailto:info@kostrjanc.de">info@kostrjanc.de</a>, do mailki pisaj prošu twoju wužiwarsku id a čehodla so njesprawne banowany čuješ. Potom naš team rozsudźi hač bě twój ban wosprawnjeny.</p> :
                            "wüsokwswoswkosw"
                    }
                </p>
            </div>,
    },
    {
        title: "P: Kak móžu moje daty pola kostrjanc widźeć?",
        title_de: "F: Wie kann ich meine Daten auf kostrjanc einsehen?",
        answer:
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {
                        getCurrentLang() === "sb" ?
                            <p>Hdyž chceš wědźeć, kotre daty my wo tebi mamy, pisaš nam najlěpje mailku na <a className={classes.a} href="mailto:info@kostrjanc.de">info@kostrjanc.de</a>. Potom my tebi wšitke twoje daty w formy pdf damy.</p> :
                            "wüsokwswoswkosw"
                    }
                </p>
            </div>,
    },
    {
        title: "P: Něchtó je mój account hakował. Što dyrbju činić?",
        title_de: "F: Jemand hat mein Account gehackt. Was soll ich tun?",
        answer:
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {
                        getCurrentLang() === "sb" ?
                            <p>Jeli je tebje něchtó hakował njeje to žadyn wulki problem, my móžemy twoje konto wróćo sadźić. Pisaj nam prošu jednu mailku na <a className={classes.a} href="mailto:info@kostrjanc.de">info@kostrjanc.de</a>. W tutej mailce pisaj nam wužiwarsku ID twojeho konta. Potom dopokazaj nam zo konto tebi słuša. Potom pisaj nam prošu nowu mailku a hesło za konto. Naš team sej potom mailku wobhlada a potom rozsudźi hać my twój konto wróćo zasadźimy.</p> :
                            "wüsokwswoswkosw"
                    }
                </p>
            </div>,
    },
    {
        title: "P: Sy admin abo werifikowana wosoba?",
        title_de: "F: Du bist ein Admin oder eine verifizierte Person?",
        answer:
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {
                        getCurrentLang() === "sb" ?
                            <p>sowskwoswk</p> :
                            "wüsokwswoswkosw"
                    }
                </p>
            </div>,
    },
    {
        title: "P: Pytaš naš impresum?",
        title_de: "F: Suchst du unser Impressum?",
        answer:
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {
                        getCurrentLang() === "sb" ?
                            <p>Sćěhuj linkej, zo na naš impresum přińdźeš:</p> :
                            "wüsokwswoswkosw"
                    }
                </p>
                <Button styles="mt-5" text={getCurrentLang() === "sb" ? "Impresum" : "Impressum"} to="/impresum" link />
            </div>,
    },
]