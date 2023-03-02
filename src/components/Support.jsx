import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = props => {
  return (
    <section id="support" className={props.className}>
      {/* <!-- Container --> */}
      <Container>
        {/* <!-- Section title --> */}
        <Row className="justify-content-center">
          <Col className="col-12 col-md-10 col-lg-6">
            <div className="section-title text-center">
              <h3>Frequently Asked Questions</h3>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="col-12 col-lg-10 offset-lg-1">
            {/* <!-- FAQ accordion --> */}
            <Accordion defaultActiveKey="0" flush>
              {/* <!-- Question 1 --> */}
              <Accordion.Item eventKey="0">
                <Accordion.Header as="h5">Apa itu Aplikasi Pantau Relawan?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Aplikasi Pantau Relawan adalah Aplikasi multiplatform Berbasis Web dan Mobile
                    yang dapat digunakan oleh Calon Legislatif atau Calon Kepala Daerah untuk
                    memantau pergerakan dan kerja timses serta relawan di lapangan. Selain itu,
                    Aplikasi Pantau Relawan dapat memberikan laporan secara realtime, dapat
                    melakukan perhitungan pemetaan suara calon pemilih/pendukung oleh tim sukses di
                    lapangan serta penghitungan cepat hasil pemilu dari sumber pemungutan suara/TPS
                    dari suatu tingkat daerah tertentu.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              {/* <!-- Question 2 --> */}
              <Accordion.Item eventKey="1">
                <Accordion.Header as="h5">
                  Bagaimana cara mengakses Aplikasi Pantau Relawan?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Aplikasi Pantau Relawan bisa diakses melalui berbagai gawai seperti personal
                    computer, laptop, tablet dan smartphone. Aplikasi Pantau Relawan berbasis Web
                    untuk Admin dan Aplikasi Mobile (Android dan IOS) untuk para timses atau relawan
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              {/* <!-- Question 3 --> */}
              <Accordion.Item eventKey="2">
                <Accordion.Header as="h5">
                  Apakah kami bisa mencoba Aplikasi Pantau Relawan?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Bisa, silahkan download Aplikasi Pantau Relawan melalui Play Store maupun App
                    Store untuk melakukan demo
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              {/* <!-- Question 4 --> */}
              <Accordion.Item eventKey="3">
                <Accordion.Header as="h5">
                  Bagaimana kami bisa mendapatkan informasi lebih lanjut terkait Aplikasi Pantau
                  Relawan?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Anda dapat melakukan komunikasi dengan tim support kami via WhatsApp maupun
                    Email yang terdapat di menu support
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              {/* <!-- Question 5 --> */}
              <Accordion.Item eventKey="4">
                <Accordion.Header as="h5">
                  Apakah Aplikasi Pantau Relawan bisa dibuatkan secara custom sesuai dengan
                  kebutuhan Calon Legislatif atau Calon Kepala Daerah?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Bisa, silahkan hubungi tim support kami untuk mendiskusikan lebih lanjut
                    kebutuhan fitur sesuai dengan yang diinginkan Calon Legislatif atau Calon Kepala
                    Daerah
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Support;
