import styles from "./Projects.module.css";

export function Projects() {
  const { content, title, container, img, projectContainer } = styles;
  return (
    <main className="main">
      <div className={title}>My Project</div>
      <div className={container}>
        <div className={projectContainer}>
          <div>
            <img
              className={img}
              src="calculator.jpeg"
              alt="Calculator screenShot"
            />
          </div>
          <div className={content}>
            <h4>Calculator</h4>
            <p>hhh</p>
          </div>
        </div>
        <div className={projectContainer}>
          <div className={content}>
            <h4>Weather App</h4>
            <p>hhh</p>
          </div>
          <div>
            <img
              className={img}
              src="weather.jpeg"
              alt="Weather app screenShot"
            />
          </div>
        </div>
        <div className={projectContainer}>
          <div>
            <img
              className={img}
              src="tic-tac-toe.jpeg"
              alt="Tic Tac Toe screenShot"
            />
          </div>
          <div className={content}>
            <h4>Tic-Tac-Toe</h4>
            <p>hhh</p>
          </div>
        </div>
      </div>
    </main>
  );
}
