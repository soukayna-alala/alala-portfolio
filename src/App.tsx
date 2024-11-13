import "./App.css";
import { Header } from "./components/Header/Header.tsx";
import { AboutMe } from "./components/AboutMe/AboutMe.tsx";
import { Skills } from "./components/Skills/Skills.tsx";
import { Projects } from "./components/Projects/Projects.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <AboutMe />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default App;
