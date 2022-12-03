import { useEffect, useState } from "react";

import styles from "../../style";

import { lerp } from "../../constants/lerp";

import img_ceocrown from '../../assets/_aboutkostrjanc/ceocrown-inapp.png';
import img_event from '../../assets/_aboutkostrjanc/event-inapp.png';
import img_eventinput from '../../assets/_aboutkostrjanc/eventinput-inapp.png';
import img_eventview from '../../assets/_aboutkostrjanc/eventview-inapp.png';
import img_follower from '../../assets/_aboutkostrjanc/follower-inapp.png';
import img_navbar from '../../assets/_aboutkostrjanc/navbar-inapp.png';
import img_pickimg from '../../assets/_aboutkostrjanc/pickimg-inapp.png';
import img_postview from '../../assets/_aboutkostrjanc/postview-inapp.png';
import img_search from '../../assets/_aboutkostrjanc/search-inapp.png';

const allIMGs = [
    img_ceocrown,
    img_event,
    img_eventinput,
    img_eventview,
    img_follower,
    img_navbar,
    img_pickimg,
    img_postview,
    img_search
]

import { getCurrentLang } from "../../constants";

export default function General() {

    const [imageOrder, setImageOrder] = useState(setOrder);

    function setOrder() {
        let final = [];
        for (let i = 0; i < allIMGs.length; i++) {
            let a = lerp(0, final.length - 1, Math.random());
            final.splice(a, 0, allIMGs[i]);
        }
        return final;
    }

    return (
        <section id="general" className={`flex flex-col ${styles.paddingY}`}>
            <p>hio</p>
        </section>
    )
}
