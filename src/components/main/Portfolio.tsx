import React, { useEffect, useState } from "react";

function Portfolio() {
  const [portfolios, setPortfolio] = useState([]);

  useEffect(() => {
    const works: any = [
      {
        client: "Decentralized Exchange",
        thumbnail: "/assets/images/swapps.png",
        title: "Swapps Finance",
        url: "https://swapps.finance",
      },
      {
        client: "NFT Marketplace",
        thumbnail: "/assets/images/enftis.png",
        title: "Enftis",
        url: "https://enftis.com",
      },
      {
        client: "Zero Knowledge Protocol Crypto Wallet",
        thumbnail: "/assets/images/portfolio-05.jpg",
        title: "ZK Wallet",
        url: "https://zkwallet.network",
      },
      {
        client: "Jouel Decentralized Autonomous Organization ",
        thumbnail: "/assets/images/jouel.png",
        title: "Jouel DAO Network",
        url: "https://jouel.net",
      },
      {
        client: "Generative AI",
        thumbnail: "/assets/images/qprompt.png",
        title: "Q.Prompt",
        url: "https://qprompt.site",
      },
      {
        client: "Online Food Delivery",
        thumbnail: "/assets/images/mbs.png",
        title: "Mambo's Chicken",
        url: "https://mamboschicken.com",
      },
      {
        client: "AFRODAD",
        thumbnail: "/assets/images/afro.png",
        title: "African Forum on Debt and Development",
        url: "https://afrodad.org",
      },
      {
        client: "Car Rental Service",
        thumbnail: "/assets/images/iml.png",
        title: "Impala Car Rental",
        url: "https://impala.co.zw",
      },
      {
        client: "Panel Beating Site",
        thumbnail: "/assets/images/gk.png",
        title: "Golden Knot Panel Beaters",
        url: "https://gkpanelbeaters.co.zw",
      },
    ];

    setPortfolio(works);
  }, []);

  return (
    <>
      {/* Start Portfolio Area */}
      <div
        className="rn-portfolio-area rn-section-gap section-separator"
        id="portfolio"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">
                  Visit my portfolio and keep your feedback
                </span>
                <h2 className="title">My Portfolio</h2>
              </div>
            </div>
          </div>
          <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
            {portfolios.map((item: any, itemIndex: number) => (
              <>
                {/* Start Single Portfolio */}
                <div
                  key={`item${itemIndex}`}
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-once="true"
                  className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
                >
                  <div
                    className="rn-portfolio"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                  >
                    <div className="inner">
                      <div className="thumbnail">
                        <a target="_blank" href={`${item.url}`}>
                          <img
                            src={item.thumbnail}
                            alt="Personal Portfolio Images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a target="_blank" href={`${item.url}`}>
                            {item.title}
                          </a>
                        </h4>
                        <div className="category-info">
                          <div className="category-list">
                            <a target="_blank" href={`${item.url}`}>
                              {item.client}
                            </a>
                          </div>
                        </div>
                        <small>
                          <a target="_blank" href={`${item.url}`}>
                            {item.url}
                          </a>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Portfolio */}
              </>
            ))}
          </div>
        </div>
      </div>
      {/* End portfolio Area */}
    </>
  );
}

export default Portfolio;
