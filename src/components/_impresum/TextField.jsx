import { useState } from "react";

import styles from "../../style";

import { getCurrentLang } from "../../constants";

import { InputField, Button } from "../";

const TextField = () => {
    const [message, setMessage] = useState({
        id: Date.now(),
        subject: null,
        text: null,
    });

    let send = () => {
        if (!(message.subject && message.text)) return;
        window
            .open(
                "mailto:kostrjanc@gmail.com?subject=" +
                    message.subject +
                    "&body=" +
                    message.text,
                "_black"
            )
            .close();
    };

    return (
        <section
            id="textfiel"
            className={`flex flex-col ${styles.paddingY} ${styles.boxWidth}`}>
            {getCurrentLang() === "sb" ? (
                <h2 className={styles.heading2}>
                    Maš wosebitu naležnosć?
                    <br className="md:block hidden" />
                    Pisaj twoju powěsć hnydom tu!
                </h2>
            ) : (
                <h2 className={styles.heading2}>
                    Hast du ein besonderes Anliegen?
                    <br className="md:block hidden" />
                    Schreib deine Nachricht gleich hier!
                </h2>
            )}
            <div className={`flex-col flex-1 ${styles.marginY}`}>
                <InputField
                    st="mb-5 w-full"
                    onChange={val => setMessage({ ...message, subject: val })}
                    placeholder={
                        getCurrentLang() === "sb"
                            ? "Zapodaj twój tema naležnosće"
                            : "Gib dein Betreff an"
                    }
                />
                <InputField
                    st="w-full"
                    onChange={val => setMessage({ ...message, text: val })}
                    multiline
                    placeholder={
                        getCurrentLang() === "sb"
                            ? "Zapodaj twoju powěsć"
                            : "Gib deine Nachricht ein"
                    }
                />
                <Button
                    onClick={send}
                    styles="mt-10"
                    text={
                        getCurrentLang() === "sb" ? "Wotpósłać" : "Abschicken"
                    }
                />
            </div>
        </section>
    );
};

export default TextField;
