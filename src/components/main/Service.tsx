import React from "react";
import FeatherIcon from 'feather-icons-react';
function Services() {
  return <>
    {/* Start Service Area */}
    <div
      className="rn-service-area rn-section-gap section-separator"
      id="features"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={100}
              data-aos-once="true"
            >
              <span className="subtitle">My Services</span>
              <h2 className="title">What I Do</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt_md--10 mt_sm--10">
          {/* Start Single Service */}
          <div
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={100}
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="rn-service">
              <div className="inner">
                <div className="icon">
                  <img src="/assets/images/uiux.png" width="72" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="#">UI/UX</a>
                  </h4>
                  <p className="description">
                    I specialize in creating intuitive, user-friendly interfaces that engage users and enhance their experience, using the latest design principles and techniques.
                  </p>
                  <a className="read-more-button" href="#">
                    <FeatherIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
              <a className="over-link" href="#" />
            </div>
          </div>
          {/* End SIngle Service */}
          {/* Start Single Service */}
          <div
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={300}
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="rn-service">
              <div className="inner">
                <div className="icon">
                  <img src="/assets/images/frontend.png" width="72" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="#">Frontend Development</a>
                  </h4>
                  <p className="description">
                    I build fast, responsive web and mobile apps using the latest technologies, ensuring optimal performance and a seamless user experience on all devices.
                  </p>
                  <a className="read-more-button" href="#">
                    <FeatherIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
              <a className="over-link" href="#" />
            </div>
          </div>
          {/* End SIngle Service */}
          {/* Start Single Service */}
          <div
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={500}
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="rn-service">
              <div className="inner">
                <div className="icon">
                  <img src="/assets/images/backend.png" width="72" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="#">Backend Development</a>
                  </h4>
                  <p className="description">
                    I develop robust server-side logic to power dynamic web applications, ensuring high performance and reliability for your website’s functionality.
                  </p>
                  <a className="read-more-button" href="#">
                    <FeatherIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
              <a className="over-link" href="#" />
            </div>
          </div>
          {/* End SIngle Service */}
          {/* Start Single Service */}
          <div
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={100}
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="rn-service">
              <div className="inner">
                <div className="icon">
                  <img src="/assets/images/database.png" width="72" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="#">Database Engineering</a>
                  </h4>
                  <p className="description">
                    Our database engineering services encompass the design, implementation, and optimization of high-performance database architectures to handle your application's data effectively. </p>
                  <a className="read-more-button" href="#">
                    <FeatherIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
              <a className="over-link" href="#" />
            </div>
          </div>
          {/* End SIngle Service */}
          {/* Start Single Service */}
          <div
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={300}
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="rn-service">
              <div className="inner">
                <div className="icon">
                  <img src="/assets/images/devops.png" width="72" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="#">DevOps</a>
                  </h4>
                  <p className="description">
                    I streamline operations, development and testing processes using a CI/CD Pipeline to ensure faster, more reliable software delivery, improving efficiency and reducing downtime.
                  </p>
                  <a className="read-more-button" href="#">
                    <FeatherIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
              <a className="over-link" href="#" />
            </div>
          </div>
          {/* End SIngle Service */}
          {/* Start Single Service */}
          <div
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={500}
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="rn-service">
              <div className="inner">
                <div className="icon">
                  <img src="/assets/images/blockchain.png" width="72" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="#">Blockchain Engineering</a>
                  </h4>
                  <p className="description">
                    I design smart contracts to implement secure, decentralized solutions using blockchain technology, providing transparency and security for your digital transactions.
                  </p>
                  <a className="read-more-button" href="#">
                    <FeatherIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
              <a className="over-link" href="#" />
            </div>
          </div>
          {/* End SIngle Service */}
        </div>
      </div>
    </div>
    {/* End Service Area  */}
  </>;
}

export default Services;
