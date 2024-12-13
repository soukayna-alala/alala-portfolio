import { Header } from "./components/Header/Header.tsx";
import { AboutMe } from "./components/AboutMe/AboutMe.tsx";
import { Skills } from "./components/Skills/Skills.tsx";
import { Projects } from "./components/Projects/Projects.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
      </main>
      <Footer />
    </>
  );
}

export default App;
