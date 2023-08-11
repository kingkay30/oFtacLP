import { features } from "../constants";
import { Add } from "@material-ui/icons";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <>
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue sm:ml-[-19px] sm:mr-[19px]`}
      >
        <Add
          src={icon}
          alt="star"
          className="w-[50%] h-[50%] object-contain sm:ml-5 xs:ml-5 "
          color="primary"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 sm:text-[32px] lg:text-[25px] sm:mb-3">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] sm:text-[28px] lg:text-[20px] sm:tracking-wide sm:leading-10">
          {content}
        </p>
      </div>
    </div>
  </>
);

export default function About() {
  return (
    <section id="about" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Invite your high school <br className="sm:block hidden" /> classmates
          and relive your moments...
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-10 sm:max-w-[750px] sm:text-[38px] lg:text-[28px] sm:tracking-wide sm:leading-10`}
        >
          <span
            className="lg:text-[25px] sm:text-[30px] xs:text-[25px]"
            style={{
              fontFamily: "Mochiy Pop One",
              color: "tomato",
            }}
          >
            oFtac
          </span>{" "}
          is being built around profile authenticity, whereby likes, comments
          and followers and are strictly performed by real users. We've unabled
          the ability of groups-profiles that dont bear original user name-
          created by users to perform those action because it gives users false
          engagements as one user can create multiple groups and use them to
          perform those actions.
          <br /> This is one of the core ideas of{" "}
          <span
            className="lg:text-[25px] sm:text-[30px] xs:text-[25px]"
            style={{
              fontFamily: "Mochiy Pop One",
              color: "tomato",
            }}
          >
            oFtac
          </span>{" "}
          .
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col `}>
        {features?.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}
