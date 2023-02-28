import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = props => {
  return (
    <section id="services" className={props.className}>
      {/* <!-- Container --> */}
      <Container>
        {/* <!-- Section title --> */}
        <Row className="justify-content-center">
          <Col className="col-12 col-md-10 col-lg-6">
            <div className="section-title text-center">
              <h3>Strategi Pantau Relawan</h3>
              <p>
                Pantau Relawan Apps adalah tools yang tepat dalam mengatur langkah dan Strategi
                memenangkan Pilcaleg dan Pilkada.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* <!-- Service 1 --> */}
          <Col
            className="col-12 col-lg-4 res-margin wow fadeInUp"
            data-wow-offset="10"
            data-wow-duration="1s"
            data-wow-delay="0"
          >
            <div className={props.serviceClassName}>
              <div className="icon icon-basic-server2"></div>

              <h5>Pemetaan Data</h5>
              <p>
                Data dan informasi yang dihasilkan akan memberikan masukkan tentang apa yang harus
                dilakukan kedepannya. Hal ini membuat penyusunan langkah strategis menjadi lebih
                tepat. Data dan informasi yang tidak akurat, tentunya akan menghasilkan keputusan
                dan gerakan yang salah.
              </p>
            </div>
          </Col>

          {/* <!-- Service 2 --> */}
          <Col
            className="col-12 col-lg-4 res-margin wow fadeInUp"
            data-wow-offset="10"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className={props.serviceClassName}>
              <div className="icon icon-basic-headset"></div>

              <h5>Monitoring Data</h5>
              <p>
                Pembentukan basis data dan berbagai informasi dalam sinergi langkah strategis
                pemenangan merupakan salah satu bagian terpenting agar dapat mengevaluasi gerakan
                secara terstruktur dan efektif.
              </p>
            </div>
          </Col>

          {/* <!-- Service 3 --> */}
          <Col
            className="col-12 col-lg-4 res-margin wow fadeInUp"
            data-wow-offset="10"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <div className={props.serviceClassName}>
              <div className="icon icon-software-pen"></div>

              <h5>Konsolidasi Tim</h5>
              <p>
                ​​Konsolidasi seluruh gerakan akan sangat mudah dilakukan dengan Aplikasi ini karena
                dapat memudahkan para relawan menginputkan data di lapangan dan seluruh data akan
                secara real-time terintegrasi agar analisis data dapat dengan mudah dilakukan.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
