import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";

export default function Header({
  scroll,
  isMobileMenu,
  handleMobileMenu,
}: any) {
  return (
    <>
      <header>
        <div className="position-absolute top-0 start-0 w-100 header-11">
          {/* TOP-BAR 2 */}
          <div className="top-bar backdrop-filter-50 position-relative z-2">
            <div className="container d-flex justify-content-md-between justify-content-center align-items-center">
              <div className="d-flex align-items-center justify-content-center gap-4">
                <Link
                  href="#"
                  className="fs-6 fw-bold text-white border-white text-decoration-none email-link"
                >
                  info@aadishrisoftech.com
                </Link>
                <Link
                  href="telto:(123) 456 789 00"
                  className="fs-6 fw-bold text-white border-white text-decoration-none email-link"
                >
                  +919810262354
                </Link>
              </div>
              <div className="social-icons d-none d-md-flex">
                <Link
                  href="https://www.facebook.com/profile.php?id=61579944472167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-top-0 text-white border-white border-bottom-0 border-end-0 border-opacity-10 icon-shape icon-md"
                >
                  <i className="bi bi-facebook" />
                </Link>
                <Link
                  href="https://x.com/AadishriSoftech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-top-0 text-white border-white border-bottom-0 border-end-0 border-opacity-10 icon-shape icon-md"
                >
                  <i className="bi bi-twitter-x" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/108403104/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-top-0 text-white border-white border-bottom-0 border-opacity-10 icon-shape icon-md"
                >
                  <i className="bi bi-linkedin" />
                </Link>
                <Link
                  href="https://www.instagram.com/aadishrisoftech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-top-0 text-white border-white border-bottom-0 border-start-0 border-opacity-10 icon-shape icon-md"
                >
                  <i className="bi bi-instagram" />
                </Link>
              </div>
            </div>
          </div>
          <nav
            className={`navbar navbar-expand-lg navbar-transparent border-bottom border-top border-white border-opacity-10 p-0 shadow-none ${
              scroll ? "navbar-stick top-0 position-fixed" : ""
            }`}
          >
            <div className="container">
              <Link className="navbar-brand py-3 d-none d-lg-flex me-auto" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    className="fill-white"
                    d="M24.5043 9.79724L22.7082 18.3981L35.2929 17.1948L37.1117 7.00605L24.5043 9.79724Z"
                  />
                  <path
                    className="fill-white"
                    d="M31.9171 17.6837L23.2697 20.6189L30.6333 30.3865L40.723 26.6545L31.9171 17.6837Z"
                  />
                  <path
                    className="fill-white"
                    d="M28.4204 27.86L21.4605 22.2312L16.332 33.3249L24.7296 39.7347L28.4204 27.86Z"
                  />
                  <path
                    className="fill-white"
                    d="M17.5913 29.998L19.1912 21.3633L6.63465 22.8288L5.04812 33.0511L17.5913 29.998Z"
                  />
                  <path
                    className="fill-white"
                    d="M10.2917 22.1777L18.8717 19.0632L11.2859 9.45346L1.28177 13.3945L10.2917 22.1777Z"
                  />
                  <path
                    className="fill-white"
                    d="M13.7243 12.2243L20.8121 17.7054L25.6875 6.50938L17.1442 0.277556L13.7243 12.2243Z"
                  />
                </svg>
                <h5 className="mb-0 text-white">Aadishri Softech</h5>
              </Link>
              <div className="d-none d-lg-flex me-auto">
                <MainMenu />
              </div>
              <div className="d-flex align-items-center gap-4">
                <Link
                  href="/get-a-quote"
                  className="btn btn-white d-none d-md-flex hover-up"
                >
                  <span>GET A QUOTE</span>
                </Link>
                <div
                  className="burger-icon burger-icon-white border rounded-3 top-0 end-0"
                  onClick={handleMobileMenu}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
          </nav>
          <div className="">
            <MobileMenu
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
            />
          </div>
        </div>
      </header>
    </>
  );
}
