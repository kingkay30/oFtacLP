import styles from "../style";
import { School } from "@material-ui/icons";
import { img1, img2 } from "../assets";

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-5">
          <School color="error" fontSize="large" />
          <p
            className={`${styles.paragraph} ml-2  sm:text-[39px] sm:leading-[45px] xs:text-[28px] lg:text[50px]  lg:leading-[35px]`}
          >
            <span className="text-white">Connect with your</span>{" "}
            <span className="text-white">high school mates</span> and share
            memories...
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full mt-5">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          School Social App.
        </h1>
        <p
          className={`${styles.paragraph} max-w-[510px] mt-5 sm:text-[35px] xs:text-[28px] sm:max-w-[610px] `}
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
          easily connects you to all your high school mates by just selecting
          your school name and selecting your year of graduation.
        </p>
      </div>

      <div
        className={`flex-1 flex  ${styles.flexCenter} md:my-0 my-10 relative ml-10 xs:mr-1 xs:ml-2 sm:ml-5 sm:m-4 sm:mt-20`}
      >
        <div>
          <img
            src={img1}
            alt="billing"
            className="w-[90%] h-[90%] relative z-[5] md:h-[100%]  xs:mr-5 sm:mr-2"
          />
        </div>

        <div>
          <img
            src={img2}
            alt="billing"
            className="w-[93%] h-[90%] relative z-[5] md:h-[100%] xs:mr-3"
          />
        </div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
}
