import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SingleImage = () => {
  return (
    <section id="home" className="banner image-bg">
      <Container>
        <Row className="align-items-center">
          <Col className="col-12 col-lg-6 res-margin">
            <div className="banner-text">
              <h1
                className="wow fadeInUp"
                data-wow-offset="10"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                Pantau Relawan
              </h1>
              <h2>Aplikasi Pemenangan Pemilu</h2>

              <p
                className="wow fadeInUp"
                data-wow-offset="10"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                Menghadirkan Aplikasi Pemenangan Pemilu bagi Calon Legislatif dan Kepala Daerah
                sebagai salah satu Alat Bantu dan Solusi Cerdas dalam Manajemen Relawan di Pilcaleg
                dan Pilkada.
              </p>

              <div
                className="button-store wow fadeInUp"
                data-wow-offset="10"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <a
                  href="#"
                  className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 me-sm-3"
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

          <Col className="col-12 col-lg-6">
            <div
              className="banner-image wow fadeInUp"
              data-wow-offset="10"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <img className="bounce-effect" src="images/banner/single-welcome.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="wave-effect wave-anim">
        <div className="waves-shape shape-one">
          <div className="wave wave-one"></div>
        </div>

        <div className="waves-shape shape-two">
          <div className="wave wave-two"></div>
        </div>

        <div className="waves-shape shape-three">
          <div className="wave wave-three"></div>
        </div>
      </div>
    </section>
  );
};

export default SingleImage;
