import { useState, useEffect } from 'react';

import styles from '../../style';

import mobile from "../../assets/_aboutkostrjanc/mobile outline.png";

import landing from "../../assets/_aboutkostrjanc/landing-inapp.png";

export default function PostEventProfile() {

    const [fix, setFix] = useState(false);

    useEffect(() => {        

        const handleScroll = () => {

            const postEventProfile = document.getElementById("postEventProfile").getBoundingClientRect();
            const bodyRect = document.body.getBoundingClientRect();

            //#region mobile outline
            const img = document.getElementById("img");
            if ((postEventProfile.top <= 0) && (postEventProfile.bottom >= window.innerHeight)) {
                setFix(true);
            }
            else if (postEventProfile.bottom < window.innerHeight) {
                if (img.classList.contains("top-0")) img.classList.remove("top-0");
                img.classList.add("bottom-0");
                setFix(false);
            }
            else {
                if (img.classList.contains("bottom-0")) img.classList.remove("bottom-0");
                img.classList.add("top-0");
                setFix(false);
            }
            //#endregion

        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="postEventProfile" className={`${styles.boxWidth} ${styles.flexCenter} flex-col relative `} >

            <img id="img" src={mobile} className={`h-[100vh] z-[50] top-0 ${fix ? "fixed" : "absolute"}`} />

            <div className='w-full h-[100vh]' />

            <section id="post" className={`relative w-full ${styles.flexCenter}`}>
                    
            </section>
            <section
                id="event"
            ></section>

            <div className='w-full h-[100vh]' />
        </div>
    )
}
