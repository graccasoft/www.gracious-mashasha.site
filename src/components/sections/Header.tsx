import React from "react";
import FeatherIcon from 'feather-icons-react';
function Header() {
  return (
    <>

      {/* Start Header */}
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky sticky">
        <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
          {/* Start Header Left */}
          <div className="col-lg-2 col-6">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img src="/assets/images/logo.png" alt="logo" />
                </a>
              </div>
            </div>
          </div>
          {/* End Header Left */}
          {/* Start Header Center */}
          <div className="col-lg-10 col-6">
            <div className="header-center">
              <nav
                id="sideNav"
                className="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav"
              >
                {/* Start Mainmanu Nav */}
                <ul className="primary-menu nav nav-pills">
                  <li className="nav-item current">
                    <a className="nav-link" href="#top">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#resume">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonial">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#clients"
                    >
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#blog">
                      blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contacts">
                      Contacts
                    </a>
                  </li>
                </ul>
                {/* End Mainmanu Nav */}
              </nav>
              {/* Start Header Right  */}
              <div className="header-right">
                            <a className="rn-btn" target="_blank" href="/resume.pdf"><span>GET RESUME</span></a>
                            <div className="hamberger-menu d-block d-xl-none">
                                <i id="menuBtn" className="feather-menu humberger-menu"></i>
                            </div>
                        </div>
              {/* End Header Right  */}
            </div>
          </div>
          {/* End Header Center */}
        </div>
      </header>
      {/* End Header Area */}
    </>
  );
}

export default Header;
