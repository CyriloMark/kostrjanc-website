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
  {
    title: "P: Chcu na kostrjanc wabjenje šaltować",
    title_de: "F: Ich möchte auf kostrjanc Werbung schalten",
    answer: (
      <div className={classes.container}>
        <p className={classes.st}>{getCurrentLang() === "sb" ? "W:" : "A:"}</p>
        <p className={`${classes.p} mb-5`}>
          {getCurrentLang() === "sb"
            ? "My so za waš zajim za kostrjanc wabjenje jara wjeselimy, dokelž nam wabjenje pomha projekt kostrjanc dale běžeć dać. Hdyž wy na kostrjanc wabiće njepomhaće jenož nam, ale móžeće z tym nowych kupcow namakać."
            : "Wir freuen uns über euer Interesse an kostrjanc Werbung sehr, weil uns Werbung hilft das Projekt kostrjanc weiter laufen zu lassen. Wenn ihr auf kostrjanc Werbung šaltet hilft ihr nicht nur uns, sondern könnt damit neue Kunden gewinnen."}
        </p>
        <p className={classes.st}>
          {getCurrentLang() === "sb"
            ? "Kak funguje wabjenje na kostrjanc?"
            : "Wie funktioniert Werbung auf kostrjanc?"}
        </p>
        <p className={`${classes.p} mb-5`}>
          {getCurrentLang() === "sb"
            ? "Hdyž wužiwarjo kostrjanc wužiwaja, woni druhdy jedne wabjenje widźa. Tute je připadne. Hdyž so jedne wabjenje pokaza płaći to 5 centow."
            : "Wenn Nutzer kostrjanc verwenden, sehen sie manchmal Werbung. Diese Werbung ist zufällig. Wenn sich eine Werbung anzeigt kostet das 5 Cent."}
        </p>
        <p className={classes.st}>
          {getCurrentLang() === "sb"
            ? "Maće zajim na kostrjanc wabjenju?"
            : "Hab Ihr Interesse am Schalten von Werbung in kostrjanc?"}
        </p>
        <p className={classes.p}>
          {getCurrentLang() === "sb" ? (
            <p>
              Hdyž chceće wabjenje na kostrjanc šaltować, trjebaće za to
              kostrjanc Buisness program. Tutón namakaće pod tutóm{" "}
              <a href="https://www.kostrjanc.de/business" className={classes.a}>
                linku.
              </a>{" "}
              Jeli maće hišće prašenja móžeć nam mailku na{" "}
              <a href="mailto:info@kostrjanc.de" className={classes.a}>
                info@kostrjanc.de
              </a>{" "}
              pósłać.
            </p>
          ) : (
            <p>
              Wenn Sie Werbung auf kostrjanc schalten möchten, brauchen Sie
              dafür das kostrjanc Buisness Programm. Dieses finden Sie unter
              diesem{" "}
              <a href="https://www.kostrjanc.de/business" className={classes.a}>
                link.
              </a>{" "}
              Falls Sie noch Fragen waben, können sie uns eine E-Mail an{" "}
              <a href="mailto:info@kostrjanc.de" className={classes.a}>
                info@kostrjanc.de
              </a>{" "}
              schicken.
            </p>
          )}
        </p>
      </div>
    ),
  },
  {
    title: "P: Ja sym so njesprawnje banował. Što něk?",
    title_de: "F: Ich wurde ungerecht von kostrjanc gebannt. Was nun?",
    answer: (
      <div className={classes.container}>
        <p className={classes.st}>{getCurrentLang() === "sb" ? "W:" : "A:"}</p>
        <p className={classes.p}>
          {getCurrentLang() === "sb" ? (
            <p>
              Hdyž sy so njesprawne banował pisaj prošu mailku na{" "}
              <a className={classes.a} href="mailto:info@kostrjanc.de">
                info@kostrjanc.de
              </a>
              , do mailki pisaj prošu twoju wužiwarsku id (w zastajenjach) a
              čehodla so njesprawne banowany čuješ. Potom naš team rozsudźi hač
              bě twój ban wosprawnjeny.
            </p>
          ) : (
            <p>
              Wenn du dich ungerecht gebankt wurdest, schreib uns bitte eine
              E-Mail an{" "}
              <a className={classes.a} href="mailto:info@kostrjanc.de">
                info@kostrjanc.de
              </a>
              .In die E-Mail schreib bitte deinen Benutzer-Id (in den
              Einstellungen), und warum Sie sich ungerecht gebannt fühlen. Dann
              entscheidet unser Team ob dein Bann gerechtfertigt war.
            </p>
          )}
        </p>
      </div>
    ),
  },
  {
    title: "P: Kak móžu moje daty pola kostrjanc widźeć?",
    title_de: "F: Wie kann ich meine Daten auf kostrjanc einsehen?",
    answer: (
      <div className={classes.container}>
        <p className={classes.st}>{getCurrentLang() === "sb" ? "W:" : "A:"}</p>
        <p className={classes.p}>
          {getCurrentLang() === "sb" ? (
            <p>
              Hdyž chceš wědźeć, kotre daty my wo tebi mamy, móžeće w kostrjanc
              app w zastajenjach, sej waše daty wobhladać.
            </p>
          ) : (
            <p>
              Wenn du wissen willst, welche Daten wir über dich haben, könnt ihr
              im der kostrjanc App in den Einstellungen, euch ihre Daten
              ansehen.
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
        <p className={classes.st}>{getCurrentLang() === "sb" ? "W:" : "A:"}</p>
        <p className={classes.p}>
          {getCurrentLang() === "sb" ? (
            <p>
              Jeli je tebje něchtó hakował njeje to žadyn wulki problem, my
              móžemy twoje konto wróćo sadźić. Pisaj nam prošu jednu mailku na{" "}
              <a className={classes.a} href="mailto:info@kostrjanc.de">
                info@kostrjanc.de
              </a>
              . W tutej mailce pisaj nam wužiwarsku ID twojeho konta (w
              zastajenjach). Potom dopokazaj nam zo konto tebi słuša. Potom
              pisaj nam prošu nowu mailku a hesło za konto. Naš team sej potom
              mailku wobhlada a potom rozsudźi hać my twój konto wróćo
              zasadźimy.
            </p>
          ) : (
            <p>
              Falls dich jemand gehackt hat ist das kein großes Problem, wir
              können dein Konto zurücksetzen. Schreib uns bitte eine E-Mail an{" "}
              <a className={classes.a} href="mailto:info@kostrjanc.de">
                info@kostrjanc.de
              </a>
              . In dieser E-Mail schreib uns die Benutzer-ID (in den
              Einstellungen) deines Kontos. Dann beweise uns dass, das Konto dir
              gehört. Dann schreib uns bitte deine neue E-Mail und Passwort für
              das Konto. Unser Team schaut sich dann die Mail an und dann
              entscheidet ob wir dein Konto zurücksetzen.
            </p>
          )}
        </p>
      </div>
    ),
  },
  {
    title: "P: Sy admin abo werifikowana wosoba?",
    title_de: "F: Du bist ein Admin oder eine verifizierte Person?",
    answer: (
      <div className={classes.container}>
        <p className={classes.st}>{getCurrentLang() === "sb" ? "W:" : "A:"}</p>
        <p className={classes.p}>
          {getCurrentLang() === "sb" ? (
            <p>Potom wužiwaj dashboard.</p>
          ) : (
            "Dann verwende unser Dashboard."
          )}
        </p>
      </div>
    ),
  },
  {
    title: "P: Pytaš naš impresum?",
    title_de: "F: Suchst du unser Impressum?",
    answer: (
      <div className={classes.container}>
        <p className={classes.st}>{getCurrentLang() === "sb" ? "W:" : "A:"}</p>
        <p className={classes.p}>
          {getCurrentLang() === "sb" ? (
            <p>Sćěhuj linkej, zo na naš impresum přińdźeš:</p>
          ) : (
            "Folgen sie dem Link, um unser Impressum zu finden:"
          )}
        </p>
        <Button
          styles="mt-5"
          text={getCurrentLang() === "sb" ? "Impresum" : "Impressum"}
          to="/impresum"
          link
        />
      </div>
    ),
  },
];
