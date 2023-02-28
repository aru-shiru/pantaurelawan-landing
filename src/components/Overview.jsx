import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Overview = props => {
  return (
    <section id="overview" className={props.className}>
      {/* <!-- Container --> */}
      <Container>
        {/* <!-- Track time --> */}
        <Row>
          {/* <!-- Content --> */}
          <Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">
            {/* <!-- Section title --> */}
            <div className="section-title text-center text-lg-start">
              <h3>Manfaat Utama Pantau Relawan</h3>
            </div>

            {/* <!-- Items --> */}
            <div className="overview-item">
              {/* <!-- Item 1 --> */}
              <div className="overview-box d-flex flex-wrap">
                {/* <!-- Icon --> */}
                <div className="icon icon-basic-compass"></div>

                {/* <!-- Content --> */}
                <div className="content">
                  <h6 className="font-weight-bold mb-2 mt-0">Efisiensi & Efektivitas Pemenangan</h6>
                  <p>
                    Seluruh gerakan pemenangan akan terukur secara maksimal dan akuntabel sehingga
                    memudahkan dalam mengambil keputusan dan strategi yang tepat.
                  </p>
                </div>
              </div>

              {/* <!-- Item 2 --> */}
              <div className="overview-box d-flex flex-wrap">
                {/* <!-- Icon --> */}
                <div className="icon icon-basic-helm"></div>

                {/* <!-- Content --> */}
                <div className="content">
                  <h6 className="font-weight-bold mb-2 mt-0">Tools Manajemen Pemenangan</h6>
                  <p>
                    Tools utama timses dalam mengelola berbagai kebutuhan administrasi dan
                    pencatatan data secara terkomputerisasi dan terpusat.
                  </p>
                </div>
              </div>

              {/* <!-- Item 3 --> */}
              <div className="overview-box d-flex flex-wrap">
                {/* <!-- Icon --> */}
                <div className="icon icon-basic-link"></div>

                {/* <!-- Content --> */}
                <div className="content">
                  <h6 className="font-weight-bold mb-2 mt-0">Media Pelaporan Relawan</h6>
                  <p>
                    Memfasilitasi para relawan hingga ke level “grass root“ untuk melakukan
                    pencatatan data dan di konsolidasi data dan aktifitas pendukung secara
                    berjenjang & terstruktur.
                  </p>
                </div>
              </div>
              {/* <!-- Item 4 --> */}
              <div className="overview-box d-flex flex-wrap">
                {/* <!-- Icon --> */}
                <div className="icon icon-basic-link"></div>

                {/* <!-- Content --> */}
                <div className="content">
                  <h6 className="font-weight-bold mb-2 mt-0">Bahan Evaluasai Pemenangan</h6>
                  <p>
                    Seluruh data dan informasi sangat relevan untuk kebutuhan penyesuaian langkah
                    strategis dari berbagai isu negatif dan positif yang terjadi dilapangan.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* <!-- Image --> */}
          <Col className="col-12 col-lg-5 order-lg-first text-sm-center">
            <img src="/images/overview/track-time.png" alt="" />
          </Col>
        </Row>

        <div className="empty-100"></div>

        {/* <!-- Daily schedule --> */}
        <Row>
          {/* <!-- Content --> */}
          <Col className="col-12 col-lg-6 res-margin">
            {/* <!-- Section title --> */}
            <div className="section-title text-center text-lg-start">
              <h3>Fitur Lainnya</h3>
              <p>
                Beberapa fitur lainnya yang disediakan untuk membantu pemenangan pilcaleg dan
                pilkada.
              </p>
            </div>

            {/* <!-- List --> */}
            <ul className="overview-list">
              <li>
                <p>
                  <i className="fa-li fas fa-check"></i> <strong>Manajemen DPT</strong>, mengelola
                  seluruh data DPT dengan mudah sebagai referensi dan acuan dasar seluruh pemetaan
                  suara dan gerakan para relawan
                </p>
              </li>

              <li>
                <p>
                  <i className="fa-li fas fa-check"></i> <strong>Rekapitulasi Data</strong>, seluruh
                  data dan informasi dari Relwan adakan diproses dan ditangani secara otomatis oleh
                  sistem dalam bentuk Rekapitulasi Data
                </p>
              </li>

              <li>
                <p>
                  <i className="fa-li fas fa-check"></i> <strong>Agenda Kegiatan</strong>,
                  menampilkan seluruh Agenda kegiatan atau sosialisasi calon legislatif/kepala
                  daerah di lapangan kepada para relawan dan pendukung.
                </p>
              </li>

              <li>
                <p>
                  <i className="fa-li fas fa-check"></i> <strong>Mode Offline</strong>, fitur
                  offline mode yang akan sangat membantu para tim agar tetap dapat bergerak dan
                  mengumpulkan data tanpa mengkhawatirkan koneksi Internet.
                </p>
              </li>

              <li>
                <p>
                  <i className="fa-li fas fa-check"></i> <strong>Teknologi OCR</strong>, fitur OCR
                  digunakan untuk mempermudah dan mempercepat proses penginputan data ktp relawan
                  serta pendukung di lapangan.
                </p>
              </li>
              <li>
                <p>
                  <i className="fa-li fas fa-check"></i> <strong>Informasi Kandidat</strong>,
                  menampilkan Informasi Profil, Program/Gagasan Kandidat serta menampilkan
                  berita-berita serta kegiatan kandidat dan timses di lapangan
                </p>
              </li>
            </ul>

            {/* <!-- Button --> */}
            <p className="text-center text-lg-start">
              <a href="#" className="btn">
                Learn More
              </a>
            </p>
          </Col>

          {/* <!-- Image --> */}
          <Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
            <img src="/images/overview/daily-schedule.png" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Overview;
