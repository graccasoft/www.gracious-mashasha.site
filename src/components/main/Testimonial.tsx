import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import FeatherIcon from 'feather-icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonial() {

  const prevElRef = useRef<HTMLDivElement>(null);
  const nextElRef = useRef<HTMLDivElement>(null);

  const [testmonials, setTestimonials] = useState([]);

  useEffect(() => {
    const testmonies: any = [
      {
        name: "Isheunesu Tsiga",
        title: "Marketing / Copywriter",
        text: "Douglas excelled as a contractor at Mambos Chicken, demonstrating expertise in React, MongoDB, FirebaseDB, MySQL, ExpressJS, NodeJS, and Redux. He developed user-friendly web apps, efficient back-end systems, and contributed significantly to our project’s success. Highly recommended.",
        thumbnail:
          "https://media.licdn.com/dms/image/D4E03AQEWMYupy4jdBg/profile-displayphoto-shrink_800_800/0/1696232420814?e=1712793600&v=beta&t=gTWOVmmP25xcb5iOJ9L_reZskRwHWtcIwKeMjevB4so",
        service: "Website development",
        date: "January 2024",
        org: "Mambo's Chicken",
      },
      {
        name: "Gracious Mashasha",
        title: "FullStack Developer",
        text: "Douglas is a skilled developer, excelling in complex projects and communication. He’s efficient, quality-focused, and great at explaining technical topics. His inspiring attitude motivates the team, making him an invaluable asset. Highly appreciated for his daily contributions.",
        thumbnail:
          "https://media.licdn.com/dms/image/C4D03AQHu-oSVfy6SUg/profile-displayphoto-shrink_800_800/0/1655325195801?e=1712793600&v=beta&t=6WXfgFEuYZFJT3DhhYmHeSMHcXUcNnocIc64SJmuekE",
        service: "Website development",
        date: "March 2023",
        org: "Inbox Group AI",
      },
      {
        name: "Munyaradzi T. Nkomo",
        title: "Communication Specialist",
        text: "Dedicated, committed and innovative individual. Douglas is a pleasure to work with. He is a techno-savvy person who understands technological trends and brings solutions to any project that he implements.",
        thumbnail: "https://media.licdn.com/dms/image/C4D03AQH3eeI2Ns4IXw/profile-displayphoto-shrink_800_800/0/1654107313168?e=1712793600&v=beta&t=AR7rh399ns4FLCv1VKxVm-EPku8s7FcOEMoGI8rokqI",
        service: "Website development",
        date: "May 2022",
        org: "World Vision",
      },
      {
        name: "Andrew MacHann",
        title: "Business Development Specialist",
        text: "Douglas, your work on the blockchain project was exceptional. Your expertise in smart contracts and dApps was evident in the quality of your work. Your problem-solving skills, dedication, and ability to work under pressure were commendable. You’re a valuable asset to any team.",
        thumbnail: "/assets/images/bdm.png",
        service: "Smart contract development",
        date: "April 2022",
        org: "Dextec",
      },
      {
        name: "Thomas K. Heller",
        title: "CTO",
        text: "Douglas, your work on the token development and token swap website project was truly remarkable. In just three months, you managed to design and implement a robust token system, and a user-friendly token swap website. Your understanding of blockchain technology and smart contracts was clearly demonstrated in the seamless operation of the token system. Your ability to deliver such a complex project in a short time frame speaks volumes about your skills, dedication, and work ethic.",
        thumbnail: "/assets/images/cto.png",
        service: "DEX Development",
        date: "April 2022",
        org: "Swapps Finance",
      },
      {
        name: "Jackiee Gwangwadza",
        title: "Business Development Manager",
        text: "Doug is brilliant as his work!, creative with very good conceptualisation skills.",
        thumbnail:
          "https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-1/293626403_10225500583518690_5023895496657279408_n.jpg?stp=dst-jpg_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=5740b7&_nc_ohc=qhz8ytobZ9YAX8tCiQN&_nc_ht=scontent-fra3-2.xx&oh=00_AfBwU3QUL0xrzIYxQ9amZVVCUjxKrUdqzqu4xZgmOjMAxA&oe=65CECFEE",
        service: "App development",
        date: "August 2022",
        org: "Premier Services Medical Investments",
      },
      {
        name: "Hugh Vusani Mapuke",
        title: "Team Member",
        text: 'I\'ve had the pleasure of collaborating with Douglas on various projects over the past 10 years. Douglas is a highly creative, an attribute he shows "flamboyantly" in any challenge given to him. From UI/UX Design.',
        thumbnail:
          "https://scontent-fra3-1.xx.fbcdn.net/v/t31.18172-8/20819068_1733888209974374_4961608642646561867_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=zjZGqPDcM7kAX-iwC4C&_nc_oc=AQkWZZiGlOu7xtEnWFOgqiTWgJnWgimxHIVbOmXGyLWHIz-mWpG1XTos8jCVjeM4B7Q6ih0SH1VkQYorwq6OOFFO&_nc_ht=scontent-fra3-1.xx&oh=00_AfBLe5MHHNyRV2E75LymzCLxaS6kH-WkVc4QnQalCPEgkw&oe=65F167DD",
        service: "Hackathon #HackForHealth",
        date: "May 2022",
        org: "Muzinda Hub",
      },
      {
        name: "Luckson Maisva",
        title: "ICT Consultant",
        text: "Douglas is a very creative designer and i recommend him for all illustrations that requires creativity and innovation",
        thumbnail:
          "/assets/images/fl.png",
        service: "Graphic Designing",
        date: "May 2022",
        org: "Freelance",
      },
    ];

    setTestimonials(testmonies);
  }, []);

  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);

  return (
    <>
      {/* Start Testimonia Area  */}
      <div
        className="rn-testimonial-area rn-section-gap section-separator"
        id="testimonial"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">What Clients Say</span>
                <h2 className="title">Testimonial</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-activation testimonial-pb mb--30 slick-initialized slick-slider slick-dotted">
                <button
                  id="#swiper-button-prev"
                  className="slide-arrow prev-arrow slick-arrow "
                  style={{}}
                >
                  <FeatherIcon icon="arrow-left" />
                </button>
                {/* Start Single testiminail */}
                <div className="slick-list draggable" style={{ height: 600 }}>
                  <Swiper autoplay={true}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{ nextEl: '#swiper-button-next', prevEl: '#swiper-button-prev' }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={(swiper:any) => { setCurrentTestimonyIndex(swiper.activeIndex); }}
                    onSwiper={(swiper: any) => { console.log(""); }}
                  >
                    {testmonials.map(
                      (testmony: any, testimonyIndex: number) => (
                        <SwiperSlide key={testimonyIndex}>
                          <div className="slick-track">
                            <div
                              className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide slick-cloned"
                              data-slick-index={-1}
                              id=""
                              aria-hidden="false"
                              style={{ width: 1145 }}
                              tabIndex={-1}
                            >
                              <div className="inner">
                                <div className="card-info">
                                  <div className="card-thumbnail">
                                    <img
                                      src={testmony.thumbnail}
                                      alt="Testimonial-image"
                                    />
                                  </div>
                                  <div className="card-content">
                                    <span className="subtitle mt--10">
                                      {testmony.org}
                                    </span>
                                    <h3 className="title">{testmony.name}</h3>
                                    <span className="designation">
                                      {testmony.title}
                                    </span>
                                  </div>
                                </div>
                                <div className="card-description">
                                  <div className="title-area">
                                    <div className="title-info">
                                      <h3 className="title">
                                        {testmony.service}
                                      </h3>
                                      <span className="date">
                                        {testmony.date}
                                      </span>
                                    </div>
                                    <div className="rating">
                                      <img
                                        src="/assets/images/rating.png"
                                        alt="rating-image"
                                      />
                                      <img
                                        src="/assets/images/rating.png"
                                        alt="rating-image"
                                      />
                                      <img
                                        src="/assets/images/rating.png"
                                        alt="rating-image"
                                      />
                                      <img
                                        src="/assets/images/rating.png"
                                        alt="rating-image"
                                      />
                                      <img
                                        src="/assets/images/rating.png"
                                        alt="rating-image"
                                      />
                                    </div>
                                  </div>
                                  <div className="seperator" />
                                  <p className="discription">{testmony.text}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>
                {/*End Single testiminail */}
                <button
                  id="swiper-button-next"
                  className="slide-arrow next-arrow slick-arrow "
                  style={{}}
                >
                  <FeatherIcon icon="arrow-right" />
                </button>
                <ul className="slick-dots" style={{}} role="tablist">
                {testmonials.map(
                      (testmony: any, testimonyIndex: number) => (
                  <li key={testimonyIndex} className={`${testimonyIndex === currentTestimonyIndex ? "slick-active" : ""}`} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id={`slick-slide-control-${testimonyIndex}`}
                      aria-controls={`slick-slide-${testimonyIndex}`}
                      aria-label={`${testimonyIndex+1} of ${testmony.length}`}
                      tabIndex={0}
                      aria-selected="true"
                    >
                      1
                    </button>
                  </li>
                      ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonial Area  */}
    </>
  );
}

export default Testimonial;
