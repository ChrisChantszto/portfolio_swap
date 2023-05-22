import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-sections">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li className='footer-link'>Contact</li>
              <li className='footer-link'>Brand</li>
              <li className='footer-link'>Blog</li>
              <li className='footer-link'>Community</li>
              <li className='footer-link'>Litepaper</li>
              <li><a
                  href="/terms-of-service"
                  className="footer-link"
              >Terms Of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li className='footer-link'>Customer Support</li>
              <li className='footer-link'>Troubleshooting</li>
              <li className='footer-link'>Guides</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Developers</h4>
            <ul>
              <li><a
                href="https://github.com/Uniswap"
                target="_blank"
                rel="noopener noreferrer"
                className='footer-link'
              >
                Github
              </a></li>
              <li className='footer-link'>Documentation</li>
              <li className='footer-link'>Bug Bounty</li>
              <li className='footer-link'>Audits</li>
              <li className='footer-link'>Careers</li>
            </ul>
          </div>
        </div>
        <Row className="mt-4">
          <Col className="text-center">
            <div className="follow-us">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="copyright">&copy; Copyright 2023 Pepeswap</p>
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