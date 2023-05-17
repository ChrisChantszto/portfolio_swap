import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-sections">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li>Contact</li>
              <li>Brand</li>
              <li>Blog</li>
              <li>Community</li>
              <li>Litepaper</li>
              <li>Terms Of Service</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li>Customer Support</li>
              <li>Troubleshooting</li>
              <li>Guides</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Developers</h4>
            <ul>
              <li>Github</li>
              <li>Documentation</li>
              <li>Bug Bounty</li>
              <li>Audits</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <Row className="mt-4">
          <Col className="text-center">
            <div className="follow-us">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="copyright">Copyright 2023 Pepeswap</p>
          </Col>
          <Col>
            <p className="text-right rights">All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;