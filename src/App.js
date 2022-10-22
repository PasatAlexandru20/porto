import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Techstacks from "./components/Techstacks";
import Title from "./components/Title";

function App() {
  return (
    <div>
        <Title />
        <div className="pageContainer">
          <div>
            <About />
            <Projects />
          </div>
          <div className="container">
            <Techstacks />
            <Contact />
          </div>
        </div>

        <footer>
          <div className="header">
            <h1>
              <span>Alex </span>Pasat
            </h1>
          </div>
          <div>2022 @ All rights reserved</div>
          <div>Instagram Facebook Twitter </div>
        </footer>
     
    </div>
  );
}

export default App;
