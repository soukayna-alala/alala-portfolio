import { Typewriter } from "react-simple-typewriter";
import styles from "./AboutMe.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { Button } from "../Button/Button.tsx";

export function AboutMe() {
  const iso8601Dob = "2000/06/20";
  const dateOfBirth = dayjs(iso8601Dob);
  const myAgeInYears = dayjs().diff(dateOfBirth, "years");
  const { h1, bold, paragraph, container, aboutMeImage, paragraphGap } = styles;

  return (
    <>
      <h1 className={h1} id="aboutMe">
        <Typewriter
          words={["Front-End Developer"]}
          loop={1}
          typeSpeed={120}
          delaySpeed={1200}
        />
      </h1>
      <div className={container}>
        <img
          className={aboutMeImage}
          src="soukayna_alala.jpg"
          alt="Soukayna Alala piture "
        />
        <div className={paragraphGap}>
          <p className={paragraph}>
            Hi there, my name is Soukayna. I'm {myAgeInYears} years old, and I
            live in London. I entered the world of coding in 2022, and I am
            continuously practicing and working hard to develop my skills.
          </p>
          <p className={paragraph}>
            I am dedicated to building my expertise in front-end development,
            including&nbsp;
            <span className={bold}>
              React, JavaScript, TypeScript, Node.js, HTML, CSS, Vitest, and Git
            </span>
            .
          </p>
          <p className={paragraph}>
            I am now eager to apply these skills to real-world projects and
            contribute to a collaborative team. I am highly motivated, a quick
            learner, and ready to take on challenges and grow in this field.
          </p>
          <p className={paragraph}>
            I’m also open to volunteer opportunities to gain hands-on experience
            and showcase my abilities. My goal is to keep learning new things,
            improve my skills every day, analyze and solve UI and programming
            issues, and be able to work independently in a team.
          </p>
        </div>
        <Button
          label={"My resume"}
          size={"regular"}
          icon={faArrowRight}
          variant={"primary"}
          target={"_blank"}
          isAnchor={true}
          href={
            "https://github.com/soukayna-alala/cv/blob/1be4b4af8887a8ffea5fd2ce490298b5bd4bb483/Soukayna-Alala-Junior-Front-End-Developer.pdf"
          }
        />
      </div>
    </>
  );
}
