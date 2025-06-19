import styles from "../style";
import { getCurrentLang } from ".";

import { Button } from "../components/";

import Install from "../components/_start/Install";

const classes = {
    container: "w-full mt-5",
    st: "font-barlow font-semibold text-dimWhite text-[21px] leading-[35px] flex-col",
    p: "font-barlow font-normal text-dimWhite text-[18px] leading-[30.8px] ",
    a: "font-barlow font-normal text-gradient cursor-pointer",
};

export const faq = [
    // {
    //     title: "P: Chcu na kostrjanc wabjenje šaltować.",
    //     title_de: "F: Ich möchte auf kostrjanc Werbung schalten.",
    //     answer: (
    //         <div className={classes.container}>
    //             <p className={classes.st}>
    //                 {getCurrentLang() === "sb" ? "W:" : "A:"}
    //             </p>
    //             <p className={`${classes.p} mb-5`}>
    //                 {getCurrentLang() === "sb"
    //                     ? "My so za waš zajim za kostrjanc wabjenje jara wjeselimy, dokelž nam wabjenje pomha projekt kostrjanc dale běžeć dać. Hdyž wy na kostrjanc wabiće njepomhaće jenož nam, ale móžeće z tym nowych kupcow namakać."
    //                     : "Wir freuen uns über Ihre Interesse an kostrjanc Werbung sehr, weil uns Werbung hilft das Projekt kostrjanc weiter laufen zu lassen. Wenn Sie auf kostrjanc Werbung šalteten hilfen sie nicht nur uns, sondern Sie können auch neue Kunden gewinnen."}
    //             </p>
    //             <p className={classes.st}>
    //                 {getCurrentLang() === "sb"
    //                     ? "Kak funguje wabjenje na kostrjanc?"
    //                     : "Wie funktioniert Werbung auf kostrjanc?"}
    //             </p>
    //             <p className={`${classes.p} mb-5`}>
    //                 {getCurrentLang() === "sb"
    //                     ? "Hdyž wužiwarjo kostrjanc wužiwaja, woni druhdy jedne wabjenje widźa. Tute je připadne. Hdyž so jedne wabjenje pokaza płaći to 5 centow."
    //                     : "Wenn Nutzer kostrjanc verwenden, sehen sie manchmal Werbung. Diese Werbung ist zufällig. Wenn eine Werbung anzeigt wird kostet das 5 Cent."}
    //             </p>
    //             <p className={classes.st}>
    //                 {getCurrentLang() === "sb"
    //                     ? "Maće zajim na kostrjanc wabjenju?"
    //                     : "Haben Sie Interesse am Schalten von Werbung in kostrjanc?"}
    //             </p>
    //             <p className={classes.p}>
    //                 {getCurrentLang() === "sb" ? (
    //                     <p>
    //                         Hdyž chceće wabjenje na kostrjanc šaltować, trjebaće
    //                         za to kostrjanc Buisness program. Tutón namakaće pod
    //                         tutóm{" "}
    //                         <a
    //                             href="https://www.kostrjanc.de/business"
    //                             className={classes.a}>
    //                             linku.
    //                         </a>{" "}
    //                         Jeli maće hišće prašenja móžeć nam mailku na{" "}
    //                         <a
    //                             href="mailto:kostrjanc@gmail.com"
    //                             className={classes.a}>
    //                             kostrjanc@gmail.com
    //                         </a>{" "}
    //                         pósłać.
    //                     </p>
    //                 ) : (
    //                     <p>
    //                         Wenn Sie Werbung auf kostrjanc schalten möchten,
    //                         brauchen Sie dafür das kostrjanc Buisness Programm.
    //                         Dieses finden Sie unter diesem{" "}
    //                         <a
    //                             href="https://www.kostrjanc.de/business"
    //                             className={classes.a}>
    //                             link.
    //                         </a>{" "}
    //                         Falls Sie noch Fragen waben, können Sie uns eine
    //                         E-Mail an{" "}
    //                         <a
    //                             href="mailto:kostrjanc@gmail.com"
    //                             className={classes.a}>
    //                             kostrjanc@gmail.com
    //                         </a>{" "}
    //                         schicken.
    //                     </p>
    //                 )}
    //             </p>
    //         </div>
    //     ),
    // },
    {
        title: "P: Ja sym so njesprawnje banował. Što něk?",
        title_de: "F: Ich wurde ungerecht von kostrjanc gebannt. Was nun?",
        answer: (
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {getCurrentLang() === "sb"
                        ? "Jeli sy so njesprawny na kostrjanc banował, wužiwaj prošu naš formular. Tutón namakaš deleka. Naš team potom rozsudźi hač je twój ban woprawnjeny."
                        : "Falls du dich ungerecht auf kostrjanc gebannt hast, benutze bitte unser Formular. Dieses findest du unten. Unser Team entscheidet dann ob dein Bann gerechfertigt ist."}
                </p>
            </div>
        ),
    },
    {
        title: "P: Kak móžu moje daty pola kostrjanc widźeć?",
        title_de: "F: Wie kann ich meine Daten auf kostrjanc einsehen?",
        answer: (
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {getCurrentLang() === "sb" ? (
                        <p>
                            Hdyž chceš wědźeć, kotre daty my wo tebi mamy,
                            móžeće w kostrjanc app w zastajenjach, sej twoje
                            daty wobhladać.
                        </p>
                    ) : (
                        <p>
                            Wenn du wissen willst, welche Daten wir über dich
                            haben, kannst du im der kostrjanc App in den
                            Einstellungen dir deine Daten ansehen.
                        </p>
                    )}
                </p>
            </div>
        ),
    },
    {
        title: "P: Něchtó je mój account hakował. Što dyrbju činić?",
        title_de: "F: Jemand hat mein Account gehackt. Was soll ich tun?",
        answer: (
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {getCurrentLang() === "sb"
                        ? "Jeli je tebje něchtó hackował, njeje to žadyn wulki problem. Wužiwaj cyle jednore formular, tutón namakaš deleka."
                        : "Falls dich jemand gehackt hat, ist das kein großes Problem. Benutze ganz einfache das Formular, dieses findest du unten."}
                </p>
            </div>
        ),
    },
    {
        title: "P: Sy admin abo werifikowana wosoba?",
        title_de: "F: Du bist ein Admin oder eine verifizierte Person?",
        answer: (
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {getCurrentLang() === "sb"
                        ? "Potom wužiwaj dashboard."
                        : "Dann verwende unser Dashboard."}
                </p>
                <Button
                    styles={"mt-2"}
                    text="Dashboard"
                    onClick={() =>
                        window.open("https://dashboard.kostrjanc.de")
                    }
                />
            </div>
        ),
    },
    {
        title: "P: Pytaš naš impresum?",
        title_de: "F: Suchst du unser Impressum?",
        answer: (
            <div className={classes.container}>
                <p className={classes.st}>
                    {getCurrentLang() === "sb" ? "W:" : "A:"}
                </p>
                <p className={classes.p}>
                    {getCurrentLang() === "sb" ? (
                        <p>Sćěhuj linkej, zo na naš impresum přińdźeš:</p>
                    ) : (
                        "Folgen sie dem Link, um unser Impressum zu finden:"
                    )}
                </p>
                <Button
                    styles="mt-2"
                    text={getCurrentLang() === "sb" ? "Impresum" : "Impressum"}
                    to="/impresum"
                    link
                />
            </div>
        ),
    },
];
