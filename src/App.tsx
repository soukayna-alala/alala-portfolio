import "./App.css";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import { AboutMe } from "./components/AboutMe/AboutMe.tsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <AboutMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
