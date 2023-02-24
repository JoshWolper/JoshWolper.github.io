import logo from "./logo.svg";
import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Josh Wolper</h1>
      <h2>Software Engineer</h2>
    </header>
  );
};

const Row1 = () => {
  return <div id="row1">row one</div>;
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

function App() {
  return (
    <div className="App">
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
