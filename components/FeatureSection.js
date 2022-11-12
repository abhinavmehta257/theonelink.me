function FeatureSection() {
  return (
    <section id="features" className="feature-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11">
            <div className="section-title text-center mb-60">
              <h2>
                The one Link <br className="d-block" /> To do Everything
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <div className="icon">
                <img src="assets/images/icons/ic_create.svg" alt="" />
              </div>
              <div className="feature-content">
                <h4>Create</h4>
                <p>
                  Easily create & manage all your links in one place: personal
                  website, store, recent video or social post.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <div className="icon">
                <img src="assets/images/icons/ic_integrate.svg" alt="" />
              </div>
              <div className="feature-content">
                <h4>Integrate</h4>
                <p>
                  Integrate with ecommerce or lead generation solutions, add
                  donation form or analysis of your social profile.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-feature">
              <div className="icon">
                <img src="assets/images/icons/ic_share.svg" alt="" />
              </div>
              <div className="feature-content">
                <h4>Share</h4>
                <p>
                  Share your link anywhere: Instagram, YouTube, TikTok, in
                  messengers or via SMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
