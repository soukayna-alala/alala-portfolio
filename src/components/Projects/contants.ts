import { IProject } from "./interfaces.ts";

const weatherAppURL = " https://openweathermap.org/api";
export const projectList: IProject[] = [
  {
    imgSrc: "calculator.jpeg",
    imgAlt: "Calculator screenShot",
    heading: "Calculator",
    description: "I developed this app using Javascript, HTML, CSS, Git.",
    gitHubLink: "https://github.com/soukayna-alala/calculator",
  },
  {
    imgSrc: "weather.jpeg",
    imgAlt: "Weather app screenShot",
    heading: "Weather App",
    description: `I developed a weather application using React, Typescript, HTML, CSS and weather API from ${weatherAppURL} Here is the Git repo`,
    gitHubLink: "https://github.com/soukayna-alala/react-weather-app",
  },
  {
    imgSrc: "tic-tac-toe.jpeg",
    imgAlt: "Tic Tac Toe screenShot",
    heading: "Tic-Tac-Toe",
    description:
      "Tic-Tac-Toe challenge, built with: React, Javascript, CSS and HTML.\n" +
      "If you are interested in having a look, check out my Github",
    gitHubLink: "https://github.com/soukayna-alala/Tic-Tac-Toe",
  },
  {
    imgSrc: "Investment-Calculator.jpeg",
    imgAlt: "Investment Calculator",
    heading: "Investment Calculator",
    description:
      "I developed this app using React, Javascript, HTML, CSS and Git.",
    gitHubLink: "https://github.com/soukayna-alala/Investment-Calculator",
  },
  {
    imgSrc: "todo-App.jpeg",
    imgAlt: "todo App",
    heading: "TODO App",
    description:
      "built with: React, TypeScript, CSS and HTML. If you are interested in having a look, check out my Github",
    gitHubLink: "https://github.com/soukayna-alala/react-todo-list",
  },

  {
    imgSrc: "star-wars-challenge.jpeg",
    imgAlt: "star wars challenge",
    heading: "Star Wars Challenge",
    description:
      "built with: React, TypeScript, CSS and HTML. If you are interested in having a look, check out my Github",
    gitHubLink: "https://github.com/soukayna-alala/star-wars-react-challenge",
  },
];
