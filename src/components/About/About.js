import React from "react";
import "./About.css";
import Resume from "../../Resume.pdf";

const About = () => {
  const currrentDate = new Date();
  const dateOfBirth = new Date(1997, 6, 16, 5);

  const ageValue = Math.floor((currrentDate - dateOfBirth) / 31536000000);
  return (
    <div>
      <section className="about section " id="about">
        <div className="container">
          <div className="row">
            <div className="section-title  pad-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content pad-15">
              <div className="row">
                <div className="about-text pad-15">
                  <h3>
                    I'm Nilesh Yadav and <span>Web Developer.</span>
                  </h3>
                  <p>
                    Electronics & Communication graduate with a passion for web
                    application development.
                  </p>
                  <p style={{ paddingTop: "5px" }}>
                    Aspiring to combine broad background with strong technical
                    skills to excel as a Front-End Developer.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info pad-15">
                  <div className="row">
                    <div className="info-item pad-15">
                      <p>
                        Birthday : <span>16 July 1997</span>
                      </p>
                    </div>
                    <div className="info-item pad-15">
                      <p>
                        Age : <span id="age">{ageValue}</span>
                      </p>
                    </div>
                    <div className="info-item pad-15">
                      <p>
                        Website : <span>www.nilesh-yadav-9986b.web.app/</span>
                      </p>
                    </div>
                    <div className="info-item pad-15">
                      <p>
                        Degree : <span>Bachelor of engineering</span>
                      </p>
                    </div>
                    <div className="info-item pad-15">
                      <p>
                        Contact : <span>+918000968035</span>
                      </p>
                    </div>
                    <div className="info-item pad-15">
                      <p>
                        City : <span>Silvassa</span>
                      </p>
                    </div>
                    <div className="info-item pad-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                    <div className="info-item pad-15">
                      <p>
                        Email : <span>nileshyadav.dev@gmail.com</span>
                      </p>
                    </div>
                    <div className="row pad-15">
                      <div className="buttons pad-15">
                        <a href={Resume} className="btn" download>
                          Download CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills pad-15"></div>
              </div>
              <div className="row Experience">
                {/* Work Experience */}
                <div className="education pad-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box pad-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>Feb-Sept 2021
                          </h6>
                          <h4 className="timeline-title">
                            Saathi Global Education Network
                          </h4>
                          <p className="timeline-text">
                            <strong>About :</strong> SGEN is a Bangalore based{" "}
                            <strong>Start-Up</strong> with a goal specifically
                            to ease the process of International Collaboration
                            for schools around the world,
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>

                          <p className="timeline-text">
                            <strong>Role :</strong> Front-End Developer.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>

                          <p className="timeline-text">
                            <strong>Technologies :</strong> Vue 2 (Options API)
                            , Vuetify , Web Sockets , HTML , CSS , Javascript ,
                            MD Bootstrap.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>

                          <p className="timeline-text">
                            <strong>Responsibilities:</strong> <br />
                            <ul>
                              <li>
                                <span>
                                  Created a fully fledged Dashboard for
                                  different Users based on permission.
                                </span>
                              </li>
                              <li>
                                <span>
                                  Created 5 step Registration process for users
                                  to sign up , (including image upload &
                                  Cropping) along with all input validations.
                                </span>
                              </li>
                              <li>
                                <span>
                                  Handling JWT Tokens for authorized sessions of
                                  Users.
                                </span>
                              </li>
                              <li>
                                <span>
                                  Created Linkedin like feed system for users to
                                  Create , Delete, Comment on feeds , along with
                                  Infinite scrolling feature.{" "}
                                </span>
                              </li>

                              <li>
                                <span>
                                  Created UI and features for 1-1 Chat System
                                  for Connected users.
                                </span>
                              </li>
                              <li>
                                <span>
                                  State Management using Vuex for handling and
                                  storing data.
                                </span>
                              </li>
                              <li>
                                <span>
                                  Making HTTP requests to the backend for CRUD
                                  operations.{" "}
                                </span>
                              </li>
                              <li>
                                <span>
                                  Plotting charts with realtime data using Apex
                                  Charts.{" "}
                                </span>
                              </li>
                              <li>
                                <span>
                                  Route Navigation Guards to restrict
                                  unauthorized access to platform.{" "}
                                </span>
                              </li>
                              <li>
                                <span>
                                  Continuous collaboration with Back-end &
                                  Design team members to implement new feature
                                  developments.
                                </span>
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="education pad-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box pad-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>2016-2020
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor of Engineering (ECE)
                          </h4>
                          <p className="timeline-text">
                            Graduated from{" "}
                            <strong>
                              Dr. S. & S. S. Ghandhy Government Engg. College
                            </strong>{" "}
                            , Surat
                          </p>
                          <p
                            className="timeline-text"
                            style={{ paddingTop: "10px" }}
                          >
                            Graduated with <strong>8.18 CGPA</strong> in the
                            field of{" "}
                            <strong>Electronics and Communication</strong>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>2014-2015
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            Graduated from{" "}
                            <strong>Lions English School (CBSE)</strong> ,
                            Silvassa , DNH
                          </p>
                          <p
                            className="timeline-text"
                            style={{ paddingTop: "10px" }}
                          >
                            Scored <strong>89%</strong>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i>2012-2013
                          </h6>
                          <h4 className="timeline-title">
                            Higher Secondary Certificate
                          </h4>
                          <p className="timeline-text">
                            Graduated from{" "}
                            <strong>Prabhat Scholar's Academy (GSEB)</strong> ,
                            Silvassa , DNH
                          </p>
                          <p
                            className="timeline-text"
                            style={{ paddingTop: "10px" }}
                          >
                            Scored <strong>83.3%</strong> with{" "}
                            <strong> 97 Percentile</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
