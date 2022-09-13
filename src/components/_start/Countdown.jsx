import { getCurrentLang } from "../../constants";

import { useCountdown } from "../../hooks/Countdown";
import { releaseDate } from "../../constants";

import styles from "../../style";

const Countdown = () => {

    const [days, hours, minutes, seconds] = useCountdown(releaseDate);

    return (
        <section id="countdown" className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter} flex-col`}>
            <h2 className={`${styles.heading2} text-center mb-5 z-[5]`}>
                {
                    getCurrentLang() === "sb" ?
                        "Sy ty přihotowany?" :
                        "Bist du bereit?"
                }
            </h2>
            <h1 className="z-[5] flex-row flex-1 font-barlow font-semibold md:text-[108px] text-[72px] text-center text-white ss:leading-[100.8px] leading-[75px]">
                <span className="text-gradient">{days}</span>
                {" : "}
                <span className="text-gradient">{hours}</span>
                {" : "}
                <span className="text-gradient">{minutes}</span>
                {" : "}
                <span className="text-gradient">{seconds}</span>
            </h1>
        </section>
    );
}

export default Countdown;
