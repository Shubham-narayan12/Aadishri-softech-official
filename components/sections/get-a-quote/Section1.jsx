import Link from "next/link";

export default function Section1() {
  return (
    <>
      <div className="row align-items-center mt-80">
        <div className="col-lg-6 mb-lg-0 mb-5">
          <img
            className="rounded-4 wow img-custom-anim-left w-100"
            src="assets/imgs/pages/it-solutions/page-contact/img-1.png"
            alt="AstraX"
          />
        </div>
        <div className="col-lg-6 ms-lg-auto align-self-stretch">
          <form
            action="#"
            className="form-group d-flex flex-column gap-3 p-md-5 p-4 bg-light-2 rounded-4 h-100 justify-content-center"
          >
            <h6 className="text-anime-style-2">Get In Touch Now</h6>
            <div className="row g-3 wow img-custom-anim-top">
              <div className="col-md-6">
                <input
                  type="text"
                  id="username"
                  className="form-control border-0 p-3 rounded-3 mb-3"
                  placeholder="First Name*"
                  aria-label="username"
                />
                <input
                  type="text"
                  id="phone"
                  className="form-control border-0 p-3 rounded-3"
                  placeholder="Phone Number*"
                  aria-label="phone"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  id="email"
                  className="form-control border-0 p-3 rounded-3 mb-3"
                  placeholder="Last Name*"
                  aria-label="email"
                />
                <input
                  type="text"
                  id="company"
                  className="form-control border-0 p-3 rounded-3"
                  placeholder="Email Address*"
                  aria-label="company"
                />
              </div>
            </div>
            {/* <div className="col-12 wow img-custom-anim-top">
              <select
                name="service"
                className="form-select border-0 p-3 rounded-3"
                id="service"
                aria-placeholder="Select Services"
              >
                <option selected>Service Typee*</option>
                <option value="service-2">Service 1</option>
                <option value="service-2">Service 2</option>
              </select>
            </div> */}
            <div className="col-12 wow img-custom-anim-top">
              <textarea
                className="form-control border-0 p-3 rounded-3"
                id="message"
                placeholder="Your Message"
                aria-label="message"
                defaultValue={""}
              />
            </div>
            <div className="d-inline-block">
              <button
                type="submit"
                className="btn btn-primary w-100 mt-2"
                data-aos="zoom-in"
              >
                <span>Get Started Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1799_6261)">
                    <path
                      d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container wow img-custom-anim-top">
        <div className="row pt-100">
          <div className="col-12">
            <div className="contact-map border rounded-4 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d28014.779473975643!2d77.477736!3d28.6343343!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No%202%20Mansarovar%20park%202%20lal%20kuan%20Ghaziabad%20201001!5e0!3m2!1sen!2sin!4v1755757092992!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="position-absolute bottom-50 start-50 bg-dark text-center p-4 rounded-4 z-2 d-none d-md-block">
                <p className="fs-16 text-white mb-2">
                  Plot No 2, Mansarover park 2, lal kuah, Ghaziabad 201001,India
                </p>
                <Link href="#" className="text-white fw-semibold">
                  info@aadishrisoftech.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
