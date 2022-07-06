import React, { useState } from "react";
import "./App.scss";
const Content = () => {
  const [value, setValue] = useState(false);

  const handleSwitch = (index) => {
    if (value === index) {
      setValue("");
    } else {
      setValue(index);
    }
  };
  return (
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

      <div className="dropdown">
        <ul>
          <li onClick={() => handleSwitch("0")}>
            <label for="">Developers</label>
          </li>
          {value === '0' && <h2>Rita, it's not the end!</h2>}
          <li onClick={() => handleSwitch("1")}>
            <label for="">IT leaders</label>
          </li>
          {value === '1' && <h2>Fix the color of the headers when active</h2>}
          <li onClick={() => handleSwitch("2")}>
            <label for="">Business leaders</label>
          </li>
          {value === '2' && (
            <h2>
              components should be rendered instead and underneath the headers
            </h2>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Content;
