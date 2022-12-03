import { useState, useEffect } from "react";

import styles from "../../style";

import { aboutNavLinks, getCurrentLang, } from "../../constants";

export default function AboutNavbar() {

    const [fix, setFix] = useState(false);
    const [active, setActive] = useState("start");

    useEffect(() => {
        const handleScroll = () => {
            setFix(window.scrollY > 200);
            handleNavbar()
        };

        function handleNavbar() {
            let general = document.getElementById("general").getBoundingClientRect();
            let post = document.getElementById("post").getBoundingClientRect();
            let event = document.getElementById("event").getBoundingClientRect();
            let install = document.getElementById("install").getBoundingClientRect();
            let verify = document.getElementById("verify").getBoundingClientRect();

            if (general.bottom > 0) setActive("start")
            if (general.top <= 0) setActive("general");
            if (post.top <= 0) setActive("post");
            if (event.top <= 0) setActive("event");
            if (install.top <= 0) setActive("install");
            if (verify.top <= 0) setActive("verify");
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <nav className={`z-[98] w-full ${styles.paddingX} top-0 ${fix ? "fixed" : ""} transition-all duration-300`}>
            <ul className="list-none flex sm:flex-row flex-col sm:justify-start justify-center sm:items-center items-start flex-1 p-2">
                {aboutNavLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-barlow font-normal cursor-pointer text-[20px]
                            ${active === nav.id ? "text-white" : "text-dimWhite"}
                            ${index === aboutNavLinks.length - 1 ? "mr-0" : "mr-5"}`}
                        onClick={() => setActive(nav.id)}
                    >
                        <a href={nav.to} className="flex flex-row items-center navListItemUnderline">
                            {getCurrentLang() === "sb" ? nav.title : nav.title_de}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}
