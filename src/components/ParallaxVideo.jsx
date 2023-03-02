import React, { useEffect, useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';

import 'react-modal-video/css/modal-video.css';

const ParallaxVideo = () => {
  const parallax = useRef(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (parallax.current) {
      parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute(
        'data-image'
      )})`;
    }
  }, [parallax]);

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="8KB-c-c6DQQ"
        onClose={() => setOpen(false)}
        autoplay
      />

      <section
        id="parallax-video"
        className="parallax"
        data-image="/images/parallax/video.jpg"
        ref={parallax}
      >
        {/* <!-- Overlay --> */}
        <div className="overlay" />

        {/* <!-- Container --> */}
        <Container>
          <Row>
            <div
              className="video-btn wow fadeInUp"
              data-wow-offset="10"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              {/* <!-- Play button --> */}
              <a
                onClick={e => {
                  e.preventDefault();
                  return setOpen(true);
                }}
                href="#"
                data-rel="lightcase"
                className="play-btn"
              >
                <i className="fas fa-play"></i>
              </a>

              <span className="video-text">Watch This Video</span>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ParallaxVideo;
