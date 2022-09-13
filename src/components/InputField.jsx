import { useState } from "react";

import styles from "../style";

const InputField = ({ st, placeholder, onChange, multiline }) => {

    const [txt, setTxt] = useState("");

    if (!multiline)
        return (
            <input
                placeholder={placeholder}
                onChange={(text) => {
                    onChange(text.target.value);
                }}
                className={`${styles.paragraph} rounded-[15px] bg-transparent border-2 border-secondary px-5 py-2 ${st}`} />
        )
    return (
        <textarea
            rows={txt.split('\n').length}
            onChange={(text) => {
                onChange(text.target.value);
                setTxt(text.target.value)
            }}
            className={`${styles.paragraph} rounded-[15px] bg-transparent border-2 border-secondary px-5 py-2 ${st}`} placeholder={placeholder} >
        </textarea>
    )
}


export default InputField;
