import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const articles: any = [
      {
        title: "Unveiling My Icon",
        image: "/assets/images/logo.png",
        category: "Last week",
        min: 3,
        url: "https://medium.com/@doug.maposa/awakening-creativity-beyond-imagination-unveiling-my-icon-2e2fee67a902",
      },
      {
        title: "My Journey as a Dev",
        image: "/assets/images/skills.png",
        category: "3 weeks ago",
        min: 14,
        url: "https://medium.com/@doug.maposa/my-journey-from-graphic-design-to-web3-development-23032aaeadd6",
      },
      {
        title: "ZK Protocols on Blockchain",
        image: "/assets/images/zk.png",
        category: "2 months ago",
        min: 3,
        url: "https://medium.com/@doug.maposa/zk-rollups-and-the-blockchain-4a01fd5c24f4",
      },
    ];

    setBlogs(articles);
  }, []);

  return (
    <>
      {/* Start News Area */}
      <div className="rn-blog-area rn-section-gap section-separator" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={100}
                data-aos-once="true"
                className="section-title text-center aos-init aos-animate"
              >
                <span className="subtitle">
                  Visit my blog and give feedback
                </span>
                <h2 className="title">My Blog</h2>
              </div>
            </div>
          </div>
          <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
            {/* Start Single blog */}
            {blogs.map((blog: any, blogIndex: number) => (
              <div
                key={blogIndex}
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={100}
                data-aos-once="true"
                className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 aos-init aos-animate"
              >
                <div className="rn-blog">
                  <div className="inner">
                    <div className="thumbnail">
                      <a href={blog.url}>
                        <img src={blog.image} alt={blog.title} />
                      </a>
                    </div>
                    <div className="content">
                      <div className="category-info">
                        <div className="category-list">
                          <a href={blog.url}>{blog.category}</a>
                        </div>
                        <div className="meta">
                          <span>
                            <FeatherIcon icon="clock" /> {blog.min} min read
                          </span>
                        </div>
                      </div>
                      <h4 className="title">
                        <a href={blog.url}>
                          {blog.title}
                          <FeatherIcon icon="arrow-up-right" />
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* End Single blog */}
          </div>
        </div>
      </div>
      {/* End Mews Area */}
    </>
  );
}

export default Blog;
