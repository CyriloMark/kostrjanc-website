import styles from "../../style";

const SectionElement = ({ title, content }) => (
  <div className={`flex flex-col mb-5 w-full`}>
    <h2 className={`${styles.heading2}`}>{title}</h2>
    {content}
  </div>
);

export default SectionElement;
