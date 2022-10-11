export const navLinks = [
  {
    id: "start",
    title: "Start",
    title_de: "Start",
    to: "/",
  },
  {
    id: "about",
    title: "Štó smy my?",
    title_de: "Wer sind wir?",
    to: "/stomysmy",
  },
  {
    id: "business",
    title: "Business",
    title_de: "Business",
    to: "/business",
  },
  {
    id: "help",
    title: "Pomoc",
    title_de: "Hilfe",
    to: "/pomoc",
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

export const stats = [
  {
    id: "users",
    title: "Wužiwarjow",
    title_de: "Benutzer",
    value: 0,
  },
  {
    id: "posts",
    title: "Posty",
    title_de: "Posts",
    value: 0,
  },
  {
    id: "events",
    title: "Ewenty",
    title_de: "Events",
    value: 0,
  },
];

import {
  business,
  ad,
  verify,
  ban,
  empty,
  star,
  bugs,
  corona,
} from "../assets/";

export const business_features = [
  {
    id: "feature-0",
    icon: business,
    title: "kostrjanc Business program",
    title_de: "kostrjanc Business Programm",
    content:
      "Z našim Business programom maš móžnosć, wabjenja šaltować, a precizne posty a ewenty wozjewić, ale so tež werifikować dać.",
    content_de:
      "Mit unserem Business Programm hat man die Möglichkeit, Werbungen zu schalten, und präzise Posts und Events zu veröffentlichen, sich aber auch verifizieren zu lassen.",
  },
  {
    id: "feature-1",
    icon: verify,
    title: "Werifikacija",
    title_de: "Verifikation",
    content:
      "Jako werifikowany wužiwar maš móžnosć, kostrjanc sobu regulować. Dalše informacije namakaš tu.",
    content_de:
      "Als verifizierter Benutzer hast du die Möglichkeit, kostrjanc mit zu regulieren. Mehr Informationen findest du hier.",
  },
  {
    id: "feature-2",
    icon: ad,
    title: "W kostrjanc wabić",
    title_de: "Mit kostrjanc werben",
    content:
      "Ty sy předewzaćer a chceš na kostrjanc wabić? Wužij chancu, my tebje rady podpěramy.",
    content_de:
      "Du bist Unternehmer und willst auf kostrjanc deine Werbung schalten. Nutz deine Chance, wir helfen dir gerne.",
  },
];

export const footerLinks = [
  {
    title: "Pomocne strony",
    title_de: "Hilfs Seiten",
    links: [
      {
        name: "Start",
        name_de: "Start",
        link: "https://www.kostrjanc.de/",
      },
      {
        name: "Business Dashboard",
        name_de: "Business Dashboard",
        link: "https://dashboard.kostrjanc.de/",
      },
      {
        name: "Pomoc",
        name_de: "Hilfe",
        link: "https://www.kostrjanc.de/pomoc",
      },
      {
        name: "Škit datow a prawniske",
        name_de: "Datenschutz und Rechtliches",
        link: "https://www.kostrjanc.de/impresum/agb",
      },
      {
        name: "Impresum",
        name_de: "Impressum",
        link: "https://www.kostrjanc.de/impresum",
      },
    ],
  },
  {
    title: "Business",
    title_de: "Business",
    links: [
      {
        name: "kostrjanc Business program",
        name_de: "kostrjanc Business Programm",
        link: "https://www.kostrjanc.de/",
      },
      {
        name: "Z kostrjanc wabić",
        name_de: "Mit kostrjanc werben",
        link: "https://dashboard.kostrjanc.de/",
      },
      {
        name: "Werifikacija",
        name_de: "Verifikation",
        link: "https://www.kostrjanc.de/pomoc",
      },
      {
        name: "Kontakt",
        name_de: "Kontakt",
        link: "https://www.kostrjanc.de/impresum/kontakt",
      },
    ],
  },
];

export const getCurrentLang = () => {
  //const urlParams = new URLSearchParams(window.location.search);
  //if (!urlParams.has("lang")) return "sb";
  //else return urlParams.get("lang");
  return localStorage.getItem("lang");
};

export const getPersistantAttributes = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.toString();
};

export const formularSections = [
  {
    id: "business",
    title: "Požadanje za kostrjanc Business program",
    title_de: "Bewerbung für das kostrjanc Business Programm",
    icon: business,
  },
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
