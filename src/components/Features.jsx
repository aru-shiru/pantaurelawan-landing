import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = props => {
  return (
    <section id="features" className={props.className}>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12 col-md-10 col-lg-6">
            <div className="section-title text-center">
              <h3>Fitur Utama</h3>
              <p>
                Pantau Relawan memiliki beberapa fitur sebagai alat bantu cerdas calon
                legislatif/kepala daerah dalam pemenangan pemilu.{' '}
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex align-items-center">
          <Col className="col-12 col-md-6 col-lg-4">
            <ul className="features-item">
              <li>
                <div className={'feature-box d-flex' + (props.boxLeft ? ' box-left' : '')}>
                  <div className="box-icon">
                    <div className="icon">
                      <img src="/images/icon/icon-1.png" alt="" />
                    </div>
                  </div>
                  <div className="box-text align-self-center align-self-md-start">
                    <h4>Manajemen Relawan</h4>
                    <p>
                      Fitur untuk pendataan dan pengelolaan data relawan timses serta calon pemilih
                      (pendukung) secara door-to-door (D2D) berdasarkan NIK dan Alamat sesuai dengan
                      Data DPT.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className={'feature-box d-flex' + (props.boxLeft ? ' box-left' : '')}>
                  <div className="box-icon">
                    <div className="icon">
                      <img src="/images/icon/icon-2.png" alt="" />
                    </div>
                  </div>

                  <div className="box-text align-self-center align-self-md-start">
                    <h4>Monitoring Kegiatan</h4>
                    <p>
                      Fitur yang digunakan oleh relawan timses sebagai media pelaporan dan informasi
                      kegiatan/aktivitas di lapangan untuk dijadikan sebagai salah satu tolak ukur
                      kinerja tim dilapangan.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className={'feature-box d-flex' + (props.boxLeft ? ' box-left' : '')}>
                  <div className="box-icon">
                    <div className="icon">
                      <img src="/images/icon/icon-3.png" alt="" />
                    </div>
                  </div>

                  <div className="box-text align-self-center align-self-md-start">
                    <h4>Manajemen Saksi</h4>
                    <p>
                      Fitur untuk penunjukan dan pengelolaan data saksi per TPS yang ada di daerah
                      pemilihan. Saksi TPS bertanggung jawab untuk penginputan suara kandidat ketika
                      pemilihan berlangsung.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>

          <Col className="col-12 col-lg-4 d-none d-lg-block">
            <div className="features-thumb text-center">
              <img src="/images/features/awesome-features.png" alt="" />
            </div>
          </Col>

          <Col className="col-12 col-md-6 col-lg-4">
            <ul className="features-item">
              <li>
                <div className="feature-box d-flex">
                  <div className="box-icon">
                    <div className="icon">
                      <img src="/images/icon/icon-4.png" alt="" />
                    </div>
                  </div>

                  <div className="box-text align-self-center align-self-md-start">
                    <h4>Real-Count</h4>
                    <p>
                      Fitur yang menampilkan hasil perolehan suara secara real-time yang telah
                      diinput Saksi TPS dilapangan dilengkapi dengan progres persentase data masuk.
                      Data suara masuk disetiap TPS juga dilengkapi dengan bukti foto form C1.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="feature-box d-flex">
                  <div className="box-icon">
                    <div className="icon">
                      <img src="/images/icon/icon-5.png" alt="" />
                    </div>
                  </div>

                  <div className="box-text align-self-center align-self-md-start">
                    <h4>Survey & Aspirasi</h4>
                    <p>
                      Menangkap Opini dilapangan dalam bentuk survey yang terintegrasi sehingga
                      pergerakan dilapangan dapat disinergikan serta menyediakan fitur aspirasi
                      untuk menangkap kebutuhan masyarakat di Dapil.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="feature-box d-flex">
                  <div className="box-icon">
                    <div className="icon">
                      <img src="/images/icon/icon-6.png" alt="" />
                    </div>
                  </div>

                  <div className="box-text align-self-center align-self-md-start">
                    <h4>Pengumuman</h4>
                    <p>
                      Menyediakan fitur untuk memberikan informasi/pengumuman kepada relawan yang
                      dapat disesuaikan berdasarkan struktus relawan timses yang dibentuk
                      dilapangan.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
