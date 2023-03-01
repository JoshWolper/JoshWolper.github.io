import { useState, useEffect, useRef } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import bioPicPlaceholder from "./bioPicPlaceholder.jpeg";
import bioShockCover from "./gameImages/squareVersions/bioshockSquare.png";
import darkSoulsCover from "./gameImages/squareVersions/dsSquare.png";
import groundedCover from "./gameImages/squareVersions/groundedSquare.jpeg";
import ootCover from "./gameImages/squareVersions/ootSquare.jpeg";
import outerWildsCover from "./gameImages/squareVersions/outerWildsSquare.png";
import subnauticaCover from "./gameImages/squareVersions/subnauticaSquare.png";
import portalCover from "./gameImages/squareVersions/portalSquare.png";
import limboCover from "./gameImages/squareVersions/limboSquare.png";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [animationParent] = useAutoAnimate();

  const handleHeaderClick = () => {
    setShowHeader(!showHeader);
  };
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
      }, 3000);

      return () => clearInterval(intervalId);
    }, [currentGame, gameImages]);

    const handlePrevClick = () => {
      const keys = Object.keys(gameImages);
      const currentIndex = keys.indexOf(currentGame);
      const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
      setCurrentGame(keys[prevIndex]);
    };

    const handleNextClick = () => {
      const keys = Object.keys(gameImages);
      const currentIndex = keys.indexOf(currentGame);
      const nextIndex = (currentIndex + 1) % keys.length;
      setCurrentGame(keys[nextIndex]);
    };

    const imgSrc = gameImages[currentGame];
    const imgStyle = {
      opacity: isFadingOut ? 0 : 1,
      borderRadius: "5px", // add border radius
      border: "1px solid white", // add border
    };

    return (
      <div id="gameCarouselWrapper">
        <div id="gameCarouselTitle">favorite games</div>
        <br />
        <div id="gameCarousel" ref={gameCarouselRef}>
          <img id="gameCarouselPic" src={imgSrc} style={imgStyle} />
        </div>
      </div>
    );
  };

  return (
    <header ref={animationParent}>
      <div id="headerTitle">
        <div>josh wolper | physics simulation PhD turned game dev</div>
      </div>
      <div id="headerButton">
        <button onClick={handleHeaderClick}>about me/contact</button>
      </div>
      {showHeader && (
        <div id="headerAbout">
          <div id="headerPic">
            <img src={bioPicPlaceholder} alt="bio pic" />
          </div>
          <div id="aboutText">
            Forever an avid gamer, I've always been energized by the
            intersection of art and science. In my PhD, this manifested as a
            love for developing computational algorithms to simulate material
            fracture for animation practitioners and engineers alike. More
            recently, I picked up UE5 and rekindled a passion for designing and
            implementing gameplay systems. Now, I'm excited to bring the breadth
            of skills I gained in CG research to the world of game dev! I’m a
            quick learner, and a strong generalist, well-versed in playing many
            roles in tough projects and communicating with interdisciplinary
            teammates.
          </div>
          <div id="faveGamesHolder">
            <FaveGamesCarousel />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
