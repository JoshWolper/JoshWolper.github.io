//imports
import { useState, useEffect, useRef } from "react";
import "./App.css";
//json import
import contentDatabase from "./contentDatabase.json";
//component imports
import LightBox from "./LightBox";
import Header from "./Header";
//image imports
import bloodClot from "./GIFs/BloodFlowWithClot.gif";
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

//
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState({});
  const [showRow1LightBox, setShowRow1LightBox] = useState(false);
  const [showRow2LightBox, setShowRow2LightBox] = useState(false);
  const [showRow3LightBox, setShowRow3LightBox] = useState(false);
  const [showRow4LightBox, setShowRow4LightBox] = useState(false);
  const rowDescriptions = contentDatabase.rowDescriptions;

  useEffect(() => {
    setImages({
      bloodClot,
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

  const Description = ({ description }) => {
    function formatDescription(description) {
      if (typeof description === "object" && description.links) {
        // if the description has a links object, replace strings matching the link keys with anchor tags
        let formattedText = description.text;
        Object.keys(description.links).forEach((key) => {
          const link = description.links[key];
          formattedText = formattedText.replace(
            key,
            `<a href="${link}" target="_blank" rel="noreferrer">${key}</a>`
          );
        });
        return formattedText;
      } else {
        // if there is no links object, just return the value of the "description" key's value
        return description;
      }
    }

    const formattedDescription = formatDescription(description);

    // separate the formatted text into paragraphs
    const paragraphs = formattedDescription
      .split("<PB>")
      .map((p, i) => (
        <p
          key={i}
          dangerouslySetInnerHTML={{ __html: p.replace("<PE>", "") }}
        />
      ));

    return <div>{paragraphs}</div>;
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
            console.log("links is");
            console.table(links);
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
    let [animationParent] = useAutoAnimate();

    return (
      <div id="row1" ref={animationParent}>
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
              <img alt={data.row1[key].alt} src={images[key]} />
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
          <div>{rowDescriptions.row2.description}</div>
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
              <img alt={data.row2[key].alt} src={images[key]} />
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
                  <img alt={data.row3[key].alt} src={images[key]} />
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
                  <img alt={data.row3[key].alt} src={images[key]} />
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
              <img alt={data.row4[key].alt} src={images[key]} />
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

  return (
    <div className="App">
      <Header headerContent={contentDatabase.header} />
      <div id="pageContent">
        <Row1 data={contentDatabase} />
        <Row2 data={contentDatabase} />
        <Row3 data={contentDatabase} />
        <Row4 data={contentDatabase} />
      </div>
    </div>
  );
}

export default App;
