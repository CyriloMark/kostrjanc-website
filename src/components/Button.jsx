import { Link } from "react-router-dom";

import { getPersistantAttributes } from "../constants";

const Button = ({ styles, text, link, to, onClick }) => {
    return (
        <button type='button' className={`bg-blue-gradient py-4 px-6 font-barlow font-medium
            text-[18px] text-primary rounded-[10px] transition-all duration-300 outline-offset-2 ${styles} hover:outline hover:outline-[1px] hover:outline-secondary`}>
            {
                !link ?
                    onClick ?
                        <p onClick={onClick}>{text}</p> :
                        <p>{text}</p> :
                    <Link to={to + "?" + getPersistantAttributes()}>{text}</Link>
            }
        </button>
    );
}

export default Button;