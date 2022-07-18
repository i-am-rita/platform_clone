import React, { useState } from "react";
import BusinessLeaders from "../components/BusinessLeaders";
import Developers from "../components/Developers";
import ITLeaders from "../components/ITLeaders";
import "./App.scss";
const Content = () => {
  const [value, setValue] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [textColor, setTextColor] = useState("#797477");
  const [marginBottomColor, setMarginBottomColor] = useState("#145cc6");
  const handleSwitch = (index) => {
    if (value === index) {
      setValue(value);
    } else {
      setValue(index);
    }
    // setTextColor(textColor === "#797477" ? "blue" : "red");
  };

  const handleNext = () => {
    // setActiveStep(con)
    console.log("active");
  };

  // const handleColorChange = () => {
  //   setTextColor(textColor === "#797477" ? "blue" : "black");
  //   // setMarginBottomColor(marginBottomColor);
  // };
  // let numbers = [5, 1, 2, 6, 8];
  // numbers.forEach((number) => console.log(number));

  return (
    <main className="main-container">
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
        <section className="video-section">
          <div className="youtube-video">
            <iframe
              width="60%"
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
              <a
                href="https://platform.sh/blog/2022/platformsh-announces-140-million-series-d-funding/"
                className="learn-more"
              >
                Learn more.
              </a>
            </p>
          </div>
        </section>

        <section className="brands">
          <div className="logos">
            <div>
              <picture>
                {/* <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/mentos-logo-bw.webp"
                  width="70%"
                /> */}
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
                {/* <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/ubaldi-logo-bw.webp"
                  width="70%"
                /> */}
                <img
                  src="https://platform.sh/images/customers/bw/ubaldi-logo-bw.webp"
                  alt="mentos"
                  loading="lazy"
                  width="70%"
                />
              </picture>
            </div>

            <div>
              <picture>
                {/* <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/mizzou@1x.png"
                  width="70%"
                /> */}
                <img
                  src="https://platform.sh/images/customers/bw/mizzou@1x.png"
                  alt="mentos"
                  loading="lazy"
                  width="70%"
                />
              </picture>
            </div>
            <div>
              {" "}
              <picture>
                {/* <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/Orange_logo.webp"
                /> */}
                <img
                  src="https://platform.sh/images/customers/bw/Orange_logo.webp"
                  alt="mentos"
                  loading="lazy"
                  width="70%"
                />
              </picture>
            </div>
            <div>
              <picture>
                {/* <source
                  type="image"
                  srcset="https://platform.sh/images/customers/bw/british_council-logo-bw.webp"
                  width="70%"
                /> */}
                <img
                  src="https://platform.sh/images/customers/bw/british_council-logo-bw.webp"
                  alt="mentos"
                  loading="lazy"
                  width="70%"
                />
              </picture>
            </div>
          </div>
        </section>
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
          <h2 onClick={() => handleSwitch(0)}>
            <label for="">Developers</label>
          </h2>
        </div>

        {/* <div className="showcase"> */}
        <div>
          <h2 onClick={() => handleSwitch(1)}>
            <label for="">IT Leaders</label>
          </h2>
        </div>
        <div>
          {" "}
          <h2 onClick={() => handleSwitch(2)}>
            <label for="">Business Leaders</label>
          </h2>
        </div>
      </div>
      <div className="showcase-content">
        {value === 0 && <Developers handleSwitch={handleSwitch} />}
        {value === 1 && <ITLeaders />}
        {value === 2 && <BusinessLeaders />}
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
      </div>
      <div className="solutions">
        <div className="solution-content">
          <h1>Deliver solutions that drive transformation with Platform.sh</h1>
          <button className="buttonA">Get Started {">>"}</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="platform">
            <h2>platform.sh</h2>
            <div className="deploy-numbers">
              <span className="number">5</span>
              <span className="number">1</span>
              <span className="number">2</span>
              <span className="number">6</span>
              <span className="number">8</span>
            </div>
            <span className="deploy-text">
              Deployments this week (including Fridays!)
            </span>
            <div className="media">
              <p>git</p>
              <p>twi</p>
              <p>lin</p>
              <p>fac</p>
              <p>you</p>
              <p>oka</p>
            </div>
          </div>
          <div>
            <h1 className="footer-section">Company</h1>
            <ul className="section-content">
              <li>About</li>
              <li>Security and compliance</li>
              <li>Trust Center</li>
              <li>Board and investors</li>
              <li>Press</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="footer-section">Regions</h1>
            <ul className="section-content">
              <li>Regions map</li>
              <li>Australia</li>
              <li>Canada</li>
              <li>France</li>
              <li>DACH</li>
              <li>UK</li>
            </ul>
          </div>
          <div>
            <h1 className="footer-section">Resources</h1>
            <ul className="section-content">
              <li>Downloads</li>
              <li>What is FleetOPs?</li>
              <li>CI/CD on Platform.sh</li>
              <li>Our blog</li>
              <li>Partner portal</li>
            </ul>
            {/* <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p> */}
          </div>
          <div>
            <h1 className="footer-section">Product</h1>
            <ul className="section-content">
              <li>What is Platform.sh?</li>
              <li>
                What can you run on <br /> Platform.sh?
              </li>
              <li>Drupal cloud hosting</li>
              <li>Wordpress cloud hosting</li>
              <li>Alternative to Kubernetes</li>
              <li>Resources Auto-Scaling</li>
              <li>Observability Suite</li>
            </ul>
          </div>
        </div>
        <div className="privacy-section">
          <ul>
            <li>System Status</li>
            <li>Privacy</li>
            <li>Terms of Service</li>
            <li>Impressum</li>
            <li>WCAG Compliance</li>
            <li>Manage your cookie preferences</li>
            <li>Report a Security Issue</li>
          </ul>
        </div>
        <div className="support">
          <p>© 2022 Platform.sh. All rights reserved.</p>
          {/* oka */}
          <a href="#">
            Supported by Horizon 2020's SME Instrument - European Commission 🇪🇺
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Content;
