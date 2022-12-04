import { getCurrentLang } from "../../constants";

import { useCountdown } from "../../hooks/Countdown";

import styles from "../../style";

const Countdown = ({ releaseDate }) => {

  const [days, hours, minutes, seconds] = useCountdown(releaseDate);

  return (
    <section
      id="countdown"
      className={`${styles.boxWidth} sm:py-32 py-20 ${styles.flexCenter} flex-col`}
    >
      <h2 className={`${styles.heading2} text-center mb-5 z-[5]`}>
        {getCurrentLang() === "sb" ? "Sy ty přihotowany?" : "Bist du bereit?"}
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

      <div className="z-[0] absolute w-[50%] h-[20%] blue__gradient rounded-full" />
      <div className="z-[1] absolute w-[25%] h-[5%] white__gradient rounded-full" />
    </section>
  );
};

export default Countdown;
