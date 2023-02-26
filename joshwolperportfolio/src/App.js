import { useState, useEffect } from "react";
import "./App.css";
//image imports
import bloodClot from "./GIFs/BloodFlowWithClot.gif";
import breadHIGH from "./GIFs/breadHIGH.gif";
import Glacier2HIGH from "./GIFs/Glacier2HIGH.gif";
import orangeHIGH from "./GIFs/orangeHIGH.gif";
import contentDatabase from "./contentDatabase.json";
import LightBox from "./LightBox";

function App() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState({});

  useEffect(() => {
    setImages({
      bloodClot,
      breadHIGH,
      Glacier2HIGH,
      orangeHIGH,
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
          <div key={key} onClick={() => handleImageClick(key)}>
            <img alt={data.row1[key].alt} src={images[key]} />
          </div>
        ))}

        {currentImage && (
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

  const Row4 = () => {
    return <div id="row4">row four</div>;
  };

  return (
    <div className="App">
      <Header />
      <div id="pageContent">
        <Row1 data={contentDatabase} />
        <Row2 />
        <Row3 />
        <Row4 />
      </div>
    </div>
  );
}

export default App;
