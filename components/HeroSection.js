function HeroSection() {
  return (
    <div className="header-main">
      <div className="inner-header-main row">
        <div className="col-lg-7 col-md-7">
          <h1>
            Everything to share in one simple <span>Link</span>
          </h1>
          <p>
            share everything you create, curate and sell online. All from the
            one link in bio.{" "}
          </p>
          <form
            action="https://app.theonelink.me/register"
            method="get"
            className="create-link"
          >
            <input type="text" placeholder="Enter User Name" name="user_name" />
            <button id="generate-link">Claim Now</button>
          </form>
        </div>

        <div className="col-lg-5 col-md-5 mt-5">
          <div className="feature-image text-lg-end">
            <img src="assets/images/62.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;
