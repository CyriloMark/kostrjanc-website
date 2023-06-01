import { useEffect, useState } from "react";

import styles from "../style";

import { apple, arrow, google, logo } from "../assets/index";

import Footer from "../components/Footer";
import Install from "../components/_start/Install";
import { star } from "../assets/index";
import { Link } from "react-router-dom";

export default function Beta() {
    useEffect(() => {
        document.title = "kostrjanc - Beta";
    }, []);

    return (
        <div
            className={`bg-blue-gradient ${styles.flexCenterVert} flex-col w-full ${styles.paddingX}`}>
            <div className={`min-h-screen w-full py-5 flex flex-col`}>
                <nav
                    className={`h-12 w-full flex-row flex justify-start items-center`}>
                    <a className="w-[32px] h-[32px] justify-center items-center">
                        <img
                            src={logo}
                            alt="kostrjanc logo"
                            className="w-full cursor-pointer hover:rotate-180 hover:scale-110 transition ease-in-out duration-500"
                        />
                    </a>
                    <a
                        className={`cursor-pointer ml-10`}
                        href="mailto:kostrjanc@gmail.com">
                        <p className={`text-lg font-bold text-[#CCE6FF]`}>
                            Feedback
                        </p>
                    </a>
                    {/* <a className={`cursor-pointer ml-10`}>
                        <p className={`text-lg font-bold text-[#CCE6FF]`}>
                            Info
                        </p>
                    </a> */}
                </nav>

                {/* Hero */}
                <div className="w-full justify-center flex flex-col">
                    <div className="flex flex-row items-center justify-center mt-[20vh]">
                        <span className="aspect-square absolute h-[25%] ">
                            <img
                                src={logo}
                                alt="kostrjanc logo"
                                className="w-full"
                            />
                        </span>
                        <h1
                            className={`font-barlow font-bold drop-shadow-lg xs:text-[124px] text-[72px] scale-x-150 mb-5 text-[#cce6ff]`}>
                            BETA
                        </h1>
                    </div>

                    <div className="flex flex-col items-center mt-[10vh]">
                        <h2
                            className={`font-roboto_mono font-normal xs:text-[20px] text-[16px] text-[#cce6ff]`}>
                            Maš lóšt so wobdźělić?
                        </h2>
                        <h2
                            className={`font-roboto_mono font-normal xs:text-[20px] text-[16px] text-[#cce6ff]`}>
                            Potom přijeł so nětko!
                        </h2>
                    </div>

                    <div className="flex flex-col items-center mt-[5vh]">
                        <a
                            href="#join"
                            className="flex flex-row items-center justify-center px-5 py-4 rounded-3xl button-gradient-gradient cursor-pointer">
                            <span className="font-barlow font-normal xs:text-[20px] text-[16px] text-[#cce6ff]">
                                Ja sym pódla!
                            </span>
                            <img
                                src={arrow}
                                alt="Ja sym pódla"
                                className="w-[24px] aspect-square ml-5"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <section
                className={`min-h-screen w-full py-5 flex flex-col ${styles.boxWidth}`}
                id="join">
                <div id="join" className="flex flex-1 flex-col">
                    <h1 className="font-barlow font-bold xs:text-[40px] text-[30px] text-[#cce6ff]">
                        So za beta přizjewić!
                    </h1>
                    <p className="font-barlow font-normal xs:text-[20px] text-[16px] text-[#cce6ff] mt-2">
                        Maš Android šmóratko a maš lóšt w běhu natwara wot
                        kostrjanc nam pomhać? Potom napisaj nam mailku na{" "}
                        <a
                            href="mailto:kostrjanc@gmail.com"
                            className="text-gradient">
                            kostrjanc@gmail.com
                        </a>
                        , hdźež nam twoju mailku napisaš, kiž w Google Play
                        Storje wužiwaš.
                    </p>
                    <p className="font-barlow font-normal xs:text-[20px] text-[16px] text-[#cce6ff]">
                        Wšitcy, kiž maja iOS šmóratko dyrbja hišće dleši čas
                        čakać. Beta test za wšitkich so hižo planuje, njeje ale
                        hišće móžny. Přińdźe prošu pozdźišo hišće jónu!
                    </p>
                </div>

                <div id="install" className={`flex-1 flex-col mt-5`}>
                    <h1 className="font-barlow font-bold xs:text-[40px] text-[30px] text-[#cce6ff]">
                        Sym ja přiwzaty?
                    </h1>
                    <p className="font-barlow font-normal xs:text-[20px] text-[16px] text-[#cce6ff] mt-2">
                        Jeli zo njejsy hišće wotmołwu na naprašowanje dóstał,
                        potom njejsy hišće přiwzaty. Tak dołho, kaž njejsy
                        přiwzaty, njemóžeš sej tež kostrjanc Google Play Storje
                        instalować.
                    </p>
                </div>

                <div id="install" className={`flex flex-col mt-5`}>
                    <h1 className="font-barlow font-bold xs:text-[40px] text-[30px] text-[#cce6ff]">
                        Za što tebje trjebamy?
                    </h1>
                    <p className="font-barlow font-normal xs:text-[20px] text-[16px] text-[#cce6ff] mt-2">
                        Naš beta test měri so tučasnje hłownje na to, zo
                        testujemy, kak a hač kostrjanc na wšitkich modelach
                        prawje funguje. Wězo su tučasnje hišće dosć zmylkow w
                        aplikaciji. My dale tež prosymy, zo sposrědkuješ tež ty
                        nam twój feedback za kostrjanc.
                    </p>
                    <div className="flex flex-col items-start mt-5">
                        <a
                            href="mailto:kostrjanc@gmail.com"
                            className="flex flex-row items-center justify-center px-4 py-4 rounded-3xl button-gradient-gradient cursor-pointer">
                            <span className="font-barlow font-normal xs:text-[20px] text-[16px] text-[#cce6ff]">
                                Feedback
                            </span>
                            <img
                                src={star}
                                alt="Ja sym pódla"
                                className="w-[24px] aspect-square ml-5"
                            />
                        </a>
                        {/* <Link
                            to={"/feedback"}
                            className="flex flex-row items-center justify-center px-4 py-4 rounded-3xl button-gradient-gradient cursor-pointer">
                            <span className="font-barlow font-normal xs:text-[20px] text-[16px] text-[#cce6ff]">
                                Feedback
                            </span>
                            <img
                                src={star}
                                alt="Ja sym pódla"
                                className="w-[24px] aspect-square ml-5"
                            />
                        </Link> */}
                    </div>
                </div>

                <div id="install" className={`flex-1 flex-col mt-5`}>
                    <h1 className="font-barlow font-bold xs:text-[40px] text-[30px] text-[#cce6ff]">
                        Sy přiwzaty? Potom instaluj sej kostrjanc:
                    </h1>
                    <div className="flex flex-row flex-wrap mt-2">
                        <a href="https://play.google.com/store/apps/details?id=de.zsl.kostrjanc">
                            <img
                                src={google}
                                alt="google_play"
                                className="w-[172px] h-[63px] object-contain mr-5 cursor-pointer"
                            />
                        </a>
                        {/* <img
                            src={apple}
                            alt="apple_store"
                            className="w-[128px] h-[42px] object-contain cursor-pointer"
                        /> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
