import "./App.css";
// import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { AboutMe } from "./components/AboutMe/AboutMe.tsx";
import { Skills } from "./components/Skills/Skills.tsx";
import { Projects } from "./components/Projects/Projects.tsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <AboutMe />
        <Projects />
        <Skills />
        {/*<Footer />*/}
      </div>
    </>
  );
}

export default App;
