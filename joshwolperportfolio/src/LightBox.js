import { useState, useEffect, useRef } from "react";
import BloodFlowWithClot from "./GIFs/BloodFlowWithClot.gif";
import breadHIGH from "./GIFs/breadHIGH.gif";
import Glacier2HIGH from "./GIFs/Glacier2HIGH.gif";
import orangeHIGH from "./GIFs/orangeHIGH.gif";
import quikDeform_cubeCompare from "./GIFs/quikDeform_cubeCompare.gif";
import quikDeform_cubeRoom from "./GIFs/quikDeform_cubeRoom.gif";
import quikDeform_flag from "./GIFs/quikDeform_flag.gif";
import quikDeform_superman from "./GIFs/quikDeform_superman.gif";
import quikDeform_wacky from "./GIFs/quikDeform_wacky.gif";
import quikDeform_flagCompare from "./GIFs/quikDeform_flagCompare.gif";
import RiteGameplay1 from "./GIFs/RiteGameplay1.gif";
import RiteGameplay2 from "./GIFs/RiteGameplay2.gif";
import RiteGameplay3 from "./GIFs/RiteGameplay3.gif";
import RiteGameplay4 from "./GIFs/RiteGameplay4.gif";
import PBDUnity_collision from "./GIFs/PBDUnity_collision.gif";
import PBDUnity_interactionMethods from "./GIFs/PBDUnity_interactionMethods.gif";
import PBDUnity_params from "./GIFs/PBDUnity_params.gif";
import CleanPoissonDirt from "./GIFs/CleanPoissonDirt.gif";
import CleanThroughDirtWall from "./GIFs/CleanThroughDirtWall.gif";
import CleanVase from "./GIFs/CleanVase.gif";
import CuttingWeeds from "./GIFs/CuttingWeeds.gif";
import DirtifyVase from "./GIFs/DirtifyVase.gif";
import PoissonWeeds from "./GIFs/PoissonWeeds.gif";
import RailAuthoringTool from "./GIFs/RailAuthoringTool.gif";
import RailGrinding from "./GIFs/RailGrinding.gif";
import RailGrindingFAST from "./GIFs/RailGrindingFAST.gif";
import WhiteboardDrawing from "./GIFs/WhiteboardDrawing.gif";

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

  const GIFs = {
    BloodFlowWithClot,
    breadHIGH,
    Glacier2HIGH,
    orangeHIGH,
    quikDeform_cubeCompare,
    quikDeform_cubeRoom,
    quikDeform_flag,
    quikDeform_superman,
    quikDeform_wacky,
    quikDeform_flagCompare,
    RiteGameplay1,
    RiteGameplay2,
    RiteGameplay3,
    RiteGameplay4,
    PBDUnity_collision,
    PBDUnity_interactionMethods,
    PBDUnity_params,
    CleanPoissonDirt,
    CleanThroughDirtWall,
    CleanVase,
    CuttingWeeds,
    DirtifyVase,
    PoissonWeeds,
    RailAuthoringTool,
    RailGrinding,
    RailGrindingFAST,
    WhiteboardDrawing,
  };

  const handleNextClick = () => {
    const keys = Object.keys(images);
    const currentIndex = keys.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % keys.length;
    setCurrentImage(keys[nextIndex]);
  };

  const imgSrc = GIFs[currentImage];

  useEffect(() => {
    if (currentImage) {
      const lightBoxElement = lightBoxRef.current;
      if (lightBoxElement) {
        lightBoxElement.focus();
      }
    }
  }, [currentImage]);

  function lightBoxDescription() {
    if (description.links) {
      const links = Object.entries(description.links)
        .map(([description, url]) => (
          <a
            target="_blank"
            rel="noreferrer"
            key={description}
            href={url}
            id="lightBoxLink"
          >
            {description}
          </a>
        ))
        .reduce((prev, curr) => [prev, ", ", curr]);
      const paragraphs = description.text
        .split("<PB>")
        .map((p, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{ __html: p.replace("<PE>", "") }}
          />
        ));

      return (
        <div id="lightBoxDescriptionText">
          {paragraphs}
          <br /> {links}
        </div>
      );
    } else {
      const paragraphs = description
        .split("<PB>")
        .map((p, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{ __html: p.replace("<PE>", "") }}
          />
        ));

      return <div id="lightBoxDescriptionText">{paragraphs}</div>;
    }
  }

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
          <div id="lightBoxTitle">{title}</div>

          <div id="lightBoxPic">
            <img src={imgSrc} alt={alt} />
          </div>
          <div id="lightBoxDescription">{lightBoxDescription()}</div>
        </div>
      )}
    </div>
  );
};

export default LightBox;
