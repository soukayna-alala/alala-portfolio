import { Typewriter } from "react-simple-typewriter";
import styles from "./AboutMe.module.css";

export function AboutMe() {
  const {
    h1,
    paragraphContainer,
    imageContainer,
    paragraph,
    container,
    aboutMeImage,
  } = styles;

  return (
    <div className={container}>
      <div className={paragraphContainer}>
        <div className={h1}>
          <Typewriter
            words={["Front-End Developer"]}
            loop={1}
            typeSpeed={120}
            delaySpeed={1200}
          />
        </div>
        <div className={paragraph}>
          <p>
            Hi there,
            <br /> My name is Soukayna, I'm 24 years old and I live <br />
            in London. I entered the world of coding since 2022 <br />
            and I'm continuously practicing and working hard to develop and to{" "}
            learn more things.
            <br />
            I'm looking to get my first role as a Junior Frontend developer.
          </p>
          <p>
            <br />
            My goal is to keep learning new things, <br />
            and to improve my skills everyday, analyse and <br />
            solve UI and programing issues. <br />
            Also being able to work independently
            <br />
            and in a team.
          </p>
        </div>
      </div>

      <div className={imageContainer}>
        <img
          className={aboutMeImage}
          src="myPicture.jpg"
          alt="Soukayna Alala's image "
        />
      </div>
    </div>
  );
}
