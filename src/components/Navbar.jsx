import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks, langs, getCurrentLang, getPersistantAttributes } from "../constants";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("Start");
    const [activeLang, setActiveLang] = useState(getCurrentLang());

    return (
        <nav className="z-[99] w-full flex py-6 justify-between items-center navbar">

            <Link to={"/?" + getPersistantAttributes()}><img src={logo} alt="kostrjanc logo" className="w-[64px] h-[64px] cursor-pointer hover:rotate-180 hover:scale-110 transition ease-in-out duration-500" /></Link>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-barlow font-normal cursor-pointer text-[20px]
                            ${active === nav.title ? "text-white" : nav.id === "business" ? "text-gradient" : "text-dimWhite"}
                            ${index === navLinks.length - 1 ? "mr-0" : "mr-5"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <Link to={nav.to + "?" + getPersistantAttributes()} >
                            {getCurrentLang() === "sb" ? nav.title : nav.title_de}
                        </Link>
                    </li>
                ))}
                {langs.map((lang) => (
                    <li
                        key={lang.id}
                        className={`cursor-pointer text-white
                            ${activeLang === lang.id ? "scale-100" : "scale-75 hover:scale-100"} transition-all duration-300 ml-5`}
                    >
                        <img title={lang.id} src={lang.icon} alt={lang.id} onClick={() => location.href = location.pathname + lang.ending + location.hash} className="w-[21px]" />

                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setToggle((prev) => !prev)} />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
                    absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>

                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-barlow font-normal cursor-pointer text-[20px]
                                    ${active === nav.title ? "text-white" : nav.id === "business" ? "text-gradient" : "text-dimWhite"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <Link to={nav.to + "?" + getPersistantAttributes()} >{nav.title}</Link>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;