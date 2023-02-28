import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import SingleImage from './components/SingleImage';
import Clients from './components/Clients';
import Features from './components/Features';
import ParallaxVideo from './components/ParallaxVideo';
import Services from './components/Services';
import Overview from './components/Overview';
import Testimonials from './components/Testimonials';
import Counters from './components/Counters';
import Screenshots from './components/Screenshots';
import Support from './components/Support';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ToTop from './components/ToTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Scroll
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      // Page loader
      const loader = document.querySelector < HTMLDivElement > '.page-loader';

      if (loader) {
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }

      // To top
      const toTop = document.querySelector('.to-top');

      // Scroll event
      window.addEventListener('scroll', function () {
        const mainMenu = document.querySelector('.main-menu-area');
        const pos = window.scrollY;

        // Fixed menu
        if (mainMenu) {
          if (pos >= 100) {
            mainMenu.classList.add('fixed-menu', 'animate', 'slideInDown');
          } else {
            mainMenu.classList.remove('fixed-menu', 'animate', 'slideInDown');
          }
        }

        // Scroll to top button
        if (pos >= 500) {
          toTop.classList.add('fixed-totop');
        } else {
          toTop.classList.remove('fixed-totop');
        }
      });

      // Scroll spy
      if (window.location.href.split('#').length > 1) {
        const sections = document.querySelectorAll < HTMLElement > 'section[id]';

        window.addEventListener('scroll', function () {
          const pos = window.scrollY;

          if (pos > 0) {
            sections.forEach(el => {
              if (el.offsetTop - 150 <= pos && el.offsetTop + el.clientHeight >= pos) {
                const getId = el.getAttribute('id');

                document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {
                  const activeLink = document.querySelector(`.nav-item a[href^="/#${getId}"]`);

                  if (activeLink) {
                    link.classList.remove('active');
                    activeLink.classList.add('active');
                  }
                });
              }
            });
          } else {
            const link = document.querySelector(`.nav-item`);
            link.classList.remove('active');

            const activeLink = document.querySelector(`.nav-item a[href^="/#top-page"]`);
            activeLink.classList.add('active');
          }
        });
      } else {
        window.addEventListener('scroll', function () {
          document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {
            link.classList.remove('active');
          });
        });
      }
    }

    return () => {
      unmounted = true;
    };
  });

  return (
    <div>
      {loading && <Loader />}
      <Header nav="home" />
      <SingleImage />
      <Clients className="section-box bg-grey" />
      <Features />
      <ParallaxVideo />
      <Services />
      <Overview />
      <Testimonials />
      <Counters />
      <Screenshots />
      <Support />
      <Pricing />
      <Footer />
      <ToTop />
    </div>
  );
}
