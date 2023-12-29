export const navLinks = [
    {
        id: "start",
        title: "Start",
        title_de: "Start",
        to: "/",
        icon: home,
    },
    {
        id: "about_us",
        title: "Štó smy my?",
        title_de: "Wer sind wir?",
        to: "/stomysmy",
        icon: friends,
    },
    {
        id: "about_kostrjanc",
        title: "Što je kostrjanc?",
        title_de: "Was ist kostrjanc?",
        to: "/stojekostrjanc",
        icon: pc,
    },
    {
        id: "help",
        title: "Pomoc",
        title_de: "Hilfe",
        to: "/pomoc",
        icon: help,
    },
];

export const aboutNavLinks = [
    {
        id: "start",
        title: "Start",
        title_de: "Start",
        to: "#",
    },
    {
        id: "general",
        title: "Powšitkowne",
        title_de: "Allgemeines",
        to: "#general",
    },
    {
        id: "post",
        title: "Posty",
        title_de: "Posts",
        to: "#post",
    },
    {
        id: "event",
        title: "Ewenty",
        title_de: "Events",
        to: "#event",
    },
    {
        id: "account",
        title: "Konto",
        title_de: "Account",
        to: "#account",
    },
    {
        id: "install",
        title: "Instalacija",
        title_de: "Installation",
        to: "#install",
    },
    {
        id: "verify",
        title: "Werifikacija",
        title_de: "Verifikation",
        to: "#verify",
    },
];

import * as flags from "../assets/flags";
export const langs = [
    {
        id: "sb",
        icon: flags.sb,
        ending: "",
    },
    {
        id: "de",
        icon: flags.de,
        ending: "?lang=de",
    },
];

import {
    business,
    verify,
    help,
    ban,
    star,
    bugs,
    corona,
    home,
    pc,
    friends,
} from "../assets/";

export const footerLinks = [
    {
        title: "kostrjanc",
        title_de: "kostrjanc",
        links: [
            {
                name: "Start",
                name_de: "Start",
                link: "https://www.kostrjanc.de/",
            },
            {
                name: "Moderator Dashboard",
                name_de: "Moderator Dashboard",
                link: "https://dashboard.kostrjanc.de/",
            },
            {
                name: "Werifikacija",
                name_de: "Verifikation",
                link: "https://www.kostrjanc.de/pomoc",
            },
            {
                name: "Pomoc",
                name_de: "Hilfe",
                link: "https://www.kostrjanc.de/pomoc",
            },
        ],
    },
    {
        title: "Předewzaće",
        title_de: "Unternehmen",
        links: [
            // {
            //   name: "kostrjanc Business program",
            //   name_de: "kostrjanc Business Programm",
            //   link: "https://www.kostrjanc.de/",
            // },
            // {
            //   name: "Z kostrjanc wabić",
            //   name_de: "Mit kostrjanc werben",
            //   link: "https://dashboard.kostrjanc.de/",
            // },
            {
                name: "Impresum",
                name_de: "Impressum",
                link: "https://www.kostrjanc.de/impresum",
            },
            {
                name: "Kontakt",
                name_de: "Kontakt",
                link: "https://www.kostrjanc.de/impresum/kontakt",
            },
            {
                name: "Škit datow a prawniske",
                name_de: "Datenschutz und Rechtliches",
                link: "https://www.kostrjanc.de/impresum/agb",
            },
        ],
    },
];

export const getCurrentLang = () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has("lang")) return "sb";
    else return urlParams.get("lang");
};

export const getPersistantAttributes = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.toString();
};

export const formularSections = [
    // {
    //     id: "business",
    //     title: "Požadanje za kostrjanc Business program",
    //     title_de: "Bewerbung für das kostrjanc Business Programm",
    //     icon: business,
    // },
    {
        id: "werifikacija",
        title: "Požadanje za werifikowanje",
        title_de: "Bewerbung für die Verifikation",
        icon: verify,
    },
    {
        id: "ban",
        title: "Njesprany ban",
        title_de: "Ungerechter Bann",
        icon: ban,
    },
    {
        id: "hack",
        title: "Hakowany konto abo žadyn přistup na jón",
        title_de: "Gehackter Account oder kein Zugriff mehr",
        icon: corona,
    },
    {
        id: "bugs",
        title: "Formular za přizjewjenje zmylkow abo problemow",
        title_de: "Formular zu Meldung von Fehlern und Problemen",
        icon: bugs,
    },
    {
        id: "feedback",
        title: "Formular za recenziju abo feedback. My so wjeselimy přez kóždoho!",
        title_de:
            "Formular für Rezensionen oder Feedback. Wir freuen uns über jeden Einzelnen!",
        icon: star,
    },
];
