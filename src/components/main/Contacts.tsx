import React, { useEffect, useRef } from "react";
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';

function Contacts() {
  
  const form:any = useRef();

  const sendEmail = (e:any) => {

    Swal.showLoading();

    e.preventDefault();

    emailjs
      .sendForm('service_50wup7o', 'template_xd110ki', form.current, 'aReJ648891wMprdJ3')
      .then(
        () => {
          Swal.hideLoading();
          console.log('SUCCESS!');
          Swal.fire({
            title: "Email sent!",
            text: "Thank you, your email was sent. I will get back to you soon.",
            icon: "success"
          });

          form.current.reset();

        },
        (error) => {
          Swal.hideLoading();
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Something went wrong!",
            text: "Sorry there was an error sending your email. Please check your connection and try again",
            icon: "error"
          });
        },
      );
  };

  return (
    <>
      {/* Start Contact section */}
      <div
        className="rn-contact-area rn-section-gap section-separator"
        id="contacts"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">Contact</span>
                <h2 className="title">Contact With Me</h2>
              </div>
            </div>
          </div>
          <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
            <div className="col-lg-5">
              <div className="contact-about-area">
                <div className="thumbnail">
                  <img src="/assets/images/contact1.png" alt="contact-img" />
                </div>
                <div className="title-area">
                  <h4 className="title">Douglas Maposa</h4>
                  <span>Fullstack Developer</span>
                </div>
                <div className="description">
                  <span className="phone">
                    Phone: <a href="tel:+263772128622">+263 77 212 8622</a>
                  </span>
                  <span className="mail">
                    Email:
                    <a href="mailto:doug.maposa@gmail.com">
                      {" "}
                      doug.maposa[at]gmail.com
                    </a>
                  </span>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                    <div className="social-share-inner-left">
                      <span className="title">find me on</span>
                      <ul className="social-share d-flex liststyle">
                        <li className="linkedin mr--25">
                          <a
                            href="https://www.linkedin.com/in/douglasmaposa"
                            target="_blank"
                          >
                            <img src="/assets/images/linkedin.png" width="36" />
                          </a>
                        </li>
                        <li className="twitter mr--25">
                          <a
                            href="https://twitter.com/code_writer"
                            target="_blank"
                          >
                            <img src="/assets/images/twitter.png" width="36" />
                          </a>
                        </li>
                        <li className="github">
                          <a
                            href="https://github.com/the-code-writer"
                            target="_blank"
                          >
                            <img src="/assets/images/github.png" width="36" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos-delay={600} className="col-lg-7 contact-input">
              <div className="contact-form-wrapper">
                <div className="introduce">
                  <form
                    className="rnt-contact-form rwt-dynamic-form row"
                    id="contact-form"
                    ref={form} onSubmit={sendEmail}
                  >
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="contact-name">Your Name</label>
                        <input
                          className="form-control form-control-lg"
                          name="from_name"
                          id="contact-name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="contact-phone">Phone Number</label>
                        <input
                          className="form-control"
                          name="from_mobile"
                          id="contact-phone"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="contact-email">Email</label>
                        <input
                          className="form-control form-control-sm"
                          id="contact-email"
                          name="from_email"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="subject">subject</label>
                        <input
                          className="form-control form-control-sm"
                          id="subject"
                          name="subject"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="contact-message">Your Message</label>
                        <textarea
                          name="message"
                          id="contact-message"
                          cols={30}
                          rows={10}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        name="submit"
                        type="submit"
                        id="submit"
                        className="rn-btn"
                      >
                        <span>SEND MESSAGE</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-arrow-right"
                        >
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contuct section */}
    </>
  );
}

export default Contacts;
