import React from "react";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <span>
              {" "}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "red" }}
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </span>
            <span className="ms-5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1D9BF0" }}
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </span>
            <span className="ms-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#0E8EF1" }}
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </span>
            <span className="ms-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1F2328" }}
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </span>
            <span className="ms-5">
              {" "}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#E5405B" }}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </span>
          </div>
          JOS
        </div>
      </div>
    </div>
  );
};

export default Footer;
