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

function App() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState({});
  const [showRow1LightBox, setShowRow1LightBox] = useState(false);
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
    });
  }, []);

  const Header = () => {
    return (
      <header>
        <div>Josh Wolper</div>
        <div>Software Engineer</div>
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
    return (
      <div id="row1">
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
              setShowRow1LightBox(true);
              handleImageClick(key);
            }}
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
            images={images}
            alt={data.row1[currentImage].alt}
            title={data.row1[currentImage].title}
            description={data.row1[currentImage].description}
          />
        )}
      </div>
    );
  };

  const Row2 = () => {
    return <div id="row2">row two</div>;
  };

  const Row3 = () => {
    return <div id="row3">row three</div>;
  };

  const Row4 = ({ data }) => {
    return (
      <div id="row4">
        {Object.keys(data.row4).map((key) => (
          <div
            key={key}
            onClick={() => {
              setShowRow1LightBox(false);
              setShowRow4LightBox(true);
              handleImageClick(key);
            }}
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
            images={images}
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
        <Row2 />
        <Row3 />
        <Row4 data={contentDatabase} />
      </div>
    </div>
  );
}

export default App;
