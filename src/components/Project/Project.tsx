import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import shopify from "../../assets/shopify.svg";
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
              <div className="project-links">
                <a
                  href="https://offzy.ignitralabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Offzy live site"
                >
                  <img src={externalLink} alt="Visit Offzy" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Offzy – AI-Based Corporate Offsite Planner</h3>
              <p>
                Built Offzy, an AI-powered offsite planner for corporate companies that helps teams discover venues and intelligently plan their corporate offsites end-to-end.

Delivered as a SaaS web product with a smart recommendation flow that simplifies venue, itinerary, and activity planning for businesses.

Live Site: <a href="https://offzy.ignitralabs.com" target="_blank" rel="noopener noreferrer"> offzy.ignitralabs.com</a>
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
              <h3>Pictora – AI-Powered Image Enhancement App</h3>
              <p>
                Developed a cross-platform mobile app that restores and enhances images using GFPGAN (face restoration) and Real-ESRGAN (super-resolution).

Built with Python-based AI models integrated into a user-friendly mobile interface.

Deployed on both the <a href="https://play.google.com/store/apps/details?id=com.pictora&hl=en_IN" target="_blank" rel="noopener noreferrer">Google Play Store</a> and <a href="https://apps.apple.com/us/app/pictora-ai-photo-enhancer/id6738835361" target="_blank" rel="noopener noreferrer">Apple App Store</a>, making advanced image enhancement accessible to everyday users.
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

Live Project: <a href="https://concertcircle.infinityfree.me/?i=1" target="_blank" rel="noopener noreferrer"> concertcircle.infinityfree.me</a>
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

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={shopify} alt="Shopify" width="50" />
              <div className="project-links">
                <a
                  href="https://clothbar.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Clothbar live store"
                >
                  <img src={externalLink} alt="Visit Clothbar" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Clothbar – Shopify Men's Fashion Store</h3>
              <p>
                Designed and developed a fully custom Shopify e-commerce store for Clothbar, a men's fashion brand specializing in printed and patterned shirts (floral, tribal, camo, and tropical designs).

Built responsive collection and product pages, configured discount codes and seasonal "End of Season" sale campaigns, free-shipping logic on prepaid orders, and a newsletter signup to drive conversions.

Live Store: <a href="https://clothbar.in" target="_blank" rel="noopener noreferrer"> clothbar.in</a>
              </p>
            </div>

          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={shopify} alt="Shopify" width="50" />
              <div className="project-links">
                <a
                  href="https://sunmora.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sunmora live store"
                >
                  <img src={externalLink} alt="Visit Sunmora" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Sunmora – Shopify Luxury Shirt Store</h3>
              <p>
                Built a polished Shopify storefront for SUNMORA, a premium menswear brand offering hand-crafted luxury shirts for the urban market.

Implemented filterable product collections, a video showcase section, sale pricing, and WhatsApp/email customer support integration, all wrapped in conversion-focused product pages.

Live Store: <a href="https://sunmora.in" target="_blank" rel="noopener noreferrer"> sunmora.in</a>
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
              <div className="project-links">
                <a
                  href="https://totesberry.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Totesberry live store"
                >
                  <img src={externalLink} alt="Visit Totesberry" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Totesberry – Handcrafted Home Decor E-Commerce Store</h3>
              <p>
                Built Totesberry, an artisan e-commerce store themed "Handcrafted with Love," offering handcrafted home decor, terracotta art figurines, bags, and gifting showpieces while supporting local artisans.

Implemented festive collections (wedding, Diwali, Christmas), in-house bag customization, WhatsApp ordering, and same-day delivery within Vadodara — all on a custom PHP-based storefront.

Live Store: <a href="https://totesberry.com/" target="_blank" rel="noopener noreferrer"> totesberry.com</a>
              </p>
            </div>

          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
