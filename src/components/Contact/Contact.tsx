import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:tanmay131111@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:tanmay131111@gmail.com">
             tanmay131111@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+918849319091">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+918849319091">(+91)8849319091</a>
        </div>
      </div>
    </Container>
  );
}
