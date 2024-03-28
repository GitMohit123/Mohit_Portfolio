import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-body-tertiary">
      <div className="flex justify-center items-center pt-4">
        <section className="mb-4">

          {/* Instagram */}
          <a
            className="btn btn-link btn-floating btn-lg text-body m-2 hover:cursor-pointer"
            href="https://www.instagram.com/mohit.jindal22/"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a
            className="btn btn-link btn-floating btn-lg text-body m-2 hover:cursor-pointer"
            href="https://www.linkedin.com/in/mohit-jindal-ab40a825b/"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* Github */}
          <a
            className="btn btn-link btn-floating btn-lg text-body m-2 hover:cursor-pointer"
            href="https://github.com/GitMohit123"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
      >
        © 2020 Copyright : Developed by MOHIT
      </div>
    </footer>
  );
};

export default Footer;
