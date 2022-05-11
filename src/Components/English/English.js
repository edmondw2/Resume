import React from "react";

export default function English() {
  return (
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <div className="cover-bg p-3 p-lg-4 text-white">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="avatar hover-effect bg-white shadow-sm p-1 fade-in-zoom">
                  <img src="./image/Avatar.jpg" width="200" height="200" />
                </div>
              </div>
              <div className="col-lg-8 col-md-7 text-center text-md-start">
                <h2 className="h1 mt-2  fade-in-right3 hover-effect">
                  Mohamad Hossein Nazari
                </h2>
                <p className="fade-in-right2 hover-effect">
                  FrontEnd Developer
                </p>
                <div className="d-print-none">
                  <a
                    className="btn btn-light text-dark shadow-sm mt-1 me-1  fade-in-right"
                    href="Myresume.pdf"
                    target="_blank"
                  >
                    Download CV
                  </a>
                  <a
                    className="btn btn-success shadow-sm mt-1 fade-in-right2"
                    href="#contact"
                  >
                    Make Contact!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-section pt-4 px-3 px-lg-4 mt-1">
            <div className="row">
              <div className="col-md-6">
                <h2 className="h3 mb-3">About Me</h2>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                  }}
                >
                  <h5> Mohamad Hossein Nazari</h5>
                  <br /> Computer Engineering Student From Azad Univercity.
                  <br /> I started programming from high school , My interest in
                  programming in the web Development and gaming industry made me
                  successful in this field.I'm trying to improve my programming
                  skills and work with a company in the field of programming.
                </p>
              </div>
              <div className="col-md-5 offset-md-1">
                <div className="row mt-2">
                  <div className="col-sm-4">
                    <div className="pb-1">Age</div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pb-1 text-secondary">21</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pb-1">Email</div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pb-1 text-secondary">
                      MohamadHossein.Nazari@yahoo.com
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pb-1">Phone</div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pb-1 text-secondary">+98 935-485-9211</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pb-1">Residence</div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pb-1 text-secondary">Tehran - Iran</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none" />
          <div className="skills-section px-3 px-lg-4">
            <h2 className="h3 mb-3">Skills</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <span>HTML</span>
                  <div className="progress my-1">
                    <div
                      className="progress-bar bg-primary fade-in-progressbar"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      95%
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <span>CSS</span>
                  <div className="progress my-1">
                    <div
                      className="progress-bar bg-primary fade-in-progressbar2"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <span>JavaScript</span>
                  <div className="progress my-1">
                    <div
                      className="progress-bar bg-primary fade-in-progressbar3"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <span>React</span>
                  <div className="progress my-1">
                    <div
                      className="progress-bar bg-success fade-in-progressbar4"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <span>TypeScript</span>
                  <div className="progress my-1">
                    <div
                      className="progress-bar bg-success fade-in-progressbar5"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <span>Next Js</span>
                  <div className="progress my-1">
                    <div
                      className="progress-bar bg-success fade-in-progressbar6"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none" />
          <div className="work-experience-section px-3 px-lg-4">
            <h2 className="h3 mb-4">Work Experience</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">
                    Frontend Developer{" "}
                    <span className="text-muted h6">Mapsa Hr</span>
                  </div>
                  <div className="text-muted text-small mb-2">2020 - 2021</div>
                  <div className="Font-Persian">
                    I participated in the internship course of Mapsa Company and
                    during this course Skills such as completing JavaScript and
                    course coding Complete training and project-based React,
                    type script and Next to Teamwork and project-oriented work
                    was done
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">
                    FreeLance
                    <span className="text-muted h6"></span>
                  </div>
                  <div className="text-muted text-small mb-2">2018 - 2022</div>
                  <div className="Font-Persian">
                    Freelance work since high school when he entered the field
                    of programming I was doing it for the first time working in
                    the WordPress domain and in I'm totally interested in the
                    web basin UI | UX in the Game server and websites.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none" />
          <div className="page-break"></div>
          <div className="education-section px-3 px-lg-4 pb-4">
            <h2 className="h3 mb-4">Education</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Computer Engineering</div>
                  <div className="text-muted text-small mb-2">Since 2020</div>
                  <div>
                    Computer Engineering Student Of Azad Univercity on
                    electrinic unit
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Diploma</div>
                  <div className="text-muted text-small mb-2">2017 - 2020</div>
                  <div>
                    I got my computer diploma with a grade point average of
                    18.97 from high school
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Web programming course</div>
                  <div className="text-muted text-small mb-2">2020 - 2021</div>
                  <div>
                    Obtaining a certificate of success of a complete web
                    training course And <br />
                    React - TypeScript - NextJs
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none" />
          <div className="project-section px-3 px-lg-4 pb-4">
            <h2 className="h3 mb-4">Project</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">FetNelix</div>
                  <div className="text-muted text-small mb-2">Website</div>
                  <div>
                    Creating a full dynamic movie and series website in restfull
                    api Use Redax and single page aplication(SPA)
                  </div>
                  <a
                    className="project-button btn shadow-sm mt-1 me-1 "
                    href="https://fetnelix.vercel.app/"
                    target="_blank"
                  >
                    Go To Website!
                  </a>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">World War2</div>
                  <div className="text-muted text-small mb-2">Website</div>

                  <div>
                    customized a world war 2 historicall website with custom api
                    and (SPA)
                  </div>
                  <a
                    className="project-button btn shadow-sm mt-1 me-1 "
                    href="https://world-war2.vercel.app/"
                    target="_blank"
                  >
                    Go To Website!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none" />

          <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
            <h2 className="h3 text mb-3">Contact</h2>
            <div className="row">
              <div className="col-md-7 d-print-none">
                <div className="my-2">
                  <form action="https://formspree.io/f/mgedpayv" method="POST">
                    <div className="row">
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          name="_replyto"
                          placeholder="Your E-mail"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group my-2">
                      <textarea
                        className="form-control"
                        style={{ resize: "none" }}
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <button className="btn btn-primary mt-2" type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="col">
                <div className="mt-2">
                  <h3 className="h6">Residence</h3>
                  <div className="pb-2 text-secondary">Tehran - Iran</div>
                  <h3 className="h6">Phone</h3>
                  <div className="pb-2 text-secondary">+98 935-485-9211</div>
                  <h3 className="h6">Email</h3>
                  <div className="pb-2 text-secondary">
                    MohamadHossein.Nazari@yahoo.com
                  </div>
                </div>
              </div>
              <div className="col d-none d-print-block">
                <div className="mt-2">
                  <div>
                    <div className="mb-2">
                      <div className="text-dark">
                        <i className="fab fa-twitter mr-1"></i>
                        <span>https://twitter.com/</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-dark">
                        <i className="fab fa-facebook mr-1"></i>
                        <span>https://www.facebook.com/</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-dark">
                        <i className="fab fa-instagram mr-1"></i>
                        <span>https://www.instagram.com/edmond0_0nz</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-dark">
                        <i className="fab fa-github mr-1"></i>
                        <span>https://github.com/edmondw2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
