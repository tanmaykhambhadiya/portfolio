import { Container } from "./styles";
import tanmay from "../../assets/tanmay.jpg";
import reactIcon from "../../assets/react-icon.svg";
import cIcon from "../../assets/c.svg";
import nodeIcon from "../../assets/node-icon.svg";
import mongodb from "../../assets/mongodb-icon-1.svg";
import mysql from "../../assets/mysql-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import github from "../../assets/github.svg";
import shopify from "../../assets/shopify.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
Welcome to my portfolio! I’m Tanmay Khambhadiya, a passionate full stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and Python-based backend development. With a strong foundation in crafting scalable applications, I enjoy transforming ideas into seamless digital experiences that combine performance, functionality, and intuitive design.          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
Throughout my journey, I have expanded my skill set from building robust web platforms to exploring mobile application development, allowing me to deliver end-to-end solutions across multiple platforms. Whether it’s architecting efficient backend systems, designing user-friendly interfaces, or developing cross-platform apps, I thrive on creating products that drive impact and innovation.          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
As a quick learner and highly adaptable professional, I embrace new technologies with ease and work flexibly to align with client needs. My versatility, paired with expertise in Python, the MERN stack, PHP, mobile development, MySQL, and MongoDB — along with hands-on experience leading teams and delivering projects on time — empowers me to approach challenges with creativity and deliver solutions that not only meet but exceed expectations.          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={mongodb} alt="mongodb" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={mysql} alt="mysql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={github} alt="github" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={shopify} alt="Shopify" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={tanmay} alt="Tanmay Khambhadiya" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
