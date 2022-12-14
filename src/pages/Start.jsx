import { useEffect, useState } from "react";

import styles from "../style";

import Hero from "../components/_start/Hero";
import Info from "../components/_start/Info";
import Install from "../components/_start/Install";
import Countdown from "../components/_start/Countdown";
import Help from "../components/_start/Help";
import Footer from "../components/Footer";

const Start = () => {
  const [release, setRelease] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "kostrjanc - Start";
    fetch(
      "https://kostrjanc-default-rtdb.europe-west1.firebasedatabase.app/release_date.json"
    ).then((res) => res.json().then((val) => {
      console.log(val)
      setRelease(val);
    }));
  }, []);

  return (
    <div className={`bg-primary ${styles.flexCenterVert} flex-col w-full`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexCenterVert} w-full flex-col`}
      >
        <Info />
        {
          release !== "" ?
            <>  
              <Install releaseDate={release} />
              <Countdown releaseDate={release} />
            </> : null
        }
        <Help />
        <Footer />
      </div>
    </div>
  );
};

export default Start;
