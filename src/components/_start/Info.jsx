import styles from "../../style";

import logo from "../../assets/_start/_info_Kostrjanc_Logo_Skew2.png";

import { getCurrentLang, getPersistantAttributes } from "../../constants";

import { Link } from "react-router-dom";

import { Button } from "../";

const Info = () => (
  <section
    id="info"
    className={`${styles.boxWidth} flex-row ${styles.flexCenterVert} ${styles.paddingY}`}
  >
    <div
      className={`md:flex hidden flex-1 ${styles.flexCenter} md:mr-20 ml-0 md:mt-0 mt-10 relative flex-col`}
    >
      <img src={logo} alt="logo" className="z-[2] w-[75%] h-[75%]" />
      <div className="absolute z-[1] w-[75%] h-[75%] rounded-full blue__gradient" />
      <div className="absolute z-[0] right-1/4  top-1 w-[25%] h-[25%] rounded-full pink__gradient" />
    </div>
    <div className={`flex-1 ${styles.flexStart} flex-col`}>
      {getCurrentLang() === "sb" ? (
        <h2 className={styles.heading2}>
          Što je <span className="text-gradient">kostrjanc</span>?
        </h2>
      ) : (
        <h2 className={styles.heading2}>
          Was ist <span className="text-gradient">kostrjanc</span>?
        </h2>
      )}
      {getCurrentLang() === "sb" ? (
        <p className={`${styles.paragraph} max-w-[720px] ${styles.marginY}`}>
          Serbska social media platforma{" "}
          <span className="text-gradient">kostrjanc</span> je projekt Cyrila
          Marka a Korle Baiera. Zaměr wot{" "}
          <span className="text-gradient">kostrjanc</span> je tworjenje
          serbskeho digitalneho ruma. Z{" "}
          <span className="text-gradient">kostrjanc</span> móža so wobrazy a
          ewenty we wobrawdźitym času mjez wužiwarjemi dźělić.{" "}
          <span className="text-gradient">Kostrjanc</span> je platforma, myslena
          za młody a starši serbski lud, zo by so po digitalnym, ryzy serbskim
          puću zabawjało. Jeli chceš nas dale zeznać sćěhuj linkej:{" "}
          <Link to="/about">
            <span className="text-gradient">Štó my smy</span>
          </Link>
        </p>
      ) : (
        <p className={`${styles.paragraph} max-w-[720px] mt-5`}>
          Sorbische Sozial Media Plattform{" "}
          <span className="text-gradient">kostrjanc</span> ist ein Projekt von
          Cyril Mark und Korla Baier. Das Ziel von{" "}
          <span className="text-gradient">kostrjanc</span> ist das Bilden eines
          sorbischen digitalen Raum. Mit{" "}
          <span className="text-gradient">kostrjanc</span> kann man Bilder und
          Events in echtzeit zwischen Benutzern teilen.{" "}
          <span className="text-gradient">Kostrjanc</span> ist eine Plattform,
          gemacht für das junge und ältere sorbische Volk, damit man auf
          digitalem, rein sorbischem Weg sich austauschen kann. Falls du mehr
          erfahren möchtest, dann folge dem Link:{" "}
          <Link to={"/about?" + getPersistantAttributes()}>
            <span className="text-gradient">Wer wir sind</span>
          </Link>
        </p>
      )}

      <a href="/#install">
        <Button
          text={getCurrentLang() === "sb" ? "Instalować" : "Installieren"}
        />
      </a>
    </div>
  </section>
);

export default Info;
