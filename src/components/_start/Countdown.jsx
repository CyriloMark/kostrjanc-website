import { getCurrentLang } from "../../constants";

import { useCountdown } from "../../hooks/Countdown";

import styles from "../../style";

const Countdown = ({ releaseDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(releaseDate);

    return (
        <section
            id="countdown"
            className={`${styles.boxWidth} sm:py-32 py-20 ${styles.flexCenter} flex-col`}>
            <h2
                className={`${styles.heading2} text-center md:mb-10 mb-5 z-[5]`}>
                {getCurrentLang() === "sb"
                    ? "Hdy je spočatk?"
                    : "Bist du bereit?"}
            </h2>
            <h1 className="z-[5] flex-row flex-1 font-roboto_mono font-semibold md:text-[75px] text-[32px] text-center text-white ss:leading-[100.8px] leading-[60px]">
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
};

export default Countdown;
