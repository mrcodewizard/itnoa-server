import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
import { useLocation } from "react-router-dom";

const footerBg = {
  backgroundImage: "url(./images/itnoa-footer.jpg)",
};
const footerLogo = process.env.PUBLIC_URL + "/images/itnoa-light.png";

function Footer() {
  const location = useLocation();
  return (
    <div className="footer-section" style={footerBg}>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="footer-top">
              <div className="footer-logo">
                <img src={footerLogo} alt="footer-logo" />
              </div>
              <p className="footer-desc">
                Please reach for your queries & suggestions through our most
                <br /> active social media channels{" "}
              </p>

              <ul className="footer-social">
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-bottom">
              <Row>
                <Col xs={12} lg={4}>
                  <p>Copyright © 2022 | All Right Reserved by ITNOA Devs</p>
                </Col>
                <Col xs={12} lg={8}>
                  <ul className="footer-pages">
                    <li className="disp-xs-none">
                      <a
                        href={`${
                          location.pathname === "/" ? "#home" : "/#home"
                        }`}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${
                          location.pathname === "/" ? "#about" : "/#about"
                        }`}
                      >
                        About
                      </a>
                    </li>
                    <li className="disp-xs-none">
                      <a
                        href={`${
                          location.pathname === "/" ? "#contact" : "/#contact"
                        }`}
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/terms">Terms & Conditions</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
