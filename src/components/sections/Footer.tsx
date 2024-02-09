import React from "react";

function Footer() {
  return (
    <>
      {/* Start Footer Area */}
      <div className="rn-footer-area rn-section-gap section-separator">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-area text-center">
                <div className="logo">
                  <a href="#top">
                    <img src="/assets/images/logo-vertical.png" alt="logo" />
                  </a>
                </div>
                <p className="description mt--30">
                  © 2024. All rights reserved. 
                  <a rel="noreferer" target="_blank" href="https://www.linkedin.com/in/douglasmaposa/" >
                    {" "}Douglas Maposa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Area */}
    </>
  );
}

export default Footer;
