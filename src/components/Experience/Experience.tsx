import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div
        className="projects"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3>&#123; Tech Guy &#125;</h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Concert Circle  (Mar 2025 - Present)
            </h4>
            
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3>&#123; Full Stack Web Intern &#125;</h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              SPARROW SOFTTECH (Mar 2024 - Oct 2024)
            </h4>
            
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
