import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              
            </header>
            <div className="body">
              <h3>Pictora – AI-Powered Image Enhancement App</h3>
              <p>
                Developed a cross-platform mobile app that restores and enhances images using GFPGAN (face restoration) and Real-ESRGAN (super-resolution).

Built with Python-based AI models integrated into a user-friendly mobile interface.

Deployed on both Google Play Store and Apple App Store, making advanced image enhancement accessible to everyday users.
              </p>
            </div>
            
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              
            
            </header>
            <div className="body">
              <h3> ConcertCircle – Event Management Platform  </h3>
              <p>
                

Phase 1 (PHP): Built a robust admin panel for managing concerts, artists, and events.

Phase 2 (MERN Stack): Currently developing a scalable, modern web application with MongoDB, Express, React, and Node.js to enhance performance, improve UI/UX, and support real-time updates.

Live Project: <a href="https://concertcircle.com/" target="_blank"> concertcircle.com</a>
              </p>
            </div>
           
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              
            </header>
            <div className="body">
              <h3>Smart Surveillance – Real-Time Person Detection Prototype</h3>
              <p>
                Built a real-time monitoring system using Python, YOLO (You Only Look Once), and OpenCV for accurate person detection.

Designed to enhance security and surveillance applications by providing instant detection through live video streams.

Demonstrated the potential for automation in safety, monitoring, and crowd management systems
              </p>
            </div>
          
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
