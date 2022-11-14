import React from "react";
import Link from "next/link";

function Feature3Section() {
  return (
    <section id="feature-3" className="feature-section-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-last order-lg-first mt-5">
            <img src="assets/images/openInAppr.gif" alt="" />
          </div>
          <div className="col-lg-6 col-xxl-5 col-md-10 offset-xxl-1">
            <div className="feature-content-wrapper">
              <div className="section-title">
                <h2 className="mb-20">Link To App</h2>
                <p className="mb-30">
                  This tool allows you to easily create a “drop in” link that
                  opens directly into the app it's associated with. You can use
                  this to generate more and better leads, increase user
                  engagement and help with your ad revenue.
                </p>
                <div className="create-link">
                  <Link id="generate-link" className="m-0" href="/linkToApp">
                    Generate Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature3Section;
