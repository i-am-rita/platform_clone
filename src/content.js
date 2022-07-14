import React, { useState } from "react";
import BusinessLeaders from "../components/BusinessLeaders";
import Developers from "../components/Developers";
import ITLeaders from "../components/ITLeaders";
import "./App.scss";
const Content = () => {
  const [value, setValue] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const handleSwitch = (index) => {
    if (value === index) {
      setValue("");
    } else {
      setValue(index);
    }
  };

  const handleNext = () => {
    // setActiveStep(con)
    console.log("active");
  };
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="content">
          <h1>
            The cloud PaaS to <span>develop</span> <br />
            websites and web apps{" "}
          </h1>
        </div>
        <div className="content-buttons">
          <button className="buttonA">Watch demo {">>"}</button>
          <button className="buttonB">Product overview {">>"}</button>
        </div>

        {/* second */}
        <div className="video-section">
          <div className="youtube-video">
            <iframe
              width="65%"
              height="390"
              src="https://www.youtube.com/embed/QNxlu3rISFg"
              title="We have secured $140M in Series D funding!"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="vid-description">
            <p>
              Platform.sh secures $140 million in series D funding to support
              enterprises in scaling fleets of websites and applications. <br />
              <a href="/" className="learn-more">
                Learn more.
              </a>
            </p>
          </div>
        </div>

        <div className="brands">
          <div className="logos">
            <div>
              <picture>
                <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/mentos-logo-bw.webp"
                />
                <img
                  src="https://platform.sh/images/customers/bw/mentos-logo-bw.webp"
                  alt="mentos"
                  loading="lazy"
                  width="70%"
                />
              </picture>
            </div>
            <div>
              {" "}
              <picture>
                <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/ubaldi-logo-bw.webp"
                />
                <img
                  src="https://platform.sh/images/customers/bw/ubaldi-logo-bw.webp"
                  alt="mentos"
                  loading="lazy"
                  width="50%"
                />
              </picture>
            </div>

            <div>
              <picture>
                <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/mizzou@1x.png"
                />
                <img
                  src="https://platform.sh/images/customers/bw/mizzou@1x.png"
                  alt="mentos"
                  loading="lazy"
                  width="80%"
                />
              </picture>
            </div>
            <div>
              {" "}
              <picture>
                <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/Orange_logo.webp"
                />
                <img
                  src="https://platform.sh/images/customers/bw/Orange_logo.webp"
                  alt="mentos"
                  loading="lazy"
                  width="80%"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/british_council-logo-bw.webp"
                />
                <img
                  src="https://platform.sh/images/customers/bw/british_council-logo-bw.webp"
                  alt="mentos"
                  loading="lazy"
                  width="40%"
                />
              </picture>
            </div>
          </div>
        </div>
        {/* Put the above guy in another file for mapping and clean code */}
        <div className="flexibility">
          <div className="flexibility-text">
            <h2>
              The flexibility and control <br />
              you need to build innovative <br />
              digital experiences
            </h2>
            <h3>Discover how Platform.sh can deliver business value</h3>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div>
          {" "}
          <h2 onClick={() => handleSwitch("1")}>
            <label for="">Developers</label>
          </h2>
        </div>

        {/* <div className="showcase"> */}
        <div>
          <h2 onClick={() => handleSwitch("2")}>
            <label for="">IT Leaders</label>
          </h2>
        </div>
        <div>
          {" "}
          <h2 onClick={() => handleSwitch("3")}>
            <label for="">Business Leaders</label>
          </h2>
        </div>
      </div>
      <div className="showcase-content">
        {value === "1" && <Developers />}
        {value === "2" && <ITLeaders />}
        {value === "3" && <BusinessLeaders />}
      </div>

      <div className="content-wrapper">
        <div className="outof-box">
          <div className="outof-boxcontent">
            <h2>Works right out of the box</h2>
            <h3>
              Deploy a complex architecture with a single click, get a <br />
              secure, fully built, managed infrastructure—in seconds.
            </h3>
          </div>
          <div className="platform-inpicture">
            <img
              src="https://platform.sh/images/home/circle-chart.svg"
              alt="platform.sh's cycle"
              width="700px"
              height="auto"
            />
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-section">
            <img
              src="https://platform.sh/images/home/innovate.svg"
              alt="innovate"
            />
            <h4>Innovate</h4>
            <p>
              Innovate faster because all the services you need are included—1
              website or 1,000, get up and running quickly.
            </p>
          </div>
          <div className="grid-section">
            <img
              src="https://platform.sh/images/home/focus.svg"
              alt="innovate"
            />
            <h4>Focus</h4>
            <p>
              Focus on solving customer challenges—not on operating
              infrastructure.
            </p>
          </div>
          <div className="grid-section">
            <img
              src="https://platform.sh/images/home/deploy.svg"
              alt="innovate"
            />
            <h4>Deploy</h4>
            <p>Confidently update, integrate, and deploy code in real time.</p>
          </div>
        </div>
        {/* Deploy Card */}
        <div className="deploy-card">
          <div className="deploy-content">
            <h3>With Platform.sh, deploy faster and more often</h3>
            <button className="buttonA">Get Started {">>"}</button>
          </div>
        </div>

        <div className="trusted-companies">
          <div className="trusted-content">
            <h3> Trusted by companies like yours</h3>
          </div>
          <div className="action-arrows">
            <p className="carousel prev">Previous</p>
            <p className="carousel next">Next</p>
            <div className="companies-feedback active">
              <img
                className="company-logo"
                src="https://platform.sh/images/customers/bw/sportrx-bw.png"
                alt="sportrx-logo"
                width="20%"
                height="auto"
              />
              <h3>
                Compared to our previous cloud infrastructure, our Platform.sh
                environment has been very stable and performant. We spend much
                less time dealing with performance and caching issues and more
                time on end-user features that make the online experience better
                for our customers.
              </h3>
              <div className="director-section">
                <img
                  className="director-image"
                  src="https://platform.sh/images/industry/retail/saaed-fattahi_sportrx.png"
                  alt="image Cecile"
                  width="100px"
                />
                <div className="director-detail">
                  <p className="name">Saaed Fattahi</p>
                  <p className="role">Director of Technology, SportRx</p>
                </div>
              </div>
            </div>
            {/* <div className="companies-feedback">
              <img
                src="https://platform.sh/images/customers/bw/sportrx-bw.png"
                alt="sportrx-logo"
                width="20%"
                height="auto"
              />
              <h3>
                Compared to our previous cloud infrastructure, our Platform.sh
                environment has been very stable and performant. We spend much
                less time dealing with performance and caching issues and more
                time on end-user features that make the online experience better
                for our customers.
              </h3>
            </div> */}
          </div>
        </div>
        {/* What's New */}
        <div className="whats-new">
          <h2>What's new at Platform.sh</h2>
        </div>
        <div className="update-content">
          <div className="updating">
            <div>
              <img
                src="https://platform.sh/company/press/2022/platformsh-renews-partnership-with-adobe-commerce/images/cover.png"
                alt=""
              />
            </div>
            <div className="update-text">
              <h2>Press Release</h2>
              <p>
                Platform.sh renews partnership with Adobe to power the future of
                commerce
              </p>
            </div>
          </div>
          <div className="updating">
            <div>
              <img
                src="https://platform.sh/blog/2022/platformsh-announces-140-million-series-d-funding/images/cover.png"
                alt=""
              />
            </div>
            <div className="update-text">
              <h2>Blog Post</h2>
              <p>
                <p>Platform.sh announces $140m series D round of funding</p>
              </p>
            </div>
          </div>
          <div className="updating">
            <div>
              <img
                src="https://platform.sh/blog/2021/platformsh-joins-forces-with-blackfire/images/header@2x-100.jpg"
                alt=""
              />
            </div>
            <div className="update-text">
              <h2>Blog Post</h2>
              <p>
                <p>Why Platform.sh is joining forces with Blackfire.io</p>
              </p>
            </div>
          </div>
        </div>
        {/* End of what's new */}
        <div className="solutions">
          <div className="solution-content">
            <h1>
              Deliver solutions that drive transformation with Platform.sh
            </h1>
            <button className="buttonA">Get Started {">>"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
