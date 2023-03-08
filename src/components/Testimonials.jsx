import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialSlider = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  rtl: false,
};

const testimonialNav = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: false,
  rtl: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const Testimonial = props => {
  const testimonialNavRef = useRef(null);
  const testimonialSliderRef = useRef(null);

  const [state, setState] = useState({
    nav1: testimonialNavRef.current,
    nav2: testimonialSliderRef.current,
  });

  const { nav1, nav2 } = state;

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setState({
        nav1: testimonialNavRef.current,
        nav2: testimonialSliderRef.current,
      });
    }

    return () => {
      unmounted = true;
    };
  }, [testimonialSliderRef, testimonialNavRef]);

  return (
    <section id="testimonials" className={props.className}>
      {/* <!-- Container --> */}
      <Container>
        {/* <!-- Section title --> */}
        <Row className="row justify-content-center">
          <Col className="col-12 col-md-10 col-lg-6">
            <div className="section-title text-center">
              <h3>Testimonials</h3>
              <p>Beberapa Testimoni dari Client yang menggunakan Aplikasi Pantau Relawan.</p>
            </div>
          </Col>
        </Row>

        <Row className="row">
          <Col className="col-12 testimonial-carousel">
            {/* <!-- Text --> */}
            <div className="block-text row">
              <Slider
                ref={testimonialSliderRef}
                className="carousel-text testimonial-slider col-12 col-lg-8 offset-lg-2"
                asNavFor={nav1}
                {...testimonialSlider}
              >
                <div>
                  <div className="single-box">
                    <p>
                      <i className="fas fa-quote-left"></i> “ Pantau Relawan membantu tim untuk
                      melakukan perekrutan relawan secara efektif dan efisien serta membantu
                      melakukan rekapitulasi hasil suara di TPS. “
                      <i className="fas fa-quote-right"></i>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="single-box">
                    <p>
                      <i className="fas fa-quote-left"></i> “ Aplikasi ini sangat membantu tim
                      sukses di lapangan dalam melakukan canvassing dan monitoring kegiatan relawan
                      dilapangan untuk mengukur peta kekuatan tim. “
                      <i className="fas fa-quote-right"></i>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="single-box">
                    <p>
                      <i className="fas fa-quote-left"></i> Aplikasi Pantau Relawan memiliki peran
                      dalam membantu LSI Denny JA dalam pemenangan Presiden Jokowi-Ma’ruf di 10
                      Provinsi di Indonesia.
                      <i className="fas fa-quote-right"></i>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="single-box">
                    <p>
                      <i className="fas fa-quote-left"></i> “ Pantau Relawan membantu tim untuk
                      melakukan perekrutan relawan secara efektif dan efisien serta membantu
                      melakukan rekapitulasi hasil suara di TPS. “
                      <i className="fas fa-quote-right"></i>
                    </p>
                  </div>
                </div>
              </Slider>
            </div>

            {/* <!-- Media --> */}
            <div className="block-media row">
              <Slider
                ref={testimonialNavRef}
                className="carousel-images testimonial-nav col-12 col-lg-8 offset-lg-2"
                asNavFor={nav2}
                {...testimonialNav}
              >
                <div>
                  <img
                    src="/images/testimonials/client-1.jpg"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <div className="client-info">
                    <h3>Hj. Intan Fauzi, S.H., LL.M.</h3>
                    <span>PAN – Jawa Barat VI (Komisi VI DPR RI)</span>
                  </div>
                </div>

                <div>
                  <img
                    src="/images/testimonials/client-2.jpg"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <div className="client-info">
                    <h3>Ir. H. Kamrussamad, S.T., M.Si.</h3>
                    <span>Gerindra – DKI Jakarta III (Komisi XI DPR RI)</span>
                  </div>
                </div>

                <div>
                  <img
                    src="/images/testimonials/client-3.jpg"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <div className="client-info">
                    <h3>Adjie Alfaraby</h3>
                    <span>Peneliti LSI Denny JA</span>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
