import { useCountdown } from "../../hooks/Countdown";

import { getCurrentLang } from "../../constants";

import { apple, google } from "../../assets";
import styles from "../../style";

const Install = ({ releaseDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(releaseDate);

    return (
        <section
            id="install"
            className={`flex-1 ${styles.flexStart} flex-col ${styles.boxWidth} ${styles.paddingY}`}>
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
                className={`flex md:flex-row flex-col ${styles.marginY} items-center md:self-start self-center`}>
                <div
                    className={`flex flex-row items-center justify-center py-2 px-4 bg-discount-gradient rounded-[10px]`}>
                    {getCurrentLang() === "sb" ? (
                        <p className={`${styles.paragraph}`}>
                            Spočatk w{" "}
                            <span className="text-gradient font-semibold">
                                {days +
                                    " : " +
                                    hours +
                                    " : " +
                                    minutes +
                                    " : " +
                                    seconds}
                            </span>
                        </p>
                    ) : (
                        <p className={`${styles.paragraph}`}>
                            <span className="text-gradient font-semibold">
                                {days +
                                    " : " +
                                    hours +
                                    " : " +
                                    minutes +
                                    " : " +
                                    seconds}
                            </span>
                        </p>
                    )}
                </div>
                <div className="flex flex-row md:ml-5 md:mt-0 mt-5">
                    <img
                        onClick={() =>
                            window.open(
                                "https://play.google.com/store/apps/details?id=de.zsl.kostrjanc"
                            )
                        }
                        src={google}
                        alt="google_play"
                        className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
                    />
                    <img
                        onClick={() =>
                            window.open(
                                "https://apps.apple.com/us/app/kostrjanc/id6463418677"
                            )
                        }
                        src={apple}
                        alt="apple_store"
                        className="w-[128px] h-[42px] object-contain cursor-pointer"
                    />
                </div>
            </div>
        </section>
    );
};

export default Install;
