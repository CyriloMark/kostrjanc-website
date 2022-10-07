import { useCountdown } from "../../hooks/Countdown";

import { getCurrentLang } from "../../constants";

import { apple, google } from "../../assets";
import styles from "../../style";

const Install = ({ releaseDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(releaseDate);

  return (
    <section
      id="install"
      className={`flex-1 ${styles.flexStart} flex-col ${styles.boxWidth} ${styles.paddingY}`}
    >
      {getCurrentLang() === "sb" ? (
        <h2 className={styles.heading2}>
          Instaluj sej dźensa hišće{" "}
          <span className="text-gradient">kostrjanc</span>!
        </h2>
      ) : (
        <h2 className={styles.heading2}>
          Installiere dir heute noch{" "}
          <span className="text-gradient">kostrjanc</span>!
        </h2>
      )}
      <div
        className={`flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-[10px] ${styles.marginY}`}
      >
        {getCurrentLang() === "sb" ? (
          <p className={`${styles.paragraph}`}>
            Spočatk w <br className="xs:hidden block" />
            <span className="text-gradient font-semibold">
              {days + " : " + hours + " : " + minutes + " : " + seconds}
            </span>
          </p>
        ) : (
          <p className={`${styles.paragraph}`}>
            Beginn in <br className="xs:hidden block" />
            <span className="text-gradient font-semibold">
              {days + " : " + hours + " : " + minutes + " : " + seconds}
            </span>
          </p>
        )}
      </div>
      <div className="flex flex-row flex-wrap">
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Install;
