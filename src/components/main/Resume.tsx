import React, { useEffect, useState } from "react";

function Resume() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const courses: any = [
      {
        name: "Master's Degree in Computer Science : (MC-CS) STUDENT",
        grade: "...",
        college: "Colorado Boulder State University",
        years: "Jan 2024 - Dec 2025",
        description:
          "I am currently pursuing an online M.S. in Computer Science from Colorado Boulder State University, where I am learning about cutting-edge research and applications in various domains in the computing industry.",
      },
      {
        name: "Bsc Honors Degree in Information Technology",
        grade: "2.1",
        college: "Midlands State University",
        years: "Aug 2008 - Jun 2012",
        description:
          "I have a BSc Honors degree in Information Technology, where I acquired skills in computing, applications development, scripting, web development, database design, network administration, cyber security, and human-computer interaction.",
      },
      {
        name: "Advanced Diploma - Information Technology",
        grade: "Pass",
        college: "Satra Learning Centre",
        years: "Aug 2005 - Sep 2007",
        description:
          "With an Advanced Diploma in Information Technology, I gained skills in programming, web development, database management, network administration, cyber security, and project management.",
      },
    ];

    setEducation(courses);
  }, []);

  const [professional, setProfessional] = useState([]);

  useEffect(() => {
    const jobs: any = [
      {
        name: "Fullstack Web3.0 Engineer",
        grade: "2 yrs",
        org: "Dovellous Technologies",
        years: "Nov 2021 - Present",
        description:
          "As a smart contract and dApp developer, I design, code, and deploy secure and efficient smart contracts for various use cases. I also integrate them with existing DeFi protocols and platforms, and build user-friendly dApps that enable token swaps, staking, and voting. I stay updated on the latest Web3 technologies and trends, and explore novel approaches to token engineering and mechanism design. I also engage with the crypto and DeFi community, and participate in forums, conferences, and meetups. I provide technical support and guidance to users.",
      },
      {
        name: "Fullstack Blockchain Developer",
        grade: "3 mon",
        org: "Swapps Finance",
        years: "Sep 2021 - Dec 2021",
        description:
          "In my work, I focus on three main areas. Firstly, I design, develop, and deploy secure and efficient smart contracts on blockchain networks, ensuring their correctness and integrating token swap functionality. Secondly, I build decentralized applications (dApps) that interact with these blockchain networks. This involves integrating token swap features and working closely with front-end developers to create user-friendly interfaces. Lastly, I manage liquidity pools for token swaps, optimising the provision and utilisation of liquidity, and monitoring the health of these liquidity pools. This comprehensive approach allows me to provide a seamless and secure experience for users interacting with blockchain technology.",
      },
      {
        name: "Fullstack Engineer",
        grade: "3 yrs",
        org: "Inbox Group",
        years: "Jul 2018 - Sept 2021",
        description:
          "As a developer, I create features with React.js, manage databases, implement DevOps, and build mobile apps. I also lead teams, coordinate projects, and provide feedback. I strive for robustness, usability, and reliability in all my work.",
      },
      {
        name: "Principal Software Engineer",
        grade: "5 yrs",
        org: "Appdev (Pvt) Ltd",
        years: "Jan 2013 - Jul 2018",
        description:
          "I lead a team of developers, manage projects, create UI prototypes, develop UI/UX, and handle frontend and backend systems. I’m involved in the product lifecycle, deploy apps on cloud services, and guide UI/UX trends.",
      },
      {
        name: "Graphic & Web Designer",
        grade: "4 mon",
        org: "Pixelus Design Lab",
        years: "Sep 2012 - Dec 2012",
        description:
          "I design websites, online and desktop apps, assess setup requirements, and implement solutions. I train teams in Adobe CS, win clients with high-quality design work, train clients in website maintenance, and initiated an ISP changeover.",
      },
    ];

    setProfessional(jobs);
  }, []);

  return (
    <>
      {/* Start Resume Area */}
      <div
        className="rn-resume-area rn-section-gap section-separator"
        id="resume"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">10+ Years of Experience</span>
                <h2 className="title">My Resume</h2>
              </div>
            </div>
          </div>
          <div className="row mt--45">
            <div className="col-lg-12">
              <ul
                className="rn-nav-list nav nav-tabs"
                id="myTabs"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="education-tab"
                    data-bs-toggle="tab"
                    href="#education"
                    role="tab"
                    aria-controls="education"
                    aria-selected="true"
                  >
                    education
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="professional-tab"
                    data-bs-toggle="tab"
                    href="#professional"
                    role="tab"
                    aria-controls="professional"
                    aria-selected="false"
                  >
                    professional Skills
                  </a>
                </li>
                <li className="nav-item"></li>
                <li className="nav-item"></li>
              </ul>
              {/* Start Tab Content Wrapper  */}
              <div className="rn-nav-content tab-content" id="myTabContents">
                {/* Start Single Tab  */}
                <div
                  className="tab-pane fade active show single-tab-area"
                  id="education"
                  role="tabpanel"
                  aria-labelledby="education-tab"
                >
                  <div className="personal-experience-inner mt--40">
                    <div className="row">
                      {/* Start Skill List Area  */}
                      <div className="col-lg-3 col-md-12 col-12"></div>
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="content">
                          <span className="subtitle">2005 - 2024</span>
                          <h4 className="maintitle">Education </h4>
                          <div className="experience-list">
                            {/* Start Single List  */}
                            {education.map(
                              (course: any, courseIndex: number) => (
                                <div
                                  key={courseIndex}
                                  className="resume-single-list"
                                >
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>{course.name}</h4>
                                        <span>
                                          {course.college} ⚪ {course.years}
                                        </span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>{course.grade}</span>
                                      </div>
                                    </div>
                                    <p
                                      className="description"
                                      dangerouslySetInnerHTML={{
                                        __html: course.description,
                                      }}
                                    ></p>
                                  </div>
                                </div>
                              )
                            )}
                            {/* End Single List  */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-12 col-12"></div>
                      {/* End Skill List Area  */}
                    </div>
                  </div>
                </div>
                {/* End Single Tab  */}

                {/* Start Single Tab  */}
                <div
                  className="tab-pane fade single-tab-area"
                  id="professional"
                  role="tabpanel"
                  aria-labelledby="professional-tab"
                >
                  <div className="personal-experience-inner mt--40">
                    <div className="row">
                      {/* Start Skill List Area  */}
                      <div className="col-lg-3 col-md-12 col-12"></div>
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="content">
                          <span className="subtitle">2012 - 2024</span>
                          <h4 className="maintitle">
                            Professional Experience{" "}
                          </h4>
                          <div className="experience-list">
                            {/* Start Single List  */}
                            {professional.map((job: any, jobIndex: number) => (
                              <div
                                key={jobIndex}
                                className="resume-single-list"
                              >
                                <div className="inner">
                                  <div className="heading">
                                    <div className="title">
                                      <h4>{job.name}</h4>
                                      <span>
                                        {job.org} ⚪ {job.years}
                                      </span>
                                    </div>
                                    <div className="date-of-time">
                                      <span>{job.grade}</span>
                                    </div>
                                  </div>
                                  <p
                                    className="description"
                                    dangerouslySetInnerHTML={{
                                      __html: job.description,
                                    }}
                                  ></p>
                                </div>
                              </div>
                            ))}
                            {/* End Single List  */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-12 col-12"></div>
                      {/* End Skill List Area  */}
                    </div>
                  </div>
                </div>
                {/* End Single Tab  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Resume Area */}
    </>
  );
}

export default Resume;
