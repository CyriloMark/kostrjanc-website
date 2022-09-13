import styles from "../../style";
import { stats, getCurrentLang } from "../../constants";

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {
            stats.map(stat => (
                <div key={stat.id} className={`flex-1 flex justify-start items-center flex-col mx-10`}>
                    <h4 className="font-barlow font-semibold text-center xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                        {stat.value}
                    </h4>
                    <p className="font-barlow font-normal text-center xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
                        {getCurrentLang() === "sb" ? stat.title : stat.title_de}
                    </p>
                </div>
            ))
        }

    </section>
)

export default Stats;
