import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Pricing = props => {
  return (
    <section id="pricing" className={props.className}>
      {/* <!-- Container --> */}
      <Container>
        {/* <!-- Section title --> */}
        <Row className="justify-content-center">
          <Col className="col-12 col-md-10 col-lg-6">
            <div className="section-title text-center">
              <h3>Pricing Calon Legislatif</h3>
            </div>
          </Col>
        </Row>

        <Row className="row align-items-center pricing-plans pb-5">
          {/* <!-- Plan 1 --> */}
          <Col className="col-12 col-lg-4 res-margin">
            <div className="price-table">
              <div className="icon">
                <img src="/images/icon/pricing-icon-1.png" alt="icon" width={100} />
              </div>
              <h3 className="plan-type">DPRD Kab/Kota</h3>
              <h2 className="plan-price">
                Mulai dari <strong>7jt</strong>
              </h2>

              <ul className="list-unstyled plan-list">
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 50.000 Dukungan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 5.000 Relawan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 5.000 TPS</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* <!-- Plan 2 --> */}
          <Col className="col-12 col-lg-4 res-margin">
            <div className="price-table plan-popular mb-4 mb-sm-5 mb-lg-0">
              <div className="icon">
                <img src="/images/icon/pricing-icon-2.png" alt="icon" width={100} />
              </div>
              <h3 className="plan-type">DPR RI / DPD RI</h3>
              <h2 className="plan-price">
                Mulai dari <strong>35jt</strong>
              </h2>

              <ul className="list-unstyled plan-list">
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 350.000 Dukungan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 50.000 Relawan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 20.000 TPS</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* <!-- Plan 3 --> */}
          <Col className="col-12 col-lg-4">
            <div className="price-table">
              <div className="icon">
                <img src="/images/icon/pricing-icon-3.png" alt="icon" width={100} />
              </div>
              <h3 className="plan-type">DPRD Provinsi</h3>
              <h2 className="plan-price">
                Mulai dari <strong>18jt</strong>
              </h2>

              <ul className="list-unstyled plan-list">
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 150.000 Dukungan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 25.000 Relawan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 15.000 TPS</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* <!-- Section title --> */}
        <Row className="justify-content-center mt-5">
          <Col className="col-12 col-md-10 col-lg-6">
            <div className="section-title text-center">
              <h3>Pricing Calon Kepala Daerah</h3>
            </div>
          </Col>
        </Row>

        <Row className="row align-items-center pricing-plans">
          {/* <!-- Plan 1 --> */}
          <Col className="col-12 col-lg-4 res-margin">
            <div className="price-table">
              <div className="icon">
                <img src="/images/icon/pricing-icon-1.png" alt="icon" width={100} />
              </div>
              <h3 className="plan-type">Bupati</h3>
              <h2 className="plan-price">
                Mulai dari <strong>50jt</strong>
              </h2>

              <ul className="list-unstyled plan-list">
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 1.500.000 Dukungan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 75.000 Relawan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 25.000 TPS</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* <!-- Plan 2 --> */}
          <Col className="col-12 col-lg-4 res-margin">
            <div className="price-table plan-popular mb-4 mb-sm-5 mb-lg-0">
              <div className="icon">
                <img src="/images/icon/pricing-icon-2.png" alt="icon" width={100} />
              </div>
              <h3 className="plan-type">Gubernur</h3>
              <h2 className="plan-price">
                Mulai dari <strong>150jt</strong>
              </h2>

              <ul className="list-unstyled plan-list">
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 15.000.000 Dukungan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 1.000.000 Relawan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 150.000 TPS</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* <!-- Plan 3 --> */}
          <Col className="col-12 col-lg-4">
            <div className="price-table">
              <div className="icon">
                <img src="/images/icon/pricing-icon-3.png" alt="icon" width={100} />
              </div>
              <h3 className="plan-type">Walikota</h3>
              <h2 className="plan-price">
                Mulai dari <strong>75jt</strong>
              </h2>

              <ul className="list-unstyled plan-list">
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 2.000.000 Dukungan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 100.000 Relawan</span>
                </li>
                <li>
                  <img src="/images/icon/check-circle.png" alt="icon" width={20} className="me-1" />
                  <span>Maksimum 50.000 TPS</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
