export const releaseDate = "2022 11 11 11:11:00";

export const navLinks = [
  {
    id: "start",
    title: "Start",
    title_de: "Start",
    to: "/"
  },
  {
    id: "about",
    title: "Štó my smy",
    title_de: "Wer wir sind",
    to: "/stomysmy"
  },
  {
    id: "business",
    title: "Business",
    title_de: "Business",
    to: "/business"
  },
  {
    id: "help",
    title: "Pomoc",
    title_de: "Hilfe",
    to: "/pomoc"
  },
];

import * as flags from "../assets/flags";
export const langs = [
  {
    id: "sb",
    icon: flags.sb,
    ending: ""
  },
  {
    id: "de",
    icon: flags.de,
    ending: "?lang=de"
  },
]

export const stats = [
  {
    id: "stats-1",
    title: "Wužiwarjow",
    title_de: "Benutzer",
    value: "1000+",
  },
  {
    id: "stats-2",
    title: "Downloads",
    title_de: "Downloads",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Wužiwarjow/dźeń",
    title_de: "Bunuter/Tag",
    value: "95+",
  },
  {
    id: "posts",
    title: "posts",
    title_de: "Posts",
    value: "51646"
  }
];

import { business, ad, verify } from "../assets/";
export const business_features = [
  {
    id: "feature-0",
    icon: business,
    title: "kostrjanc Business program",
    title_de: "kostrjanc Business Programm",
    content: "s",
    content_de: "s"
  },
  {
    id: "feature-1",
    icon: verify,
    title: "Werifikacija",
    title_de: "Verifikation",
    content: "Jako werifikowany wužiwar maš móžnosć, kostrjanc sobu regulować. Dalše informacije namakaš tu.",
    content_de: "Als verifizierter Benutzer hast du die Möglichkeit, kostrjanc mit zu regulieren. Mehr Informationen findest du hier."
  },
  {
    id: "feature-2",
    icon: ad,
    title: "W kostrjanc wabić",
    title_de: "Mit kostrjanc werben",
    content: "Ty sy předewzaćer a chceš na kostrjanc wabić? Wužij chancu, my Was rady podpěramy.",
    content_de: "Du bist Unternehmer und willst auf kostrjanc deine Werbung schalten. Nutz deine Chance, wir helfen Ihnen gerne."
  },
];

export const footerLinks = [
  {
    title: "Pomocne strony",
    title_de: "Helfende Seiten",
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
        name_de: "Datenschutz und Rechliches",
        link: "https://www.kostrjanc.de/impresum/agb"
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
        name: "W kostrjanc wabić",
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
  {
    title: "Partnerjo",
    title_de: "Partner",
    links: [
      {
        name: "Załožba za serbski lud",
        name_de: "Stiftung für das sorbische Folk",
        link: "https://stiftung.sorben.com/start/",
      },
      {
        name: "Ludowe Nachładnistwo Domowina",
        name_de: "Domowina-Verlag",
        link: "https://www.domowina-verlag.de/",
      },
    ],
  },
];

export const getCurrentLang = () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has("lang")) return "sb";
  else return urlParams.get("lang");
}

export const getPersistantAttributes = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.toString();
}