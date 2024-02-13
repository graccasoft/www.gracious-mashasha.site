import React, { useEffect, useState } from "react";

function Tech() {
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    const techs: any = [
      {
        label: "UI / UX & Prototyping",
        id: "ui-ux-design",
        technologies: [
          {
            icon: "/assets/images/icons/figma.png",
            label: "Figma",
            id: "figma",
          },
          {
            icon: "/assets/images/icons/adobe-xd.png",
            label: "Sketch",
            id: "sketch",
          },
          {
            icon: "/assets/images/icons/corel.png",
            label: "Corel Draw",
            id: "corel",
          },
          {
            icon: "/assets/images/icons/axure.png",
            label: "Axure",
            id: "axure",
          },
          {
            icon: "/assets/images/icons/invision.png",
            label: "Invision",
            id: "invision",
          },
          {
            icon: "/assets/images/icons/proto.png",
            label: "Proto",
            id: "proto",
          },
          {
            icon: "/assets/images/icons/xd.png",
            label: "Adobe XD",
            id: "adobe-xd",
          },
          {
            icon: "/assets/images/icons/illustrator.png",
            label: "Illustrator",
            id: "illustrator",
          },
          {
            icon: "/assets/images/icons/photoshop.png",
            label: "Photoshop",
            id: "photoshop",
          },
        ],
      },
      {
        label: "Frontend Development",
        id: "frontend-development",
        technologies: [
          {
            icon: "/assets/images/icons/react.png",
            label: "ReactJS (Native) / Redux",
            id: "react-js",
          },
          {
            icon: "/assets/images/icons/next.png",
            label: "Next JS",
            id: "next-js",
          },
          {
            icon: "/assets/images/icons/tailwind.png",
            label: "Tailwind CSS",
            id: "tailwind",
          },
          {
            icon: "/assets/images/icons/html.png",
            label: "HTML",
            id: "html",
          },
          {
            icon: "/assets/images/icons/javascript.png",
            label: "Javascript",
            id: "javascript",
          },
          {
            icon: "/assets/images/icons/typescript.png",
            label: "Typescript",
            id: "typescript",
          },
          {
            icon: "/assets/images/icons/chakra.png",
            label: "Chakra UI",
            id: "chakra",
          },
          {
            icon: "/assets/images/icons/material.png",
            label: "Material UI",
            id: "material-ui",
          },
          {
            icon: "/assets/images/icons/ant.png",
            label: "Ant Design UI",
            id: "ant-design",
          },
        ],
      },
      {
        label: "Backend Development",
        id: "backend-development",
        technologies: [
          {
            icon: "/assets/images/icons/node.png",
            label: "Node JS",
            id: "node-js",
          },
          {
            icon: "/assets/images/icons/express.png",
            label: "Express JS",
            id: "express-js",
          },
          {
            icon: "/assets/images/icons/python.png",
            label: "Python",
            id: "python",
          },
          {
            icon: "/assets/images/icons/php.png",
            label: "PHP",
            id: "php",
          },
          {
            icon: "/assets/images/icons/go.png",
            label: "Go Lang",
            id: "go",
          },
          {
            icon: "/assets/images/icons/rust.png",
            label: "Rust",
            id: "rust",
          },
          {
            icon: "/assets/images/icons/apache.png",
            label: "Apache Web Service",
            id: "apache",
          },
          {
            icon: "/assets/images/icons/graphql.png",
            label: "GraphQL",
            id: "graph-ql",
          },
          {
            icon: "/assets/images/icons/apis.png",
            label: "Restful APIs",
            id: "apis",
          },
        ],
      },
      {
        label: "Mobile Applications",
        id: "mobile-applications",
        technologies: [
          {
            icon: "/assets/images/icons/ios.png",
            label: "iOS",
            id: "ios",
          },
          {
            icon: "/assets/images/icons/swift.png",
            label: "Swift",
            id: "swift",
          },
          {
            icon: "/assets/images/icons/xcode.png",
            label: "XCode",
            id: "xcode",
          },
          {
            icon: "/assets/images/icons/android.png",
            label: "Android",
            id: "android",
          },
          {
            icon: "/assets/images/icons/android-studio.png",
            label: "Android Studio",
            id: "android-studio",
          },
          {
            icon: "/assets/images/icons/kotlin.svg",
            label: "Kotlin",
            id: "kotlin",
          },
          {
            icon: "/assets/images/icons/ionic.png",
            label: "Ionic Framework",
            id: "ionic",
          },
          {
            icon: "/assets/images/icons/capacitor.png",
            label: "Capacitor JS",
            id: "capacitor",
          },
          {
            icon: "/assets/images/icons/cordova.png",
            label: "Cordova",
            id: "cordova",
          },
        ],
      },
      {
        label: "Database Engineering",
        id: "database-engineering",
        technologies: [
          {
            icon: "/assets/images/icons/mysql.png",
            label: "MySQL",
            id: "mysql",
          },
          {
            icon: "/assets/images/icons/postgresql.png",
            label: "PostgreSQL",
            id: "postgresql",
          },
          {
            icon: "/assets/images/icons/mongo.png",
            label: "Mongo DB",
            id: "mongo-db",
          },
          {
            icon: "/assets/images/icons/firebase.png",
            label: "Firebase",
            id: "firebase",
          },
          {
            icon: "/assets/images/icons/supabase.png",
            label: "Supabase",
            id: "supabase",
          },
          {
            icon: "/assets/images/icons/dynamo.png",
            label: "Dynamo DB",
            id: "dynamo",
          },
          {
            icon: "/assets/images/icons/redis.webp",
            label: "Redis DB",
            id: "redis",
          },
          {
            icon: "/assets/images/icons/couchdb.webp",
            label: "Couch DB",
            id: "nosql",
          },
          {
            icon: "/assets/images/icons/db.png",
            label: "NoSQL DB",
            id: "nosql",
          },
        ],
      },
      {
        label: "Blockchain Engineering",
        id: "blockchain",
        technologies: [
          {
            icon: "/assets/images/icons/ethereum.png",
            label: "Ethereum",
            id: "ethereum",
          },
          {
            icon: "/assets/images/icons/polygon.png",
            label: "Polygon",
            id: "polygon",
          },
          {
            icon: "/assets/images/icons/binance.png",
            label: "Binance Chain",
            id: "binance",
          },
          {
            icon: "/assets/images/icons/avalanche.png",
            label: "Avalanche",
            id: "avalanche",
          },
          {
            icon: "/assets/images/icons/optimism.png",
            label: "Optimism",
            id: "optimism",
          },
          {
            icon: "/assets/images/icons/solana.png",
            label: "Solana",
            id: "solana",
          },
          {
            icon: "/assets/images/icons/solidity.png",
            label: "Solidity",
            id: "solidity",
          },
          {
            icon: "/assets/images/icons/hardhat.png",
            label: "Hardhat",
            id: "hardhat",
          },
          {
            icon: "/assets/images/icons/ethers.png",
            label: "Ethers JS",
            id: "ethers",
          },
        ],
      },
      {
        label: "DevOps",
        id: "devops",
        technologies: [
          {
            icon: "/assets/images/icons/devops.png",
            label: "CI/CD Pipelines",
            id: "devops",
          },
          {
            icon: "/assets/images/icons/git.png",
            label: "Git",
            id: "git",
          },
          {
            icon: "/assets/images/icons/github.png",
            label: "Github",
            id: "github",
          },
          {
            icon: "/assets/images/icons/docker.png",
            label: "Docker",
            id: "docker",
          },
          {
            icon: "/assets/images/icons/aws.png",
            label: "Amazon Web Services",
            id: "aws",
          },
          {
            icon: "/assets/images/icons/azure.png",
            label: "Microsoft Azure",
            id: "azure",
          },
          {
            icon: "/assets/images/icons/google.png",
            label: "Google Cloud",
            id: "google",
          },
          {
            icon: "/assets/images/icons/kubernetes.png",
            label: "Kubernetes",
            id: "k8s",
          },
          {
            icon: "/assets/images/icons/vercel.png",
            label: "Vercel",
            id: "vercel",
          },
        ],
      },
    ];

    setStacks(techs);
  }, []);

  return (
    <>
      {/* Start tech stack Area */}
      <div
        className="rn-client-area rn-section-gap section-separator"
        id="clients"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">Technology Stack</span>
                <h2 className="title">Skills</h2>
              </div>
            </div>
          </div>
          <div className="row row--25 mt--50 mt_md--40 mt_sm--40">
            <div className="col-lg-4">
              <div className="d-flex flex-wrap align-content-start h-100">
                <div
                  className="position-sticky clients-wrapper sticky-top rbt-sticky-top-adjust"
                  style={{ top: 120 }}
                >
                  <ul
                    className="nav tab-navigation-button flex-column nav-pills me-3"
                    id="skills-tab"
                    role="tablist"
                  >
                    {stacks.map((stack: any, stackIndex: number) => (
                      <li key={stackIndex} className="nav-item">
                        <a
                          className={`nav-link ${stackIndex === 0 ? "active" : ""}`}
                          id={`skills-${stack.id}-tab`}
                          data-bs-toggle="tab"
                          href={`#skills-${stack.id}-tab-content`}
                          role="tab"
                          aria-selected="true"
                        >
                          {stack.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-area">
                <div className="d-flex align-items-start">
                  <div className="tab-content" id="skills-tabContent">
                    {stacks.map((stack: any, stackIndex: number) => (
                      <div
                        key={stackIndex}
                        className={`tab-pane fade ${stackIndex === 0 ? "active show" : ""}`}
                        id={`skills-${stack.id}-tab-content`}
                        role="tabpanel"
                        aria-labelledby={`skills-${stack.id}-tab-content`}
                      >
                        <div className="client-card">
                          {/* Start Single Brand  */}
                          {stack.technologies.map(
                            (technology: any, technologyIndex: number) => (
                              <div
                                key={technologyIndex}
                                className="main-content"
                              >
                                <div className="inner text-center">
                                  <div className="thumbnail">
                                    <a href="#">
                                      <img
                                        src={technology.icon}
                                        alt={technology.label}
                                      />
                                    </a>
                                  </div>
                                  <div className="seperator" />
                                  <div className="client-name">
                                    <span>
                                      <a href="#">{technology.label}</a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                          {/* End Single Brand  */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End tech stack section */}
    </>
  );
}

export default Tech;
