import React from "react";
import "../Compscss/Developers.scss";
const Developers = () => {
  return (
    <div className="developer-section">
      <div className="first-section">
        <div className="developers">
          <h2>Developers</h2>
          <h3>
            Eliminate the need to build, manage, and maintain core
            infrastructure.
          </h3>
        </div>
        <div className="image-section">
          <img
            src="https://platform.sh/images/home/developer-ui-1@2x.png"
            width="100%"
          />
        </div>
      </div>

      {/* Second section */}
      <div className="second-section">
        <div className="card">
          <img
            src="https://platform.sh/images/customers/color/grantstation-logo.jpg"
            alt="GrantStation logo"
            width="100px"
            height="50%"
            style={{ paddingBottom: "25px" }}
          />
          <p>
            “Using Platform.sh, we’ve been able to make use of development and
            staging environments to seamlessly test functionality additions,
            improvements, and fixes—in a secure, safe manner—before pushing them
            live to our customers.”
          </p>
          <div className="director-image">
            <img
              className="cecile-image"
              src="https://platform.sh/images/spare-time/headshots/cecily.png"
              alt="image Cecile"
              width="100px"
            />
            <div className="director-detail">
              <p className="name">Cecily Borzillo</p>
              <p className="role">Director of Site Technology</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="features">
          <h2> Features</h2>
          <div className="featured-details">
            <div className="feature">
              <h3>Unify development silos</h3>
              <p>
                Create an instant application clone for every Git branch to
                rapidly update, test, and deploy new features to production.
              </p>
            </div>
            <div className="feature">
              <h3>Effortless development</h3>
              <p>
                Benefit from automated deployments, stable environments, and a
                consistent development workflow—without managing infrastructure.
              </p>
            </div>
            <div className="feature">
              <h3>Secure by design</h3>
              <p>
                Develop on a single, global, secured cloud infrastructure, and
                solve multiple customer needs across different industries and
                geographies.
              </p>
            </div>
            <div className="feature">
              <h3>Unmatched flexibility</h3>
              <p>
                Build amazing websites and web apps in the languages and
                frameworks of your choice.
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

export default Developers;
