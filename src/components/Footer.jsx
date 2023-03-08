import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = props => {
  useEffect(() => {
    // new WOW.WOW().init();
  }, []);

  return (
    <footer>
      {/* <!-- Widgets --> */}
      <div className="footer-widgets">
        <Container>
          <Row>
            {/* <!-- Footer logo --> */}
            <Col className="col-12 col-md-6 col-lg-3 res-margin">
              <div className="widget">
                <p className="footer-logo">
                  <img src="/images/logo-white.png" alt="Pantau Relawan" data-rjs="2" />
                </p>
                <p>
                  Jl. SMA 14 No. 32, Cililitan <br /> Jakarta 13640 <br /> Indonesia
                </p>

                {/* <!-- Social links --> */}
                <div className="footer-social">
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter fa-fw"></i>
                  </a>
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook-f fa-fw"></i>
                  </a>
                  <a href="#" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Col>

            {/* <!-- Useful links --> */}
            <Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
              <div className="widget">
                <h6>Navigation</h6>

                <ul className="footer-menu">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#screenshots">Screenshots</a>
                  </li>
                  <li>
                    <a href="#support">Support</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                </ul>
              </div>
            </Col>

            {/* <!-- Product help --> */}
            <Col className="col-12 col-md-6 col-lg-3 res-margin">
              <div className="widget">
                <h6>Contact</h6>

                <ul className="footer-menu">
                  <li>
                    <a href="#">021 8004423</a>
                  </li>
                  <li>
                    <a href="#">021 8004423</a>
                  </li>
                  <li>
                    <a href="#">hello@pantaurelawan.com</a>
                  </li>
                </ul>
              </div>
            </Col>

            {/* <!-- Download --> */}
            <Col className="col-12 col-md-6 col-lg-3">
              <div className="widget">
                <h6>Download</h6>

                <div className="button-store">
                  <a
                    href="#"
                    className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3"
                  >
                    <i className="fab fa-google-play"></i>
                    <p>
                      Available on<span>Google Play</span>
                    </p>
                  </a>
                  <a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0">
                    <i className="fab fa-apple"></i>
                    <p>
                      Download on<span>App Store</span>
                    </p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <!-- Copyright --> */}
      <div className="footer-copyright">
        <Container>
          <Row>
            <Col className="col-12">
              {/* <!-- Text --> */}
              <p className="copyright text-center">
                Copyright © 2023{' '}
                <a href="#" target="_blank">
                  Lamacca Kreatif Solusi
                </a>
                . All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
