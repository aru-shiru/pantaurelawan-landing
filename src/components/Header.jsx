import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = props => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const handleMobileMenu = e => {
    e.preventDefault();
    setIsMobileMenu(!isMobileMenu);
  };

  const handleSearch = e => {
    e.preventDefault();
    setIsSearch(!isSearch);
  };

  return (
    <>
      <header id="top-page" className="header">
        <div
          id="mainNav"
          className={
            isMobileMenu ? 'main-menu-area animated mobile-menu-open' : 'main-menu-area animated'
          }
        >
          <Container>
            <Row className="align-items-center">
              <Col className="col-12 col-lg-2 d-flex justify-content-between align-items-center">
                <div className="logo">
                  <a href="/" className="navbar-brand navbar-brand1">
                    <img
                      src="/images/logo-white.png"
                      srcSet={`/images/logo-white@2x.png 2x`}
                      alt="Naxos"
                    />
                  </a>

                  <a href="/" className="navbar-brand navbar-brand2">
                    <img src="/images/logo.png" srcSet={`/images/logo@2x.png 2x`} alt="Naxos" />
                  </a>
                </div>

                <div
                  className="menu-bar d-lg-none"
                  role="button"
                  tabIndex={0}
                  onClick={handleMobileMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Col>

              <div
                className="op-mobile-menu col-lg-10 p-0 d-lg-flex align-items-center justify-content-end"
                role="button"
                tabIndex={0}
                onClick={handleMobileMenu}
              >
                <div className="m-menu-header d-flex justify-content-between align-items-center d-lg-none">
                  <a href="#" className="logo">
                    <img src="images/logo.png" srcSet={`/images/logo@2x.png 2x`} alt="Naxos" />
                  </a>

                  <span
                    className="close-button"
                    role="button"
                    tabIndex={0}
                    onClick={handleMobileMenu}
                  ></span>
                </div>

                <ul className="nav-menu d-lg-flex flex-wrap list-unstyled justify-content-center">
                  <li className="nav-item">
                    <a
                      href="#top-page"
                      className={
                        props.nav !== undefined && props.nav === 'home'
                          ? 'nav-link js-scroll-trigger active'
                          : 'nav-link js-scroll-trigger'
                      }
                    >
                      <span>Home</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#features" className="nav-link js-scroll-trigger">
                      <span>Features</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#screenshots" className="nav-link js-scroll-trigger">
                      <span>Screenshots</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#support" className="nav-link js-scroll-trigger">
                      <span>Support</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#pricing" className="nav-link js-scroll-trigger">
                      <span>Pricing</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Row>
          </Container>
        </div>
      </header>

      <div className={!isSearch ? 'search-wrapper' : 'search-wrapper wrapper-active'}>
        <form role="search" method="get" className="search-form" action="#">
          <input
            type="search"
            name="s"
            id="s"
            placeholder="Search Keyword"
            className="searchbox-input"
            autoComplete="off"
            required
          />

          <span>Input your search keywords and press Enter.</span>
        </form>

        <div className="search-wrapper-close">
          <span
            className="search-close-btn"
            role="button"
            tabIndex={0}
            onClick={handleSearch}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Header;
