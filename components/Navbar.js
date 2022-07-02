import React from "react";
import "./Navbar.scss";
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
          <nav  className="second-nav">
            <div className="navin-nav">
              <h2> platform.sh</h2>
              {/* <div className="links"> */}
              <ul>
                <li>Product</li>
                <li>Pricing</li>
                <li>Partner</li>
                <li>Resources</li>
              </ul>
              </div>
              <div className="navbar-buttons">
                <button className="button1">Login</button>
                <button className="button2">Free Trial</button>
              </div>
              {/* </div> */}
           
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
