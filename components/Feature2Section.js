import { useEffect } from "react";

function animate() {
  window.setTimeout(() => {
    document.querySelectorAll(".phone > img").forEach((ele) => {
      ele.classList.add("fadeIn");
    });
  }, 100);
}

function Feature2Section() {
  useEffect(() => {
    animate();
  }, []);
  return (
    <section id="feature-2" className="feature-section-2">
      <div className="shape-image">
        <img src="assets/images/feature/shape.svg" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="feature-content-wrapper">
              <div className="section-title">
                <h2 className="mb-30">
                  Easier than you think
                  <br className="d-none d-sm-block" /> Create your Links in a
                  couple of minutes.{" "}
                </h2>

                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="single-feature">
                      <div className="feature-icon color-1">
                        <i className="lni lni-user"></i>
                      </div>
                      <div className="feature-content">
                        <h4>PERSONAL URL</h4>
                        <p>
                          Create your personal Url and place it in your
                          Instagram Bio.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="single-feature feature-2">
                      <div className="feature-icon color-2">
                        <i className="lni lni-layers"></i>
                      </div>
                      <div className="feature-content">
                        <h4>ELEGANT AND PERFECT</h4>
                        <p>
                          With a cutting-edge interface, followers clicking on
                          your Url will experience a great visual.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="single-feature feature-3">
                      <div className="feature-icon color-3">
                        <i className="lni lni-display"></i>
                      </div>
                      <div className="feature-content">
                        <h4>WEB-BASED</h4>
                        <p>
                          No need to install anything, just access anytime via
                          browser from any device.
                        </p>
                      </div>
                    </div>
                  </div>
                  <form
                    action="https://app.theonelink.me/register"
                    method="get"
                    className="create-link"
                  >
                    <input
                      type="text"
                      placeholder="Enter User Name"
                      name="user_name"
                    />
                    <button id="generate-link">Claim Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 phone-container">
            <div className="phone-wrapper">
              <div className="phone">
                <img
                  className="user"
                  src="assets/images/main/user.png"
                  alt=""
                />
                <img
                  className="socials"
                  src="assets/images/main/socials.png"
                  alt=""
                />
                <img
                  className="link link1"
                  src="assets/images/main/Link1.png"
                  alt=""
                />
                <img
                  className="link link2"
                  src="assets/images/main/Link2.png"
                  alt=""
                />
                <img
                  className="sponcers"
                  src="assets/images/main/sponcers.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature2Section;
