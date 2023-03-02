import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { SRLWrapper } from 'simple-react-lightbox';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Screenshots = props => {
  return (
    <section id="screenshots" className={props.className}>
      {/* <!-- Container --> */}
      <Container>
        {/* <!-- Section title --> */}
        <Row className="justify-content-center">
          <Col className="col-12 col-md-10 col-lg-6">
            <div className="section-title text-center">
              <h3>App Screenshots</h3>
              <p>
                Aplikasi ini dirancang menggunakan teknologi terkini dan terbaru agar dapat mengolah
                data secara cepat, keamanan tinggi serta user-friendly.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="col-12">
            {/* <!-- Carousel --> */}
            <SRLWrapper>
              <Swiper
                className="screenshot-slider zoom-screenshot"
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                  320: {
                    spaceBetween: 15,
                    slidesPerView: 1,
                  },
                  768: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                  },
                  1024: {
                    spaceBetween: 30,
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-1.png">
                    <img src="/images/screenshots/screenshot-1.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-2.png">
                    <img src="/images/screenshots/screenshot-2.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-3.png">
                    <img src="/images/screenshots/screenshot-3.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-4.png">
                    <img src="/images/screenshots/screenshot-4.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-5.png">
                    <img src="/images/screenshots/screenshot-5.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-6.png">
                    <img src="/images/screenshots/screenshot-6.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-7.png">
                    <img src="/images/screenshots/screenshot-7.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-8.png">
                    <img src="/images/screenshots/screenshot-8.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-9.png">
                    <img src="/images/screenshots/screenshot-9.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-10.png">
                    <img src="/images/screenshots/screenshot-10.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-11.png">
                    <img src="/images/screenshots/screenshot-11.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-12.png">
                    <img src="/images/screenshots/screenshot-12.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-13.png">
                    <img src="/images/screenshots/screenshot-13.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-14.png">
                    <img src="/images/screenshots/screenshot-14.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-15.png">
                    <img src="/images/screenshots/screenshot-15.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-16.png">
                    <img src="/images/screenshots/screenshot-16.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-17.png">
                    <img src="/images/screenshots/screenshot-17.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-18.png">
                    <img src="/images/screenshots/screenshot-18.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-19.png">
                    <img src="/images/screenshots/screenshot-19.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-20.png">
                    <img src="/images/screenshots/screenshot-20.png" alt="" />
                  </a>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <a href="/images/screenshots/screenshot-21.png">
                    <img src="/images/screenshots/screenshot-21.png" alt="" />
                  </a>
                </SwiperSlide>
              </Swiper>
            </SRLWrapper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Screenshots;
