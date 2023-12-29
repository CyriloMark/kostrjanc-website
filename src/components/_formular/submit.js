import { getCurrentLang } from "../../constants";

const mailFooter = `%0A%0DDatum dźensa: ${Date.now()}%0Alang=${getCurrentLang()}%0A%0D© kostrjanc`;

export const send = message => {
    console.log(message);
    if (!(message.subject && message.body)) return;
    window.open(
        "mailto:kostrjanc@gmail.com?subject=" +
            message.subject +
            "&body=" +
            message.body +
            mailFooter,
        "_black"
    );
};
