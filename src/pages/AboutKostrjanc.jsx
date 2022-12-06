import React, { useEffect, useState } from 'react';

import styles from "../style";

import AboutNavbar from '../components/_aboutkostrjanc/AboutNavbar';
import { Footer } from "../components";

import { getCurrentLang } from '../constants';

import { navbar, interactonBar, mainHeader, landing, add, profile, search } from "../assets/_aboutkostrjanc2/index";

const AboutKostrjanc = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title =
            getCurrentLang() === "sb"
                ? "kostrjanc - Što je kostrjanc"
                : "kostrjanc - Was ist kostrjanc";
    }, []);

    return (
        <div className={`bg-primary ${styles.flexCenterVert} flex flex-col w-full`} >
            <AboutNavbar />

            <div className={`${styles.paddingX} w-full flex-col ${styles.flexCenterVert}`} >
                
                {/* Start */}
                <div className=''>
                    <div className={`${styles.paddingY} w-full`}>
                        <h1 className={`flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] text-center`} >
                            {getCurrentLang() === "sb"
                                ? "Što je kostrjanc?"
                                : "Was ist kostrjanc?"}
                        </h1>
                    </div>
                </div>

                <section id="general" className={`${styles.paddingY} flex flex-col items-center w-full`}>
                    <a href="#settings">
                        <img src={mainHeader} className="w-[240px] cursor-pointer" />
                    </a>
                    <p className={`${styles.marginY} ${styles.paragraph} w-full max-w-[360px] text-white`}>
                        Velit sunt magna ex dolor. Eu cillum ullamco ea esse cupidatat duis id laboris consectetur ea mollit non exercitation labore. Sunt aliquip ullamco esse sunt consequat esse nostrud in pariatur culpa aliqua commodo enim.
                        Nulla id consectetur laboris in eiusmod excepteur adipisicing eu Lorem laborum. Fugiat enim eiusmod culpa esse laboris est. Qui id duis voluptate sit non deserunt commodo magna eu velit mollit. Mollit consequat incididunt incididunt excepteur.
                        Qui cupidatat enim quis magna pariatur sit ullamco aliquip id. Nostrud laboris fugiat pariatur nostrud eiusmod. Proident do esse labore aliquip eiusmod aliqua aliquip ut laborum.
                    </p>
                    <img src={navbar} className="w-[240px] cursor-pointer" />

                    <div className={`${styles.paddingX} ${styles.marginY}`}>

                        <h2 className={`${styles.heading2} ${styles.boxWidth}`}>
                            {getCurrentLang() === "sb"
                                ? "Hlowna nawigacija prez kostrjanc"
                                : "Hauptnavigation durch kostrjanc"}
                        </h2>
                        
                        <div className={`w-full flex sm:flex-row flex-col sm:justify-between items-start flex-wrap mt-5`}>

                            <div className="min-w-[240px] max-w-[520px] flex flex-1 m-8 flex-col">
                                <div className="w-full relative flex">
                                    <img src={landing} className="w-full z-[10]" />
                                    <div className="absolute blue__gradient w-full h-full z-[1]"></div>
                                </div>
                                <div className="mt-5">
                                    <h2 className={`${styles.heading3}`} >{getCurrentLang() === "sb" ? "Landing-strona" : "Landing-Seite"}</h2>
                                    <p className={`${styles.paragraph} my-2`}>
                                        Consequat tempor officia exercitation cupidatat dolor. Sit in pariatur laborum consequat in commodo deserunt velit nostrud eu id
                                    </p>
                                    <div className={`${styles.heading3} text-gradient flex flex-col cursor-pointer`}>
                                        <a>{'> '}Post</a>
                                        <a>{'> '}Ewent</a>
                                    </div>
                                </div>
                            </div>

                            <div className="min-w-[240px] max-w-[520px] flex flex-1 m-8 flex-col">
                                <div className="w-full relative flex">
                                    <img src={search} className="w-full z-[10]" />
                                    <div className="absolute blue__gradient w-full h-full z-[1]"></div>
                                </div>
                                <div className="mt-5">
                                    <h2 className={`${styles.heading3}`} >{getCurrentLang() === "sb" ? "Wobsahi pytac" : "Inhalt durchsuchen"}</h2>
                                    <p className={`${styles.paragraph} my-2`}>
                                        Consequat tempor officia exercitation cupidatat dolor. Sit in pariatur laborum consequat in commodo deserunt velit nostrud eu id
                                    </p>
                                </div>
                            </div>

                            <div className="min-w-[240px] max-w-[520px] flex flex-1 m-8 flex-col">
                                <div className="w-full relative flex">
                                    <img src={add} className="w-full z-[10]" />
                                    <div className="absolute blue__gradient w-full h-full z-[1]"></div>
                                </div>
                                <div className="mt-5">
                                    <h2 className={`${styles.heading3}`} >{getCurrentLang() === "sb" ? "Nowy prinosk tworic" : "Neuen Beitrag erstellen"}</h2>
                                    <p className={`${styles.paragraph} my-2`}>
                                        Consequat tempor officia exercitation cupidatat dolor. Sit in pariatur laborum consequat in commodo deserunt velit nostrud eu id
                                    </p>
                                    <div className={`${styles.heading3} text-gradient flex flex-col cursor-pointer`}>
                                        <a>{'> '}Post</a>
                                        <a>{'> '}Ewent</a>
                                    </div>
                                </div>
                            </div>

                            <div className="min-w-[240px] max-w-[520px] flex flex-1 m-8 flex-col">
                                <div className="w-full relative flex">
                                    <img src={profile} className="w-full z-[10]" />
                                    <div className="absolute blue__gradient w-full h-full z-[1]"></div>
                                </div>
                                <div className="mt-5">
                                    <h2 className={`${styles.heading3}`} >{getCurrentLang() === "sb" ? "Strona konta" : "Accountseite"}</h2>
                                    <p className={`${styles.paragraph} my-2`}>
                                        Consequat tempor officia exercitation cupidatat dolor. Sit in pariatur laborum consequat in commodo deserunt velit nostrud eu id
                                    </p>
                                    <div className={`${styles.heading3} text-gradient flex flex-col cursor-pointer`}>
                                        <a>{getCurrentLang() === "sb" ? "> Konto" : "> Account"}</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

                <Footer />
            </div>
        </div>
    );
}

export default AboutKostrjanc;
