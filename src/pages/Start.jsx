import { useEffect } from "react";

import styles from "../style";

import Hero from "../components/_start/Hero";
import Stats from "../components/_start/Stats";
import Info from "../components/_start/Info";
import Install from "../components/_start/Install";
import Countdown from "../components/_start/Countdown";
import Business from "../components/_start/Business";
import Help from "../components/_start/Help";
import Footer from "../components/Footer";

const Start = () => {

    useEffect(() => {
        document.title = "kostrjanc - Start";
    }, []);

    return (
        <div onLoad={() => window.scrollTo(0, 0)} className={`bg-primary ${styles.flexCenterVert} flex-col w-full`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenterVert} w-full flex-col`}>
                <Stats />
                <Info />
                <Install />
                <Business />
                <Countdown />
                <Help />
                <Footer />
            </div>
        </div>
    );
}

export default Start;
