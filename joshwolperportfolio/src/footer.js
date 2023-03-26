import { useState, useEffect, useRef } from "react";
import bioShockCover from "./gameImages/squareVersions/bioshockSquare.png";
import darkSoulsCover from "./gameImages/squareVersions/dsSquare.png";
import groundedCover from "./gameImages/squareVersions/groundedSquare.jpeg";
import ootCover from "./gameImages/squareVersions/ootSquare.jpeg";
import outerWildsCover from "./gameImages/squareVersions/outerWildsSquare.png";
import subnauticaCover from "./gameImages/squareVersions/subnauticaSquare.png";
import portalCover from "./gameImages/squareVersions/portalSquare.png";
import limboCover from "./gameImages/squareVersions/limboSquare.png";
import onePageResume from "./PDFs/OnePageResume.pdf";
import mattLogo from "./mattLogo.png";
import resumeThumbnail from "./PDFs/resumeThumbnail.png";

const Footer = () => {
  const FaveGamesCarousel = () => {
    const gameImages = {
      bioShockCover,
      darkSoulsCover,
      groundedCover,
      ootCover,
      outerWildsCover,
      subnauticaCover,
      portalCover,
      limboCover,
    };
    const [currentGame, setCurrentGame] = useState(Object.keys(gameImages)[0]);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const gameCarouselRef = useRef(null);

    useEffect(() => {
      // Update the current game every 3 seconds
      const intervalId = setInterval(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          const keys = Object.keys(gameImages);
          const currentIndex = keys.indexOf(currentGame);
          const nextIndex = (currentIndex + 1) % keys.length;
          setCurrentGame(keys[nextIndex]);
          setIsFadingOut(false);
        }, 500); // wait for fade out transition to complete before updating image
      }, 1500);

      return () => clearInterval(intervalId);
    }, [currentGame]);

    const imgSrc = gameImages[currentGame];
    const imgStyle = {
      opacity: isFadingOut ? 0 : 1,
      borderRadius: "5px", // add border radius
      border: "1px solid white", // add border
    };

    return (
      <div id="gameCarouselWrapper">
        <div id="gameCarouselTitle">favorite games</div>
        <div id="gameCarousel" ref={gameCarouselRef}>
          <img id="gameCarouselPic" src={imgSrc} style={imgStyle} />
        </div>
      </div>
    );
  };

  const downloadResume = () => {
    fetch(onePageResume).then((response) => {
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "OnePageResume.pdf";
        link.click();
      });
    });
  };

  return (
    <footer id="footer">
      <FaveGamesCarousel />
      <div id="resumeBlock" onClick={downloadResume}>
        <div id="resume">resume</div>
        <img id="resumeThumbnail" src={resumeThumbnail} />
      </div>
      <a
        href="https://www.mattalexander.gallery/"
        target="_blank"
        rel="noreferrer"
        id="mattInfo"
      >
        <div>website built by:</div>
        <img src={mattLogo} />
      </a>
    </footer>
  );
};

export default Footer;
