import React, { useEffect, useState } from 'react';

import styles from "../style";

import AboutNavbar from '../components/_aboutkostrjanc/AboutNavbar';
import { Footer } from "../components";

import { getCurrentLang } from '../constants';

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

                <Footer />
            </div>
        </div>
    );
}

export default AboutKostrjanc;
