import { images } from "../assets";

export default function ImageSlider({ index, parentWidth }) {
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slidesContainerOverflowStyles = {
    overflow: "hidden",
    height: "100%",
  };

  const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "contain ",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${images[index]}) `,
  };

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * images.length,
    transform: `translateX(${-(index * parentWidth)}px)`,
  });

  const getStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${images[slideIndex]}) `,
    width: `${parentWidth}px`,
  });

  return (
    <div style={sliderStyles}>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {images.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
