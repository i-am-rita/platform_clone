import React, { useState } from "react";
import BusinessLeaders from "../components/BusinessLeaders";
import Developers from "../components/Developers";
import ITLeaders from "../components/ITLeaders";
import {
  flexibility,
  frame,
  logos,
  videoDescription,
  inPicture,
  gridSection,
  feedback,
  updateContent,
  footerContent,
} from "../dist/data";
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
          {frame.map((item) => (
            <div className="youtube-video">
              <iframe
                width={item.width}
                height={item.height}
                src={item.src}
                title={item.title}
                frameborder={item.frameborder}
                allow={item.allow}
                allowfullscreen
              ></iframe>
            </div>
          ))}

          {videoDescription.map((vid) => (
            <div className="vid-description">
              <p>
                {vid.paragraph}
                <br />
                <a href={vid.link} className="learn-more">
                  Learn more.
                </a>
              </p>
            </div>
          ))}
        </section>

        <section className="brands">
          {logos.map((logo) => (
            <div className="logos">
              <div>
                <picture>
                  <img
                    src={logo.source}
                    alt={logo.alt}
                    loading={logo.loading}
                    width={logo.width}
                  />
                </picture>
              </div>
            </div>
          ))}
        </section>
        {/* Put the above guy in another file for mapping and clean code */}
        <div className="flexibility">
          {flexibility.map((flexi) => (
            <div className="flexibility-text">
              <h2>
                The flexibility and control <br />
                you need to build innovative <br />
                digital experiences
              </h2>
              <h3>{flexi.headthree}</h3>
            </div>
          ))}
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
        {value === 1 && <ITLeaders handleSwitch={handleSwitch} />}
        {value === 2 && <BusinessLeaders handleSwitch={handleSwitch} />}
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
          {inPicture.map((pic) => (
            <div className="platform-inpicture">
              <img
                src={pic.src}
                alt={pic.alt}
                width={pic.width}
                height={pic.height}
              />
            </div>
          ))}
        </div>
        <div className="grid-container">
          {gridSection.map((grid) => (
            <div className="grid-section">
              <img src={grid.src} alt={grid.alt} />
              <h4>{grid.headFour}</h4>
              <p>{grid.parag}</p>
            </div>
          ))}
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

            {feedback.map((feed) => (
              <div className="companies-feedback active">
                <img
                  className="company-logo"
                  src={feed.src}
                  alt={feed.alt}
                  width={feed.width}
                  height={feed.height}
                />
                <h3>{feed.text}</h3>
                <div className="director-section">
                  <img
                    className="director-image"
                    src={feed.src2}
                    alt={feed.alt2}
                    width={feed.width2}
                  />
                  <div className="director-detail">
                    <p className="name">Saaed Fattahi</p>
                    <p className="role">Director of Technology, SportRx</p>
                  </div>
                </div>
              </div>
            ))}

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
          {updateContent.map((update) => (
            <div className="updating">
              <div>
                <img src={update.src} alt={update.alt} />
              </div>
              <div className="update-text">
                <h2>{update.heading}</h2>
                <p>{update.paragraph}</p>
              </div>
            </div>
          ))}
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
          {footerContent.map((foot) => (
            <>
              <div className="platform">
                <h2>{foot.heading2}</h2>
                <div className="deploy-numbers">
                  <span className="number">{foot.span}</span>
                  <span className="number">{foot.span1}</span>
                  <span className="number">{foot.span2}</span>
                  <span className="number">{foot.span3}</span>
                  <span className="number">{foot.span4}</span>
                </div>
                <span className="deploy-text">{foot.spanText}</span>
                <div className="media">
                  <p>git</p>
                  <p>twi</p>
                  <p>lin</p>
                  <p>fac</p>
                  <p>you</p>
                  <p>oka</p>
                </div>
              </div>
              </>
        ))}

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
