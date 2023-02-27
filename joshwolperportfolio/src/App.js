//imports
import { useState, useEffect } from "react";
import "./App.css";
//json import
import contentDatabase from "./contentDatabase.json";
//component imports
import LightBox from "./LightBox";
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

  const Header = () => {
    const [showHeader, setShowHeader] = useState(false);
    const [animationParent] = useAutoAnimate();

    const handleHeaderClick = () => {
      setShowHeader(!showHeader);
    };

    return (
      <header ref={animationParent}>
        <div id="headerTitle">
          <div>Josh Wolper</div>
          <div>Game designer and cutie pie</div>
        </div>
        <div id="headerButton">
          <button onClick={handleHeaderClick}>about me/contact</button>
        </div>
        {showHeader && (
          <div id="headerAbout">
            <div>
              Me love video games! Me play them all day long and sometimes me
              make my own games too. Me already made a game where you can jump
              really high and collect coins, and another game where you have to
              solve puzzles to save the princess. Me think they are pretty good
              games, but me want to make even better ones! Me like to use a
              program called Scratch to make my games, and me also watch videos
              to learn new things. Me want to make a game where you can fly like
              a superhero and save the world from aliens. Me know it will be
              hard work, but me am not afraid. Me love making games and me will
              keep doing it forever!
            </div>
          </div>
        )}
      </header>
    );
  };

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
          <h2>Some stuff</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, god dammit
          </div>
        </div>
        {Object.keys(data.row1).map((key) => (
          <div
            key={key}
            onClick={() => {
              setShowRow4LightBox(false);
              setShowRow2LightBox(false);
              setShowRow3LightBox(false);
              setShowRow1LightBox(true);
              handleImageClick(key);
            }}
            className="imageBox"
            data-title={data.row1[key].title}
          >
            <img alt={data.row1[key].alt} src={images[key]} />
          </div>
        ))}

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
        {Object.keys(data.row2).map((key) => (
          <div
            key={key}
            onClick={() => {
              setShowRow4LightBox(false);
              setShowRow2LightBox(true);
              setShowRow3LightBox(false);
              setShowRow1LightBox(false);
              handleImageClick(key);
            }}
            className="imageBox"
            data-title={data.row2[key].title}
          >
            <img alt={data.row2[key].alt} src={images[key]} />
          </div>
        ))}

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
        <div className="mainDescriptionBox">
          <h2>Some stuff</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, god dammit
          </div>
        </div>
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
          <h2>Some stuff</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, god dammit
          </div>
        </div>
        {Object.keys(data.row3).map((key) => (
          <div
            key={key}
            className="imageBox"
            onClick={() => {
              setShowRow4LightBox(false);
              setShowRow1LightBox(false);
              setShowRow2LightBox(false);
              setShowRow3LightBox(true);
              handleImageClick(key);
            }}
            data-title={data.row3[key].title}
          >
            <img alt={data.row3[key].alt} src={images[key]} />
          </div>
        ))}

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
        <div className="mainDescriptionBox">
          <h2>Some stuff</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, god dammit
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <Header />
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
