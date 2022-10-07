import { useState } from "react";

import styles from "../../style";

import { getCurrentLang } from "../../constants";
import { faq } from "../../constants/faq";

const Faq = () => {
  const [openedSection, setOpenedSection] = useState(-1);

  return (
    <section
      id="faq"
      className={`${styles.boxWidth} ${styles.flexCenter} flex-col`}
    >
      <div className={`z-[5] w-full`}>
        {faq.map((el, key) => (
          <div
            key={key}
            className={`my-5 cursor-pointer bg-black-gradient-2 flex-1 flex flex-col rounded-[20px] box-shadow w-full p-5`}
            onClick={() =>
              openedSection === key
                ? setOpenedSection(-1)
                : setOpenedSection(key)
            }
          >
            <p className={styles.paragraph}>
              {getCurrentLang() === "sb" ? el.title : el.title_de}
            </p>
            {openedSection === key ? el.answer : null}
          </div>
        ))}
      </div>

      <div className="absolute z-[1] right-1/2 w-[25%] h-[5%] red__gradient" />
      <div className="absolute z-[1] left-0 top-[13%] w-[5%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[1] right-0 top-5 w-[35%] h-[50%] blue__gradient" />
    </section>
  );
};

export default Faq;
