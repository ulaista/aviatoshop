import React from "react";
import awardsLogo from "../images/about/awards-logo.png";
import aboutImg from "../images/about/about.jpg";
import PageHeader from "../components/aboutUsComponents/PageHeader";
import AboutVideo from "../components/aboutUsComponents/AboutVideo";
import TeamMembers from "../components/aboutUsComponents/TeamMembers";

function About() {
  return (
    <div>

      <PageHeader />
      
      <section className="about section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-responsive"
                src={aboutImg} alt="aboutImg"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mt-40">About Our Shop</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                enim, accusantium repellat ex autem numquam iure officiis facere
                vitae itaque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                qui vel cupiditate exercitationem, ea fuga est velit nulla culpa
                modi quis iste tempora non, suscipit repellendus labore
                voluptatem dicta amet?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                qui vel cupiditate exercitationem, ea fuga est velit nulla culpa
                modi quis iste tempora non, suscipit repellendus labore
                voluptatem dicta amet?
              </p>
              <a href="contact.html" className="btn btn-main mt-20">
                Download Company Profile
              </a>
            </div>
          </div>
          <div className="row mt-40">
            <div className="col-md-3 text-center">
              <img src={awardsLogo} alt="awardsLogo" />
            </div>
            <div className="col-md-3 text-center">
              <img src={awardsLogo} alt="awardsLogo" />
            </div>
            <div className="col-md-3 text-center">
              <img src={awardsLogo} alt="awardsLogo" />
            </div>
            <div className="col-md-3 text-center">
              <img src={awardsLogo} alt="awardsLogo" />
            </div>
          </div>
        </div>
      </section>

      <AboutVideo />

      <TeamMembers />

    </div>
  );
}

export default About;
