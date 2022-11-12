import Link from "next/link";

export default function NavBar() {
  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" href="/">
                  <img
                    width="80px"
                    src="assets/images/logo/Logo.png"
                    alt="Logo"
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <div className="ms-auto">
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link className="" href="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="" href="/linkToApp">
                          Link to app
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className=""
                          href="https://app.theonelink.me/register"
                        >
                          Register
                        </Link>
                      </li>
                      <li className="nav-item">
                        <div className="">
                          <Link
                            href="https://app.theonelink.me/login"
                            className="main-btn btn-hover"
                          >
                            Login
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
