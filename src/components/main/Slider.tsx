import React from "react";

function Slider() {

  React.useEffect(() => {

    (window as any).initRipples();

  }, [])
  return <>
    {/* Start Slider Area */}
    <div className="rn-slider-area">
      <div className="slide slider-style-1 with-square-box"> 
      <div className="cs-ripple" ></div>
        <div className="container">
          <div className="row row--30 align-items-center">
            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
              <div className="content">
                <div className="inner">
                  <span className="subtitle">Welcome to my world</span>
                  <h1 className="title">
                    Hi, I’m <span className="animate-charcter">Douglas</span><img className="hi-hand" src="/assets/images/hi.png" />
                    <br />
                    <span className="span">Fullstack Engineer</span>
                  </h1>
                  <div>
                    <p className="description">
                      As a full-stack engineer with over 10 years of experience, I have mastered the art and science of creating engaging and intelligent digital solutions. From prototyping to UI/UX design, frontend and backend development and from machine learning to artificial intelligence. I have the skills and knowledge to handle technical challenges. I use agile, scrum, kanban, design thinking and emotional intelligence to manage projects and teams effectively and efficiently, ensuring a smooth and successful software development life cycle.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                    <div className="social-share-inner-left">
                      <span className="title">Follow me on</span>
                      <ul className="social-share d-flex liststyle">
                        <li className="linkedin">
                          <a href="https://www.linkedin.com/in/douglasmaposa" target="_blank">
                            <img src="/assets/images/linkedin.png" width="36" />
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="https://twitter.com/code_writer" target="_blank">
                            <img src="/assets/images/twitter.png" width="36" />
                          </a>
                        </li>
                        <li className="github">
                          <a href="https://github.com/the-code-writer" target="_blank">
                            <img src="/assets/images/github.png" width="36" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="skill-share-inner">
                      <span className="title">Good skills in</span>
                      <ul className="skill-share d-flex liststyle">
                        <li>
                          <img
                            src="/assets/images/figma.png"
                            alt="personal Portfolio Images"
                          />
                        </li>
                        <li>
                          <img
                            src="/assets/images/react.png"
                            alt="personal Portfolio Images"
                          />
                        </li>
                        <li>
                          <img
                            src="/assets/images/node.png"
                            alt="personal Portfolio Images"
                          />
                        </li>
                        <li>
                          <img
                            src="/assets/images/database.png"
                            alt="personal Portfolio Images"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 order-lg-2 col-lg-5 position-relative">
              <a id="play-video" className="video-play-button" href="#" style={{ opacity: 0 }}>
                <span />
              </a>
              <div className="thumbnail style-2">
                <div className="inner">
                  <img
                    className="w-100"
                    src="/assets/images/banner-03.png"
                    alt="Personal Portfolio Images"
                  />
                </div>
              </div>

              <div id="video-overlay" className="video-overlay">
                <a className="video-overlay-close">×</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Slider Area */}
  </>;
}

export default Slider;
