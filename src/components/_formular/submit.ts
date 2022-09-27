import { getCurrentLang } from "../../constants";

export interface Message {
    subject: string;
    body: string;
}

const mailFooter = `%0A%0DDatum dźensa: ${Date.now()}%0Alang=${getCurrentLang()}%0A%0D© kostrjanc`;

export const send = (message: Message) => {
    if (!(message.subject && message.body)) return;
    window.open('mailto:info@kostrjanc.de?subject=' + message.subject + '&body=' + message.body + mailFooter, '_black').close();
}