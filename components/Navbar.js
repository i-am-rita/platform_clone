import React from "react";
import "../Compscss/Navbar.scss";
const Navbar = () => {
  return (
    <>
      <div className="wrapper">
        <div className="navigation-bar">
          <div className="nav">
            {/* <h3>huxbvn</h3> */}
            <ul>
              <li>Join us on Slack</li>
              <li>Docs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="navbar">
          <nav className="second-nav">
            {/* <h2>platform.sh</h2> */}

            <div className="navin-nav">
              <h2> platform.sh</h2>
              <ul>
                <li className="first-drop">
                  <a>Product</a>
                  <div className="product-dropdown">
                    <div className="dropdown-content">
                      <div className="first-content">
                        <h4>Overview</h4>
                        <hr className="hr" />
                        <h3>Platform.sh</h3>
                        <p>
                          Build any website or web app on a fully automated
                          cloud infrastructure.
                        </p>
                      </div>
                      <div>
                        <h3>Frameworks</h3>
                      </div>
                      <div>
                        <h3>Features</h3>
                      </div>
                      <div>
                        <h3>Solutions</h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li>Pricing</li>
                <li>Partner</li>
                <li>Resources</li>
              </ul>
            </div>
            {/* <div className="navin-nav">
              <div className="dropdown">
                <a>Product</a>
                <div class="dropdown-content">
                  <div className="drop-content">
                  <div className="single-content">
                    <div className="overview">
                      <h3>Overview</h3>
                    </div>
                    </div>
                    <div>
                      <h3>Frameworks</h3>
                    </div>
                    <div>
                      <h3>Features</h3>
                    </div>
                    <div>
                      <h3>Solutions</h3>
                    </div>
                  </div>
                </div>{" "}
              </div>

              <a>Pricing</a>
              <a>Partner</a>
              <a>Resources</a>
            </div> */}
            <div className="navbar-buttons">
              <button className="button1">Login</button>
              <button className="button2">Free Trial</button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
