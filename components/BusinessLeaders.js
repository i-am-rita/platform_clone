import React from "react";
import "../Compscss/Developers.scss";
const BusinessLeaders = () => {
  return (
    <div className="developer-section">
      <div className="first-section">
        <div className="developers">
          <h2>Business <br/> Leaders</h2>
          <h3>
            Make rapid innovation a reality, and enable your teams to build
            engaging customer experiences, faster.
          </h3>
        </div>
        <div className="image-section">
          <img
            src="https://platform.sh/images/home/businessleader-ui-1@2x.png"
            width="100%"
            alt="Business leader image"
          />
        </div>
      </div>

      {/* Second section */}
      <div className="second-section">
        <div className="card">
          <img
            src="https://platform.sh/images/customers/color/burst.png"
            alt="burst's logo"
            width="100px"
            height="50%"
            style={{ paddingBottom: "25px" }}
          />
          <p>
            “Platform.sh goes beyond hosting; it’s an integrated solution, so we
            can develop, build, and launch global platforms for our clients in
            the most efficient, stable, and secure way. We can focus on our core
            business. When we deploy, everything works.”
          </p>
          <div className="director-image">
            <img
              className="cecile-image"
              src="https://platform.sh/images/home/hans_burst.png"
              alt="Hans's image"
              width="100px"
            />
            <div className="director-detail">
              <p className="name">Hans Malthai</p>
              <p className="role">Founder and CEO</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="features">
          <h2> Features</h2>
          <div className="featured-details">
            <div className="feature">
              <h3>Effective scalability</h3>
              <p>
                Scale resources seamlessly to meet business demands. Start
                small, and grow as needed.
              </p>
            </div>
            <div className="feature">
              <h3>Accelerated application development</h3>
              <p>
                Increase revenue and overall satisfaction by delivering amazing
                digital experiences quickly.
              </p>
            </div>
            <div className="feature">
              <h3>Resource optimization</h3>
              <p>
                Free your teams to focus on your core business instead of
                security and infrastructure management.
              </p>
            </div>
            <div className="feature">
              <h3>Environmental awareness</h3>
              <p>
                Build, deploy and host on a cloud infrastructure that reduces
                your carbon footprint through greater efficiency and improved
                operating models.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="back-forth">
        <p>- Business leaders</p>
        <p>IT leaders -</p>
      </div>
    </div>
  );
};

export default BusinessLeaders;
