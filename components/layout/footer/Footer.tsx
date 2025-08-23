import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer>
        <div className="section-footer-5 position-relative">
          <div className="container-fluid">
            <div className="container position-relative z-2">
              <div className="border-top border-primary border-4 pt-9">
                <div className="row pb-11">
                  <div className="col-lg-5 col-10">
                    <Link
                      href="/"
                      className="d-flex align-items-center gap-2 d-inline-flex"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <g>
                            <path
                              className="fill-primary"
                              d="M24.5043 9.79724L22.7082 18.3981L35.2929 17.1948L37.1117 7.00605L24.5043 9.79724Z"
                            />
                            <path
                              className="fill-primary"
                              d="M31.9171 17.6837L23.2697 20.6189L30.6333 30.3865L40.723 26.6545L31.9171 17.6837Z"
                            />
                            <path
                              className="fill-primary"
                              d="M28.4204 27.86L21.4605 22.2312L16.332 33.3249L24.7296 39.7347L28.4204 27.86Z"
                            />
                            <path
                              className="fill-primary"
                              d="M17.5913 29.998L19.1912 21.3633L6.63465 22.8288L5.04812 33.0511L17.5913 29.998Z"
                            />
                            <path
                              className="fill-primary"
                              d="M10.2917 22.1777L18.8717 19.0632L11.2859 9.45346L1.28177 13.3945L10.2917 22.1777Z"
                            />
                            <path
                              className="fill-primary"
                              d="M13.7243 12.2243L20.8121 17.7054L25.6875 6.50938L17.1442 0.277556L13.7243 12.2243Z"
                            />
                          </g>
                        </svg>
                      </div>
                      <h5 className="mb-0 ">Aadishri Softech</h5>
                    </Link>
                    <p className=" py-3">
                      Aadishri Softech: Empowering businesses <br />
                      with innovative solutions and delivering <br />
                      excellence every step of the way.
                    </p>
                    <Link href="#" className="d-flex gap-2">
                      <div>
                        <svg
                          className="fill-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.0604 4.86069C9.3408 1.58029 14.6594 1.58029 17.9398 4.86069C21.2202 8.1411 21.2202 13.4597 17.9398 16.7401L12.0001 22.6798L6.0604 16.7401C2.78 13.4597 2.78 8.1411 6.0604 4.86069ZM12.0001 13.2004C13.3256 13.2004 14.4001 12.1259 14.4001 10.8004C14.4001 9.47491 13.3256 8.40039 12.0001 8.40039C10.6746 8.40039 9.6001 9.47491 9.6001 10.8004C9.6001 12.1259 10.6746 13.2004 12.0001 13.2004Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p>
                        Plot No 2, Mansarover park 2,
                        <br />
                        lal kuah, Ghaziabad 201001
                      </p>
                    </Link>
                    <Link href="#" className="d-flex gap-2">
                      <div>
                        <svg
                          className="fill-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M2.4039 7.06105L11.9998 11.859L21.5959 7.06099C21.5235 5.80056 20.4785 4.80078 19.1999 4.80078H4.7999C3.52132 4.80078 2.47626 5.8006 2.4039 7.06105Z"
                            fill="white"
                          />
                          <path
                            d="M21.5999 9.74227L11.9998 14.5423L2.3999 9.74233V16.8008C2.3999 18.1263 3.47442 19.2008 4.7999 19.2008H19.1999C20.5254 19.2008 21.5999 18.1263 21.5999 16.8008V9.74227Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p>info@aadishritechnologies.com</p>
                    </Link>
                  </div>
                  <div className="col-lg-7 mt-lg-0 mt-8">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-6">
                        <h6 className="pb-3">Company</h6>
                        <div className="d-flex flex-column align-items-start">
                          <Link href="/career">
                            <p className="hover-effect-1 opacity-75">Career</p>
                          </Link>
                          <Link href="/about">
                            <p className="hover-effect-1 opacity-75">About</p>
                          </Link>
                          <Link href="/our-blog">
                            <p className="hover-effect-1 opacity-75">Blog</p>
                          </Link>
                          <Link href="/contact">
                            <p className="hover-effect-1 opacity-75">Contact</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-6">
                        <h6 className="pb-3">Help</h6>
                        <div className="d-flex flex-column align-items-start">
                          <Link href="#">
                            <p className="hover-effect-1 opacity-75">
                              Customer Support
                            </p>
                          </Link>

                          <Link href="/terms-&-condition">
                            <p className="hover-effect-1 opacity-75">
                              Term &amp; Condition
                            </p>
                          </Link>
                          <Link href="/privacy-policy">
                            <p className="hover-effect-1 opacity-75">
                              Privacy Policy
                            </p>
                          </Link>
                        </div>
                      </div>
                      {/*<div className="col-lg-4 col-md-4 col-6 mt-md-0 mt-5">
                                                <h6 className="pb-3">Resources</h6>
                                                <div className="d-flex flex-column align-items-start">
                                                    <Link href="#">
                                                        <p className="hover-effect-1 opacity-75">Design Kit</p>
                                                    </Link>
                                                    <Link href="#">
                                                        <p className="hover-effect-1 opacity-75">Development Tutorial</p>
                                                    </Link>
                                                    <Link href="#">
                                                        <p className="hover-effect-1 opacity-75">How to - Blog</p>
                                                    </Link>
                                                    <Link href="#">
                                                        <p className="hover-effect-1 opacity-75">Youtube Playlist</p>
                                                    </Link>
                                                </div>
                                            </div> */}
                    </div>
                  </div>
                </div>
                <div className="position-relative">
                  <div className="d-flex flex-column flex-md-row gap-3 align-items-center py-4">
                    {/* <div className="d-flex align-items-center justify-content-center flex-wrap gap-md-5 gap-3">
                                            <Link href="/about">
                                                <span className="btn-text ">About</span>
                                            </Link>
                                            <Link href="/services">
                                                <span className="btn-text ">Services</span>
                                            </Link>
                                            <Link href="/projects">
                                                <span className="btn-text ">Project</span>
                                            </Link>
                                            <Link href="get-a-quote">
                                                <span className="btn-text ">Get a Quote</span>
                                            </Link>
                                        </div> */}
                    <ul className="list-unstyled d-flex mb-0 justify-content-center ms-md-auto">
                      <li>
                        <Link
                          href="https://www.facebook.com/profile.php?id=61579944472167"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                            >
                              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="ms-3">
                        <Link
                          href="https://x.com/AadishriSoftech"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="ms-3">
                        <Link
                          href="https://www.instagram.com/aadishrisoftech/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              fill="currentColor"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zM370.5 136c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.6s-57.9-34.5-93.6-36.2C293.5 32 154.5 32 131.2 33.4c-35.7 1.7-67.3 9.9-93.6 36.2s-34.5 57.9-36.2 93.6C0 178.5 0 333.5 1.4 356.8c1.7 35.7 9.9 67.3 36.2 93.6s57.9 34.5 93.6 36.2c23.3 1.4 162.3 1.4 185.6 0 35.7-1.7 67.3-9.9 93.6-36.2s34.5-57.9 36.2-93.6c1.4-23.3 1.4-178.3 0-201.6zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.2 9s-102.7 2.6-132.2-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.2s-2.6-102.7 9-132.2c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.2-9s102.7-2.6 132.2 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.2s2.6 102.7-9 132.2z" />
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="ms-3">
                        <Link
                          href="https://www.linkedin.com/company/108403104/admin/dashboard/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              fill="currentColor"
                              width="20"
                              height="20"
                            >
                              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.64 0 53.73 0 24.08 24.09 0 53.79 0c29.84 0 53.79 24.08 53.79 53.73 0 29.91-23.95 54.37-53.79 54.37zM447.9 448h-92.6V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 76.8V448h-92.6V148.9h88.9v40.8h1.3c12.4-23.5 42.6-48.4 87.7-48.4 93.8 0 111.1 61.8 111.1 142.3V448z" />
                            </svg>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center py-0.5 d-flex align-items-center justify-content-center flex-wrap border-top">
                <p className=" opacity-50 mb-0">Copyright &amp; design by</p>
                <Link href="#">
                  <p className="fw-medium opacity-200 mb-0">
                    &nbsp; ©Aadishri Softech &nbsp;
                  </p>
                </Link>
                <p className=" opacity-50 mb-0">2025, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
