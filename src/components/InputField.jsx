import { useState } from "react";

import styles from "../style";

const InputField = ({ st, placeholder, onChange, multiline, disabled }) => {

    const [txt, setTxt] = useState("");

    const outline = "focus:outline outline-offset-2 outline-[1px] outline-secondary";

    if (!multiline)
        return (
            <input
                placeholder={placeholder} disabled={disabled}
                onChange={(text) => {
                    onChange(text.target.value);
                }}
                className={`${styles.paragraph} ${outline} rounded-[15px] bg-transparent border-2 border-secondary px-5 py-2 ${st} ${disabled ? "opacity-50" : "opacity-100"}`} />
        )
    return (
        <textarea
            rows={txt.split('\n').length}
            onChange={(text) => {
                if (onChange) onChange(text.target.value);
                setTxt(text.target.value)
            }}
            className={`${styles.paragraph} ${outline} rounded-[15px] bg-transparent border-2 border-secondary px-5 py-2 ${st}`} placeholder={placeholder} >
        </textarea>
    )
}

export default InputField;
