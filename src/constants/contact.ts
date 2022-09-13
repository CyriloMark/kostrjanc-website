export interface Contact {
    id: string;
    name: string;
    adress: string[];
    tel: string;
    email: string;
};

export const contacts: Contact[] = [
    {
        id: "cyrilmark",
        name: "Mark, Cyril",
        tel: "+49 179 4361854",
        adress: [
            "Lauske 1e",
            "02699 Puschwitz",
            "Saxony, Germany"
        ],
        email: "cyrilo.mark@gmail.com"
    },
    {
        id: "korlabaier",
        name: "Baier, Korla",
        tel: "+49 xyz 187420",
        adress: [
            "Mittelweg 12",
            "01920 Panschwitz-Kukau",
            "Saxony, Germany"
        ],
        email: "korla.baier@gmx.de"
    }
]