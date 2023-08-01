import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import bioPicPlaceholder from "./bioPicPlaceholder.jpeg";
import onePageResume from "./PDFs/OnePageResume.pdf";
import fullResume from "./JoshWolperResume.pdf";
import flower from "./flower.mp4";
import card from "./card.png";

const Header = (props) => {
  const { headerContent } = props;
  const [showHeader, setShowHeader] = useState(false);
  const [animationParent] = useAutoAnimate();

  const handleHeaderClick = () => {
    setShowHeader(!showHeader);
  };

  const downloadResume = () => {
    fetch(fullResume).then((response) => {
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "OnePageResume.pdf";
        link.click();
      });
    });
  };
      <div id="headerTitle">
        <div>
          {/* <div id="headerName">{headerContent.heading}</div> */}
          {/* <img alt="header, logo" id="headerLogo" src={card} /> */}
        </div>
      </div>
  return (
    <header ref={animationParent}>
      <div id="headerTop">
        <div id="headerSub">{headerContent.subheading}</div>
        <div id="headerButtons">
          <button id="headerButton" onClick={handleHeaderClick}>
            about me
          </button>
          <button id="resume" onClick={downloadResume}>
            resume
          </button>
      </div>
      </div>
      {showHeader && (
        <div id="headerAbout">
          <div id="headerPic">
            <img src={bioPicPlaceholder} alt="bio pic" />
          </div>
          <div id="aboutText">{headerContent.bio}</div>
        </div>
      )}
    </header>
  );
};

export default Header;
