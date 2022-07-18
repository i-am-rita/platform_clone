import React from "react";
import "../Compscss/Developers.scss";
const ITLeaders = () => {
  return (
    <div className="developer-section">
      <div className="first-section">
        <div className="developers">
          <h2>IT Leaders</h2>
          <h3>
            Deliver a powerful, secure, and fully maintained cloud
            infrastructure across your organization.
          </h3>
        </div>
        <div className="image-section">
          <img
            src="https://platform.sh/images/home/itleader-ui-1.png"
            width="100%"
            alt="IT leader image"
          />
        </div>
      </div>

      {/* Second section */}
      <div className="second-section">
        <div className="card">
          <img
            src="https://platform.sh/images/industry/retail/sportrx-logo.png"
            alt="GrantStation logo"
            width="100px"
            height="50%"
            style={{ paddingBottom: "25px" }}
          />
          <p>
            “Our Platform.sh environment easily and automatically scales out to
            meet the demands of the incoming web traffic, and it’s
            triple-redundant to protect us against hardware failures.”
          </p>
          <div className="director-image">
            <img
              className="cecile-image"
              src="https://platform.sh/images/industry/retail/saaed-fattahi_sportrx.png"
              alt="image Cecile"
              width="100px"
            />
            <div className="director-detail">
              <p className="name">Saaed Fattahi</p>
              <p className="role">Director of Technology</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="features">
          <h2> Features</h2>
          <div className="featured-details">
            <div className="feature">
              <h3>Secured globally</h3>
              <p>
                Deploy a web app or website on a secure-by-design cloud
                infrastructure—without any configuration or management.
              </p>
            </div>
            <div className="feature">
              <h3>Avoid outages</h3>
              <p>
                Predict and resolve issues with your website or web app, before
                they impact your business.
              </p>
            </div>
            <div className="feature">
              <h3>Operational efficiency</h3>
              <p>
                Give developers access to the tools they need while enforcing
                best practices to ensure application quality.
              </p>
            </div>
            <div className="feature">
              <h3>Cloud agnostic</h3>
              <p>
                Avoid vendor lock-in, and deploy across multiple regions and
                cloud providers, including AWS, GCP, Azure, Orange, and OVH.
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

export default ITLeaders;
