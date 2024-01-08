import React from "react";
import teamImage1 from "../../images/team/team-1.jpg";

function TeamMembers() {
  return (
    <div>
      <section className="team-members ">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>Team Members</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="team-member text-center">
                <img className="img-circle" src={teamImage1} alt="Team" />
                <h4>Jonathon Andrew</h4>
                <p>Founder</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-member text-center">
                <img className="img-circle" src={teamImage1} alt="Team" />
                <h4>Adipisci Velit</h4>
                <p>Developer</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-member text-center">
                <img className="img-circle" src={teamImage1} alt="Team" />
                <h4>John Fexit</h4>
                <p>Shop Manager</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-member text-center">
                <img className="img-circle" src={teamImage1} alt="Team" />
                <h4>John Fexit</h4>
                <p>Shop Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamMembers;
