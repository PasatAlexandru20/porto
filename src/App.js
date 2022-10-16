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
        <div>
          <Techstacks />
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
