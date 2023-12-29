import styles from "../../style";

import hero_mobile from "../../assets/_start/_hero_mobile.png";
import { getCurrentLang } from "../../constants";

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 px-5`}>
                <div className="flex flex-row items-center md:px-5 py-2 px-4 bg-discount-gradient rounded-[10px] mb-5">
                    <p className={`${styles.paragraph}`}>
                        {getCurrentLang() === "sb"
                            ? "1. Serbski Social Media"
                            : "1. Sorbisches Social Media"}
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[60px]">
                        {getCurrentLang() === "sb"
                            ? "My předstajimy:"
                            : "Wir stellen vor:"}{" "}
                        <br className="sm:block hidden" />
                        <span className="text-gradient">kostrjanc</span>
                    </h1>
                </div>
                <p
                    className={`${styles.paragraph} max-w-[720px] mt-5 md:mt-10`}>
                    {getCurrentLang() === "sb"
                        ? "Cyril Mark a Korla Baier mějachu ideju, social media aplikaciju za serbski lud stworić. Hobby za programěrowanje a design aplikacijow mějachu hólcaj hižo. Tak stworištaj w běhu dweju lět aplikaciju a přidatne online-słužby."
                        : "Cyril Mark und Korla Baier hatten die Idee, eine Social Media Plattform für die Sorben zu entwickeln. Das Hobby Programmieren und Designen von Apps hatten die Jungs bereits. So erschufen die Beiden innerhalb von zwei Jahren die App und dazugehörige Online-Dienste."}
                </p>
            </div>
            <div
                className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative hidden md:flex`}>
                <img
                    src={hero_mobile}
                    alt="billing"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </div>
        </section>
    );
};

export default Hero;
