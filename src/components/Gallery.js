import { useEffect, useState } from "react";
import { images } from "../assets";
import "../goals.css";
import { frontArrow, backArrow } from "../assets";
import ImageSlider from "./ImageSlider";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images?.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const scroll = (dir) => {
    const lastIndex = images?.length - 1;

    if (dir === "back") {
      setIndex(index - 1);
      if (index < 1) {
        setIndex(lastIndex);
      }
    } else {
      setIndex(index + 1);
      if (index > lastIndex - 1) {
        setIndex(0);
      }
    }
  };

  const containerStyles = {
    height: "500px",
    width: "280px",
    margin: "0 auto",
  };

  return (
    <>
      <div className="images-container">
        <div className="images-section">
          <div className="images-left" styles={containerStyles}>
            <ImageSlider index={index} parentWidth={900} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <img
          src={backArrow}
          alt="back"
          className="w-[103px] h-[103px] object-contain"
          onClick={() => scroll("back")}
        />
        <img
          src={frontArrow}
          alt="front"
          className="w-[103px] h-[103px] object-contain"
          onClick={() => scroll("front")}
        />
      </div>
    </>
  );
}
