import { useEffect, useState } from "react";

import styles from "../../style";
import { stats as st, getCurrentLang } from "../../constants";

const Stats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://vps343020.ovh.net:8080/get_info")
      .then((res) =>
        res
          .json()
          .then((data) => {
            let newStats = [].concat(st);

            newStats.forEach((el) => {
              if (el.id === "users") el.value = data.amt_users;
              if (el.id === "posts") el.value = data.amt_posts;
              if (el.id === "events") el.value = data.amt_events;
            });

            setStats(newStats);
          })
          .catch((err) => console.log("err data", err.code))
      )
      .catch((err) => console.log("err fetch", err.code));
  }, []);

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats
        ? stats.map((stat) => (
            <div
              key={stat.id}
              className={`flex-1 flex justify-start items-center flex-col mx-10`}
            >
              <h4 className="font-barlow font-semibold text-center xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                {stat.value}
              </h4>
              <p className="font-barlow font-normal text-center xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
                {getCurrentLang() === "sb" ? stat.title : stat.title_de}
              </p>
            </div>
          ))
        : null}
    </section>
  );
};
export default Stats;
