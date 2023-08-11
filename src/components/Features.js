import { stats } from "../constants";
import styles from "../style";

export default function Features() {
  return (
    <section
      id="features"
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 ml-1 mr-0 `}
    >
      {stats?.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-1`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white xs:mr-4">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[12.45px] lg:leading-[24.58px] sm:leading-[24.58px] sm:text-[21px] text-[15.45px] xs:leading-[16.58px] leading-[21.58px] text-gradient uppercase sm:ml-2 sm:mr-1">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}
