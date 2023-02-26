import { useEffect, useRef } from "react";

const LightBox = ({
  currentImage,
  setCurrentImage,
  hideLightBox,
  showLightBox,
  images,
  alt,
  title,
  description,
}) => {
  const lightBoxRef = useRef(null);

  const handlePrevClick = () => {
    const keys = Object.keys(images);
    const currentIndex = keys.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
    setCurrentImage(keys[prevIndex]);
  };

  const handleNextClick = () => {
    const keys = Object.keys(images);
    const currentIndex = keys.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % keys.length;
    setCurrentImage(keys[nextIndex]);
  };

  const imgSrc = images[currentImage];

  useEffect(() => {
    if (currentImage) {
      const lightBoxElement = lightBoxRef.current;
      if (lightBoxElement) {
        lightBoxElement.focus();
      }
    }
  }, [currentImage]);

  return (
    <div id="lightBoxWrapper">
      {showLightBox && (
        <div
          id="lightBox"
          ref={lightBoxRef}
          tabIndex="0"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              handlePrevClick();
            } else if (event.key === "ArrowRight") {
              handleNextClick();
            }
          }}
        >
          <div id="lightBoxClose" onClick={hideLightBox}>
            ❌
          </div>
          <div id="lightBoxPrev" onClick={handlePrevClick}>
            ◀
          </div>
          <div id="lightBoxNext" onClick={handleNextClick}>
            ▶
          </div>
          <img id="lightBoxPic" src={imgSrc} alt={alt} />
          <div id="lightBoxDescription">
            <div id="lightBoxTitle">{title}</div>
            <div id="lightBoxContent">{description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LightBox;
