import styles, { layout } from "../style";
import { images } from "../assets";
import Gallery from "./Gallery";

export default function Goals() {
  return (
    <section id="pictures" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <div
          className={`flex-1 flex-col md:flex-row  ${styles.flexCenter} md:my-0 md:ml-0 `}
        >
          <div className="lg:hidden mb-[75px]">
            <Gallery />
          </div>

          {images.map((photo, index) => (
            <div className="hidden lg:flex">
              <img
                id={index}
                src={photo}
                alt="billing"
                className="w-[80%] h-[90%] relative z-[5] md:w-[90%]  mb-10"
              />
            </div>
          ))}

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>
      </div>
    </section>
  );
}
