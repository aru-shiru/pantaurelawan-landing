import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const Clients = props => {
  return (
    <section id="clients" className={props.className}>
      <Container>
        <Row>
          <Swiper
            className="clients-slider"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
              1024: {
                spaceBetween: 40,
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide className="client">
              <a href="#">
                <img src="/images/clients/company-1.png" alt="Client 1" />
              </a>
            </SwiperSlide>

            <SwiperSlide className="client">
              <a href="#">
                <img src="/images/clients/company-2.png" alt="Client 2" />
              </a>
            </SwiperSlide>

            <SwiperSlide className="client">
              <a href="#">
                <img src="/images/clients/company-3.png" alt="Client 3" />
              </a>
            </SwiperSlide>

            <SwiperSlide className="client">
              <a href="#">
                <img src="/images/clients/company-4.png" alt="Client 4" />
              </a>
            </SwiperSlide>

            <SwiperSlide className="client">
              <a href="#">
                <img src="/images/clients/company-5.png" alt="Client 5" />
              </a>
            </SwiperSlide>

            <SwiperSlide className="client">
              <a href="#">
                <img src="/images/clients/company-6.png" alt="Client 6" />
              </a>
            </SwiperSlide>

            <SwiperSlide className="client">
              <a href="#">
                <img src="/images/clients/company-7.png" alt="Client 7" />
              </a>
            </SwiperSlide>

            <SwiperSlide className="client">
              <a href="#">
                <img src="/images/clients/company-8.png" alt="Client 8" />
              </a>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </section>
  );
};

export default Clients;
