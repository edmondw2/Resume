import React from "react";

function Home() {
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
                    href="./cvdownload/MyResume.pdf"
                    target="_blank"
                    download
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
                  <h5> محمد حسین نظری</h5>
                  <br /> دانشجوی رشته ی مهندسی کامپیوتر , برنامه نویسی رو از
                  هنرستان کامپیوتر شروع کردم علاقه من به برنامه نویسی در حوضه ی
                  وب و صنعت گیمینگ باعث شد در این مسیر موفق باشم و بتونم در به
                  بهترین نحو ممکن با علاقه اموزش ببینم و کار کنم و درحال تلاش
                  برای افزایش مهارت های برنامه نویسی و اماده همکاری با یک شرکت
                  در حوضه برنامه نویسی هستم
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
                    <div className="pb-1 text-secondary">0935-485-9211</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pb-1">Address</div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pb-1 text-secondary">
                      تهران - سعادت آباد
                    </div>
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
                  <div className="text-muted text-small mb-2">1399 - 1400</div>
                  <div className="Font-Persian">
                    در دوره ی کارآموزی شرکت مپصا شرکت داشتم و در طول این دوره
                    مهارت هایی نظیر کامل کردن کد نویسی جاوا اسکریپت و دوره
                    اموزشی کامل و پروژه محور ری اکت , تایپ اسکریپت و نکست به
                    صورت کار تیمی و پروژه محور انجام شد
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">
                    FreeLance
                    <span className="text-muted h6"></span>
                  </div>
                  <div className="text-muted text-small mb-2">1397 - 1401</div>
                  <div className="Font-Persian">
                    کار ازاد رو از زمان هنرستان وقتی که وارد حوضه ی برنامه نویسی
                    شدم انجام میدادم اولین بار به حوضه ی وردپرس کار میکردم و در
                    کل به حوضه ی وب علاقه مند شدم کارهای فریلنسر من میشه به
                    انجام پروژه های <br /> UI/UX <br /> در حوضه ی گیم سرور های
                    ایرانی و وبسایت اشاره کرد
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
                  <div className="h5 mb-1">مهندسی کامپیوتر</div>
                  <div className="text-muted text-small mb-2">1399</div>
                  <div>
                    دانشجوی مهندسی کامپیوتر در دانشگاه ازاد اسلامی تهران واحد
                    الکترونیکی هستم
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">دیپلم کامپیوتر</div>
                  <div className="text-muted text-small mb-2">1396 - 1399</div>
                  <div>
                    دیپلم کامپیوتر خودم رو با معدل 18.97 از هنرستان دانش رایانه
                    دریافت کردم
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">دوره ی برنامه نویسی وب</div>
                  <div className="text-muted text-small mb-2">1399 - 1400</div>
                  <div>
                    کسب گواهی موفقیت دوره ی آموزشی کامل وب و <br />
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
                    ساخت وبسایت فیلم و سریال داینامیک به صورت رست فول ای پی آی
                    اسفاده از ریداکس و صفحات سینگل پیج
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

                  <div>وبسایت کاستوم رست فول ای پی ای و سینگل پیج</div>
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
                  <h3 className="h6">Address</h3>
                  <div className="pb-2 text-secondary">سعادت اباد</div>
                  <h3 className="h6">Phone</h3>
                  <div className="pb-2 text-secondary">0935-485-9211</div>
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
export default Home;
