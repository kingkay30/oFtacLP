import styles from "../style";
import { socialMedia } from "../constants";

export default function Foot() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <h2
            className="lg:text-[25px] sm:text-[30px] xs:text-[25px]"
            style={{
              fontFamily: "Mochiy Pop One",
              color: "tomato",
            }}
          >
            oFtac
          </h2>
          <p className={`${styles.paragraph} mt-2 max-w-[852px]`}>
            A new way to connect to your former high school classmates.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-4 border-t-[1px] border-t-[#3F3E45]">
        <p className="Oswald font-light text-center text-[13px] sm:text-[25px] lg:text-[16px] leading-[27px] text-white">
          Copyright Ⓒ 2023 oFtac | Powered by WhiteGates. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-4">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
