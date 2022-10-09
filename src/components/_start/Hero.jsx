import styles from "../../style";

import hero_mobile from "../../assets/_start/_hero_mobile.png";
import { getCurrentLang } from "../../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 px-5`}
      >
        <div className="flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-[10px] mb-5">
          <p className={`${styles.paragraph}`}>
            {getCurrentLang() === "sb"
              ? "1. Serbski Social Media"
              : "1. Sorbisches Social Media"}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {getCurrentLang() === "sb" ? "My předstajimy" : "Wir stellen vor:"}{" "}
            <br className="sm:block hidden" />
            <span className="text-gradient">kostrjanc.</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[720px] mt-10`}>
          {getCurrentLang() === "sb"
            ? "Cyril Mark a Korla Baier mějachu ideju, social media aplikaciju za serbski lud stworić. Hobby za programěrowanje a design aplikacijow mějachu hólcaj hižo. Tak stworištaj hólcy w běhu pół lěta aplikaciju a přidatne online-słužby."
            : "Cyril Mark und Korla Baier hatten die Idee, eine Social Media Plattform für die Sorben zu entwickeln. Das Hobby Programmieren und Designen von Apps hatten die Jungs bereits. So erschufen die Beiden innerhalb eines halben Jahres die App und dazugehörige Online-Dienste."}
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={hero_mobile}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full blue__gradient bottom-40" />
        <div className="absolute z-[0] w-[20%] h-[20%] right-20 bottom-20 white__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
