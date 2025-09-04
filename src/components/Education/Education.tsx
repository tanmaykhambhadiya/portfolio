import { Container } from "../Experience/styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="educations">
      <h2>Education</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3>  B.Tech in Computer Science and Engineering</h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Gyanmajari Innovative University
            </h4>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              2023 - 2027
            </p>
          </div>
        </ScrollAnimation>

        
      </div>
    </Container>
  );
}
