
import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home-content">
          <h1 className="home-title">
            The Future of Growth <br />
            Is <span className="highlight">Automated</span>
          </h1>

          <div className="home-text-section">
            <p className="home-subtext">
              Your Full-Stack Growth Partner for Coaches, Consultants, Creators,
              and Digital Entrepreneurs Ready to Scale to 7 Figures.
            </p>

            <Link to="/carers">
              <button className="home-button">Apply Now →</button>
            </Link>
          </div>

          <div className="home-image">
            <img src={"/team-image.png"} alt="Team celebrating" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
