//imports
import { useState, useEffect, useRef } from "react";
import "./App.css";
//json import
import contentDatabase from "./contentDatabase.json";
//component imports
import LightBox from "./LightBox";
import Header from "./Header";
import Footer from "./footer";
//image imports
import BloodFlowWithClotGIF from "./GIFs/BloodFlowWithClot.gif";
import breadHIGHGIF from "./GIFs/breadHIGH.gif";
import Glacier2HIGHGIF from "./GIFs/Glacier2HIGH.gif";
import orangeHIGHGIF from "./GIFs/orangeHIGH.gif";
import quikDeform_cubeCompareGIF from "./GIFs/quikDeform_cubeCompare.gif";
import quikDeform_cubeRoomGIF from "./GIFs/quikDeform_cubeRoom.gif";
import quikDeform_flagGIF from "./GIFs/quikDeform_flag.gif";
import quikDeform_supermanGIF from "./GIFs/quikDeform_superman.gif";
import quikDeform_wackyGIF from "./GIFs/quikDeform_wacky.gif";
import quikDeform_flagCompareGIF from "./GIFs/quikDeform_flagCompare.gif";
import RiteGameplay1GIF from "./GIFs/RiteGameplay1.gif";
import RiteGameplay2GIF from "./GIFs/RiteGameplay2.gif";
import RiteGameplay3GIF from "./GIFs/RiteGameplay3.gif";
import RiteGameplay4GIF from "./GIFs/RiteGameplay4.gif";
import PBDUnity_collisionGIF from "./GIFs/PBDUnity_collision.gif";
import PBDUnity_interactionMethodsGIF from "./GIFs/PBDUnity_interactionMethods.gif";
import PBDUnity_paramsGIF from "./GIFs/PBDUnity_params.gif";
import CleanPoissonDirtGIF from "./GIFs/CleanPoissonDirt.gif";
import CleanThroughDirtWallGIF from "./GIFs/CleanThroughDirtWall.gif";
import CleanVaseGIF from "./GIFs/CleanVase.gif";
import CuttingWeedsGIF from "./GIFs/CuttingWeeds.gif";
import DirtifyVaseGIF from "./GIFs/DirtifyVase.gif";
import PoissonWeedsGIF from "./GIFs/PoissonWeeds.gif";
import RailAuthoringToolGIF from "./GIFs/RailAuthoringTool.gif";
import RailGrindingGIF from "./GIFs/RailGrinding.gif";
import RailGrindingFASTGIF from "./GIFs/RailGrindingFAST.gif";
import WhiteboardDrawingGIF from "./GIFs/WhiteboardDrawing.gif";
import BloodFlowWithClot from "./Stills/BloodFlowWithClot.png";
import breadHIGH from "./Stills/breadHIGH.png";
import Glacier2HIGH from "./Stills/Glacier2HIGH.png";
import orangeHIGH from "./Stills/orangeHIGH.png";
import quikDeform_cubeCompare from "./Stills/quikDeform_cubeCompare.png";
import quikDeform_cubeRoom from "./Stills/quikDeform_cubeRoom.png";
import quikDeform_flag from "./Stills/quikDeform_flag.png";
import quikDeform_superman from "./Stills/quikDeform_superman.png";
import quikDeform_wacky from "./Stills/quikDeform_wacky.png";
import quikDeform_flagCompare from "./Stills/quikDeform_flagCompare.png";
import RiteGameplay1 from "./Stills/RiteGameplay1.png";
import RiteGameplay2 from "./Stills/RiteGameplay2.png";
import RiteGameplay3 from "./Stills/RiteGameplay3.png";
import RiteGameplay4 from "./Stills/RiteGameplay4.png";
import PBDUnity_collision from "./Stills/PBDUnity_collision.png";
import PBDUnity_interactionMethods from "./Stills/PBDUnity_interactionMethods.png";
import PBDUnity_params from "./Stills/PBDUnity_params.png";
import CleanPoissonDirt from "./Stills/CleanPoissonDirt.png";
import CleanThroughDirtWall from "./Stills/CleanThroughDirtWall.png";
import CleanVase from "./Stills/CleanVase.png";
import CuttingWeeds from "./Stills/CuttingWeeds.png";
import DirtifyVase from "./Stills/DirtifyVase.png";
import PoissonWeeds from "./Stills/PoissonWeeds.png";
import RailAuthoringTool from "./Stills/RailAuthoringTool.png";
import RailGrindingFAST from "./Stills/RailGrindingFAST.png";
import RailGrinding from "./Stills/RailGrinding.png";
import WhiteboardDrawing from "./Stills/WhiteboardDrawing.png";

// import autoAnimate from "@formkit/auto-animate/react";

function App() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState({});
  const [showRow1LightBox, setShowRow1LightBox] = useState(false);
  const [showRow2LightBox, setShowRow2LightBox] = useState(false);
  const [showRow3LightBox, setShowRow3LightBox] = useState(false);
  const [showRow4LightBox, setShowRow4LightBox] = useState(false);
  const [loading, setLoading] = useState(true);
  const rowDescriptions = contentDatabase.rowDescriptions;
  const loadingRef = useRef(null);
  const [GIFs, setGIFs] = useState({});
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    setImages({
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
    });
  }, []);

  useEffect(() => {
    setGIFs({
      BloodFlowWithClotGIF,
      breadHIGHGIF,
      Glacier2HIGHGIF,
      orangeHIGHGIF,
      quikDeform_cubeCompareGIF,
      quikDeform_cubeRoomGIF,
      quikDeform_flagGIF,
      quikDeform_supermanGIF,
      quikDeform_wackyGIF,
      quikDeform_flagCompareGIF,
      RiteGameplay1GIF,
      RiteGameplay2GIF,
      RiteGameplay3GIF,
      RiteGameplay4GIF,
      PBDUnity_collisionGIF,
      PBDUnity_interactionMethodsGIF,
      PBDUnity_paramsGIF,
      CleanPoissonDirtGIF,
      CleanThroughDirtWallGIF,
      CleanVaseGIF,
      CuttingWeedsGIF,
      DirtifyVaseGIF,
      PoissonWeedsGIF,
      RailAuthoringToolGIF,
      RailGrindingGIF,
      RailGrindingFASTGIF,
      WhiteboardDrawingGIF,
    });
  }, []);

  const hideLightBox = () => {
    setShowLightBox(false);
  };

  useEffect(() => {
    if (!showLightBox) {
      setCurrentImage(null);
    }
  }, [showLightBox]);

  const handleImageClick = (key) => {
    setCurrentImage(key);
    setShowLightBox(true);
  };

  // useEffect(() => {
  //   console.log("currentImage", currentImage);
  // });

  const Description = ({ description }) => {
    function formatDescription(description) {
      if (description.links) {
        // console.log("there is a link")
        // if the description has a links object, replace strings matching the link keys with anchor tags
        let formattedText = description.text;
        Object.keys(description.links).forEach((key) => {
          const link = description.links[key];
          formattedText = formattedText.replace(
            key,
            `<a href="${link}" target="_blank" rel="noreferrer">${key}</a>`
          );
        });
        // console.log("presplit formattedText:", formattedText)
        return formattedText;
      } else {
        // if there is no links object, just return the value of the "description" key's value
        let formattedText = description;
        // console.log('formattedText:', formattedText)
        return formattedText;
      }
    }

    const formattedDescription = formatDescription(description);

    // separate the formatted text into paragraphs
    const paragraphs = formattedDescription
      .split("<PB>")
      .map((p, i) => (
        <p
          key={i}
          dangerouslySetInnerHTML={{ __html: p}}
        />
      ));

    return <div>{paragraphs}</div>;
  };

  const Loading = () => {
    return (
      <div className="loading" ref={loadingRef}>
        <div className="loadingSpinner"></div>
        loading
      </div>
    );
  };

  const SkillsList = ({ skills }) => {
    return (
      <ul id="skillsContainer">
        {Object.entries(skills).map(([key, value]) => {
          if (value.links) {
            const links = Object.entries(value.links)
              .map(([description, url]) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={description}
                  href={url}
                >
                  {description}
                </a>
              ))
              .reduce((prev, curr) => [prev, " | ", curr]);
            // console.log("links is");
            // console.table(links);
            return (
              <li key={key} id="skillWLinks">
                {value.description}
                <br /> <div id="skillLink">{links}</div>
              </li>
            );
          } else {
            return <li key={key}>{value}</li>;
          }
        })}
      </ul>
    );
  };

  const Row1 = ({ data }) => {
    //compare keys from row 1 to images object and create a new object with only the images that match the keys
    let row1Images = Object.keys(data.row1).reduce((acc, key) => {
      if (images[key]) {
        acc[key] = images[key];
      }
      return acc;
    }, {});

    return (
      <div id="row1">
        <div className="mainDescriptionBox">
          <h2>{rowDescriptions.row1.title}</h2>
          <Description description={rowDescriptions.row1.description} />
        </div>
        <div id="skillsWrapper">
          <SkillsList skills={rowDescriptions.row1.skills} />
        </div>
        <div id="row1Pics">
          {Object.keys(data.row1).map((key) => (
            <div
              key={key}
              onClick={() => {
                setShowRow1LightBox(true);
                setShowRow2LightBox(false);
                setShowRow3LightBox(false);
                setShowRow4LightBox(false);
                handleImageClick(key);
              }}
              className="imageBox"
              data-title={data.row1[key].title}
            >
              <img
                alt={data.row1[key].alt}
                src={hoveredImage === key ? GIFs[key + "GIF"] : images[key]}
                onMouseEnter={() => setHoveredImage(key)}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </div>
          ))}
        </div>

        {showRow1LightBox && currentImage && (
          <LightBox
            showLightBox={showLightBox}
            hideLightBox={hideLightBox}
            setCurrentImage={setCurrentImage}
            currentImage={currentImage}
            updateCurrentImage={setCurrentImage}
            images={row1Images}
            alt={data.row1[currentImage].alt}
            title={data.row1[currentImage].title}
            description={data.row1[currentImage].description}
          />
        )}
      </div>
    );
  };

  const Row2 = ({ data }) => {
    let row2Images = Object.keys(data.row2).reduce((acc, key) => {
      if (images[key]) {
        acc[key] = images[key];
      }
      return acc;
    }, {});

    return (
      <div id="row2">
        <div className="mainDescriptionBox">
          <h2>{rowDescriptions.row2.title}</h2>
          <Description description={rowDescriptions.row2.description} />
        </div>
        <div id="skillsWrapper">
          <SkillsList skills={rowDescriptions.row2.skills} />
        </div>
        <div id="picsHolder">
          {Object.keys(data.row2).map((key) => (
            <div
              key={key}
              onClick={() => {
                setShowRow1LightBox(false);
                setShowRow4LightBox(false);
                setShowRow3LightBox(false);
                setShowRow2LightBox(true);
                handleImageClick(key);
              }}
              className="imageBox"
              data-title={data.row2[key].title}
            >
              <img
                alt={data.row2[key].alt}
                src={hoveredImage === key ? GIFs[key + "GIF"] : images[key]}
                onMouseEnter={() => setHoveredImage(key)}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </div>
          ))}
        </div>

        {showRow2LightBox && currentImage && (
          <LightBox
            showLightBox={showLightBox}
            hideLightBox={hideLightBox}
            setCurrentImage={setCurrentImage}
            currentImage={currentImage}
            updateCurrentImage={setCurrentImage}
            images={row2Images}
            alt={data.row2[currentImage].alt}
            title={data.row2[currentImage].title}
            description={data.row2[currentImage].description}
          />
        )}
      </div>
    );
  };

  const Row3 = ({ data }) => {
    let row3Images = Object.keys(data.row3).reduce((acc, key) => {
      if (images[key]) {
        acc[key] = images[key];
      }
      return acc;
    }, {});

    return (
      <div id="row3">
        <div className="mainDescriptionBox">
          <h2>{rowDescriptions.row3.title}</h2>
          <Description description={rowDescriptions.row3.description} />
        </div>
        <div id="skillsWrapper">
          <SkillsList skills={rowDescriptions.row3.skills} />
        </div>
        <div id="row3Pics">
          <div id="row3Row1">
            {Object.keys(data.row3)
              .slice(0, 4)
              .map((key) => (
                <div
                  key={key}
                  onClick={() => {
                    setShowRow1LightBox(false);
                    setShowRow4LightBox(false);
                    setShowRow3LightBox(true);
                    setShowRow2LightBox(false);
                    handleImageClick(key);
                  }}
                  className="imageBox"
                  data-title={data.row3[key].title}
                >
                  <img
                    alt={data.row3[key].alt}
                    src={hoveredImage === key ? GIFs[key + "GIF"] : images[key]}
                    onMouseEnter={() => setHoveredImage(key)}
                    onMouseLeave={() => setHoveredImage(null)}
                  />
                </div>
              ))}
          </div>
          <div id="row3Row2">
            {Object.keys(data.row3)
              .slice(4, 7)
              .map((key) => (
                <div
                  key={key}
                  onClick={() => {
                    setShowRow1LightBox(false);
                    setShowRow4LightBox(false);
                    setShowRow3LightBox(true);
                    setShowRow2LightBox(false);
                    handleImageClick(key);
                  }}
                  className="imageBox"
                  data-title={data.row3[key].title}
                >
                  <img
                    alt={data.row3[key].alt}
                    src={hoveredImage === key ? GIFs[key + "GIF"] : images[key]}
                    onMouseEnter={() => setHoveredImage(key)}
                    onMouseLeave={() => setHoveredImage(null)}
                  />
                </div>
              ))}
          </div>
        </div>

        {showRow3LightBox && currentImage && (
          <LightBox
            showLightBox={showLightBox}
            hideLightBox={hideLightBox}
            setCurrentImage={setCurrentImage}
            currentImage={currentImage}
            updateCurrentImage={setCurrentImage}
            images={row3Images}
            alt={data.row3[currentImage].alt}
            title={data.row3[currentImage].title}
            description={data.row3[currentImage].description}
          />
        )}
      </div>
    );
  };

  const Row4 = ({ data }) => {
    let row4Images = Object.keys(data.row4).reduce((acc, key) => {
      if (images[key]) {
        acc[key] = images[key];
      }
      return acc;
    }, {});

    let row4GIFs = Object.keys(data.row4).reduce((acc, key) => {
      if (GIFs[key]) {
        acc[key] = GIFs[key];
      }
      return acc;
    }, {});

    return (
      <div id="row4">
        <div className="mainDescriptionBox">
          <h2>{rowDescriptions.row4.title}</h2>
          <Description description={rowDescriptions.row4.description} />
        </div>
        <div id="skillsWrapper">
          <SkillsList skills={rowDescriptions.row4.skills} />
        </div>
        <div id="row4Pics">
          {Object.keys(data.row4).map((key) => (
            <div
              key={key}
              onClick={() => {
                setShowRow1LightBox(false);
                setShowRow2LightBox(false);
                setShowRow3LightBox(false);
                setShowRow4LightBox(true);
                handleImageClick(key);
              }}
              className="imageBox"
              data-title={data.row4[key].title}
            >
              <img
                alt={data.row4[key].alt}
                src={hoveredImage === key ? GIFs[key + "GIF"] : images[key]}
                onMouseOver={() => setHoveredImage(key)}
                onMouseOut={() => setHoveredImage(null)}
              />
            </div>
          ))}
        </div>
        {showRow4LightBox && currentImage && (
          <LightBox
            showLightBox={showLightBox}
            hideLightBox={hideLightBox}
            setCurrentImage={setCurrentImage}
            currentImage={currentImage}
            updateCurrentImage={setCurrentImage}
            images={row4Images}
            alt={data.row4[currentImage].alt}
            title={data.row4[currentImage].title}
            description={data.row4[currentImage].description}
          />
        )}
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      loadingRef.current.classList.add("loaded");
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div id="pageContent">
        {loading && <Loading />}
        <Header headerContent={contentDatabase.header} />
        <Row1 data={contentDatabase} />
        <Row2 data={contentDatabase} />
        <Row3 data={contentDatabase} />
        <Row4 data={contentDatabase} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
