import { business_features, getCurrentLang } from "../../constants";

import styles from "../../style";
import { Button } from "../";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== business_features.length - 1 ? "mb-6" : "mb-0"
    } feature-card duration-300 w-full`}
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
      <h4 className="font-barlow font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-roboto_mono font-normal text-dimWhite text-[16px] leading-[24px] max-w-[720px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section
      id="business"
      className={`flex ${styles.paddingY} ${styles.boxWidth}`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        {getCurrentLang() === "sb" ? (
          <h2 className={styles.heading2}>
            Ty chceš našim <br className="md:block hidden" />
            <span className="text-gradient">Business</span> přistupić?
          </h2>
        ) : (
          <h2 className={styles.heading2}>
            Du willst unserem <br className="md:block hidden" />
            <span className="text-gradient">Business</span> betreten?
          </h2>
        )}

        <div
          className={`flex-1 flex ${styles.flexCenter} ${styles.marginY} relative flex-col`}
        >
          {business_features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={
                getCurrentLang() === "sb" ? feature.title : feature.title_de
              }
              content={
                getCurrentLang() === "sb" ? feature.content : feature.content_de
              }
              index={index}
            />
          ))}
        </div>

        <Button
          text={
            getCurrentLang() === "sb" ? "Nětko přistupić" : "Jetzt betreten"
          }
          link
          to={"/business"}
        />
      </div>
    </section>
  );
};

export default Business;
