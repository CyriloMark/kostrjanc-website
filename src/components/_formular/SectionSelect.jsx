import styles from "../../style";

import { formularSections, getCurrentLang } from "../../constants";

const FeatureCard = ({ icon, title, onclick, active }) => (
  <div
    className={`flex-1 flex flex-row p-6 rounded-[20px] m-5 feature-card duration-300 w-full items-center xs:min-w-[480px] cursor-pointer
        ${active ? "border-secondary border-[1px]" : ""} `}
    onClick={onclick}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-blue-gradient`}
    >
      <img
        src={icon}
        alt="star"
        className={`w-[50%] h-[50%] object-contain ${styles.iconAnimation}`}
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-barlow font-semibold text-white text-[18px] leading-[23.4px]">
        {title}
      </h4>
    </div>
  </div>
);

const SectionSelect = ({ active, onSectionChange }) => {
  return (
    <section
      id="select"
      className={`${styles.boxWidth} ${styles.paddingY} flex z-[5]`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        {getCurrentLang() === "sb" ? (
          <h2 className={styles.heading2}>
            Wuzwol sej prawy formular za wupjelnjenje:
          </h2>
        ) : (
          <h2 className={styles.heading2}>
            Wähle das richtige Formular zum Ausfüllen:
          </h2>
        )}

        <div
          className={`${styles.flexCenter} mt-10 relative flex flex-row flex-wrap w-full`}
        >
          {formularSections.map((section) => (
            <FeatureCard
              key={section.id}
              icon={section.icon}
              onclick={() => onSectionChange(section.id)}
              title={
                getCurrentLang() === "sb" ? section.title : section.title_de
              }
              active={active === section.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSelect;
