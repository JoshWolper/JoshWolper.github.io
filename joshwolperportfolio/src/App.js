import { useState, useEffect, useRef } from "react";
import "./App.css";
//image imports
import bloodClot from "./GIFs/BloodFlowWithClot.gif";
import breadHIGH from "./GIFs/breadHIGH.gif";
import Glacier2HIGH from "./GIFs/Glacier2HIGH.gif";
import orangeHIGH from "./GIFs/orangeHIGH.gif";

const Header = () => {
  return (
    <header>
      <div>Josh Wolper</div>
      <div>Software Engineer</div>
    </header>
  );
};

const Row1 = () => {
  return (
    <div id="row1">
      <div className="content">
        blsh blsh bjkdsa fhnkjldeshbfnvkaljdfhbvkjlsdfh
      </div>
      <img src={breadHIGH} />
      <img src={Glacier2HIGH} />
      <img src={orangeHIGH} />
      <img src={bloodClot} />
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

const LightBox = () => {
  return (
    <div id="lightbox">
      <div id="lightboxClose">❌</div>
      <div id="lightboxPrev">◀</div>
      <div id="lightboxNext">▶</div>
      <div id="lightBoxImage">
        <img src={breadHIGH} />
      </div>
      <div id="lightBoxTitle">lightbox title</div>
      <div id="lightBoxContent">lightbox content</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <LightBox />
      <Header />
      <div id="pageContent">
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
      </div>
    </div>
  );
}

export default App;
