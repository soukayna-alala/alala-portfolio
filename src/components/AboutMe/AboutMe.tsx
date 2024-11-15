import { Typewriter } from "react-simple-typewriter";
import styles from "./AboutMe.module.css";

export function AboutMe() {
  const { h1, paragraph, container, aboutMeImage } = styles;

  return (
    <>
      <div className={container}>
        <div>
          <h1 className={h1}>
            <Typewriter
              words={["Front-End Developer"]}
              loop={1}
              typeSpeed={120}
              delaySpeed={1200}
            />
          </h1>
          <p className={paragraph}>
            Hi there, my name is Soukayna, I'm 24 years old and I live in
            London.
          </p>

          <p className={paragraph}>
            I entered the world of coding since 2022 and I'm continuously
            practicing and working hard to develop and to learn more things. I'm
            looking to get my first role as a Junior Frontend developer.
          </p>
          <p className={paragraph}>
            My goal is to keep learning new things, and to improve my skills
            everyday, analyse and solve UI and programing issues. Also being
            able to work independently and in a team.
          </p>
        </div>
        <img
          className={aboutMeImage}
          src="myPicture.jpg"
          alt="Soukayna Alala's image "
        />
      </div>
    </>
  );
}
