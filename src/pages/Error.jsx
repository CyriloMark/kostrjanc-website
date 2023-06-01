import { useEffect } from "react";

import styles from "../style";

import { getCurrentLang, getPersistantAttributes } from "../constants";

import _mobileIMG from "../assets/_error/_mobile.png";
import { help } from "../assets";
import logo from "../assets/_start/_info_Kostrjanc_Logo_Skew2.png";

import { Link } from "react-router-dom";

import { Footer } from "../components";

const Error = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title =
            getCurrentLang() === "sb" ? "kostrjanc - 404" : "kostrjanc - 404";
    }, []);

    let onLoad = () => {
        document
            .getElementById("mobile")
            .addEventListener("mouseover", function () {
                document
                    .getElementById("bg")
                    .classList.replace("mr-0", "-mr-[50%]");
                document.getElementById("bg").classList.remove("blur-sm");

                document
                    .getElementById("fg")
                    .classList.replace("ml-0", "-ml-[50%]");
                document.getElementById("fg").classList.remove("blur-sm");

                document
                    .getElementById("mobile")
                    .classList.replace("scale-100", "scale-110");
                document.getElementById("mobile").classList.add("blur-sm");
            });
        document
            .getElementById("mobile")
            .addEventListener("mouseout", function () {
                document
                    .getElementById("bg")
                    .classList.replace("-mr-[50%]", "mr-0");
                document.getElementById("bg").classList.add("blur-sm");

                document
                    .getElementById("fg")
                    .classList.replace("-ml-[50%]", "ml-0");
                document.getElementById("fg").classList.add("blur-sm");

                document
                    .getElementById("mobile")
                    .classList.replace("scale-110", "scale-100");
                document.getElementById("mobile").classList.remove("blur-sm");
            });
    };

    return (
        <div
            onLoad={onLoad}
            className={`bg-primary overflow-hidden flex-col flex w-full relative ${styles.flexCenterVert}`}>
            <div className={`${styles.paddingY} w-full`}>
                <h1
                    className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`}>
                    {getCurrentLang() === "sb"
                        ? "404 - Tu njejsy na prawej stronje"
                        : "404 - Hier bist du falsch"}
                </h1>
            </div>

            <div
                className={`${styles.paddingX} ${styles.boxWidth} flex-col relative z-[5]`}>
                <div
                    className={`${styles.boxWidth} ${styles.flexCenter} relative ${styles.marginY} hidden sm:flex `}>
                    <img
                        id="bg"
                        src={help}
                        alt="img mobile"
                        className="absolute w-[15%] mr-0 aspect-square transition-all duration-500 blur-sm z-[3]"
                    />
                    <img
                        id="mobile"
                        src={_mobileIMG}
                        alt="img mobile"
                        className="w-[20%] h-[20%] scale-100 transition-all duration-500 z-[4]"
                    />
                    <img
                        id="fg"
                        src={logo}
                        alt="img mobile"
                        className="absolute w-[25%] ml-0 aspect-square transition-all duration-500 blur-sm z-[5]"
                    />

                    <div className="absolute z-[0] w-[20%] h-[15%] right-12 top-5 red__gradient" />
                    <div className="absolute z-[1] w-[50%] h-[25%] rounded-full blue__gradient" />
                    <div className="absolute z-[0] w-[20%] h-[20%] right-25 top-20 white__gradient" />
                </div>

                <div className={`${styles.boxWidth} ${styles.paddingY} `}>
                    {getCurrentLang() === "sb" ? (
                        <div
                            className={`${styles.paragraph} flex flex-col max-w-[720px]`}>
                            <p>Na tutej stronje njebych směł być!</p>
                            <p>
                                Sćehuj linkej, zo bych zaso na hłowne strony
                                přišoł:
                            </p>
                            <Link to={"/?" + getPersistantAttributes()}>
                                <span
                                    className={`${styles.heading2} text-gradient`}>
                                    Start
                                </span>
                            </Link>
                        </div>
                    ) : (
                        <div
                            className={`${styles.paragraph} flex flex-col max-w-[720px]`}>
                            <p>Auf dieser Seite solltest du nicht sein!</p>
                            <p>
                                Folge dem Link um wieder auf die Hauptseiten zu
                                landen:
                            </p>
                            <Link to={"/?" + getPersistantAttributes()}>
                                <span
                                    className={`${styles.heading2} text-gradient `}>
                                    Start
                                </span>
                            </Link>
                        </div>
                    )}
                </div>

                <Footer />
            </div>

            <div className="absolute z-[0] w-[20%] h-[50%] blue__gradient rounded-full left-5 top-[20%]" />
            <div className="absolute z-[1] w-[10%] h-[10%] red__gradient left-10 top-[30%]" />
            <div className="absolute z-[0] w-[40%] h-[10%] opacity-20 rotate-45 white__gradient rounded-full -right-[10%] bottom-[20%]" />
        </div>
    );
};

export default Error;
