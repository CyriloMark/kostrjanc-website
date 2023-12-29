import styles from "../style";

import { logo } from "../assets";

import { footerLinks, getCurrentLang } from "../constants";

const Footer = () => {
    return (
        <section
            id="footer"
            className={`${styles.flexCenter} ${styles.boxWidth} z-[50] sm:pt-16 pt-6 mb-5 flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
                <div className="flex md:mr-10 self-center md:self-start">
                    <img
                        src={logo}
                        alt="kostrjanc logo"
                        className={`w-[64px] h-[64px] object-contain`}
                    />
                </div>

                <div className="flex flex-row flex-wrap md:mt-0 mt-5">
                    {footerLinks.map(footerlink => (
                        <div
                            key={footerlink.title}
                            className={`flex flex-col my-4 mr-10`}>
                            <h4 className="font-barlow font-medium text-[18px] leading-[27px] text-white">
                                {getCurrentLang() === "sb"
                                    ? footerlink.title
                                    : footerlink.title_de}
                            </h4>
                            <ul className="list-none mt-5">
                                {footerlink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-barlow font-normal text-[18px] leading-[24px] text-dimWhite cursor-pointer ${
                                            index !==
                                            footerlink.links.length - 1
                                                ? "mb-2"
                                                : "mb-0"
                                        }`}>
                                        <a href={link.link}>
                                            {getCurrentLang() === "sb"
                                                ? link.name
                                                : link.name_de}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mt-10">
                <p
                    className={`ont-normal text-dimWhite text-[16px] leading-[20px] font-roboto_mono text-center`}>
                    &copy; 2022-2024 | All Rights Reserved | Produced by Cyrill
                    Mark and Korla Baier
                </p>
            </div>
        </section>
    );
};

export default Footer;
