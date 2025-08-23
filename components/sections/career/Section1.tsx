import Link from "next/link";

export default function Section1() {
  return (
    <>
      <div className="text-center pt-80">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex={0}
          >
            <div className="wow img-custom-anim-left">
              <h2 className="text-anime-style-1">
                Career Opportunities at Aadishri Softech
              </h2>
              <p>
                Thank you for your interest in joining Aadishri Softech <br />
                At present, we don’t have any active job openings.
              </p>
              <p>
                But we’re always excited to connect with talented and passionate
                individuals! 🚀
                <br /> <br /> 👉 You can share your updated resume with us  
                 at <b>info@aadishrisoftech.com</b>, and we’ll reach out to you{" "}
                <br /> when a suitable opportunity arises. <br /> <br />
                Stay tuned for future updates on this page.
              </p>
              <h3>Why Join Us?</h3>

              <p>
                {" "}
                A culture of innovation and collaboration 🤝 <br />
                Opportunities for continuous learning and growth 📚 <br />
                Work on impactful projects that make a difference 🌍 We look
                forward to welcoming you in the future!
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/*
      
      <section className="it-solutions-services-section-1 pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Web icon"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 4a12 12 0 0 0 0 16a12 12 0 0 0 0-16z" />
                      <path d="M4.5 7.5a16 16 0 0 0 15 0" />
                      <path d="M4.5 16.5a16 16 0 0 1 15 0" />
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">Web Development</h6>
                  </Link>
                  <p className="description">
                    At Aadishri Softtech Elevate Your Business with Cutting-Edge
                    Custom Web Development Services.
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">01</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      {/*  Laptop Base -->*
                      <rect
                        x="8"
                        y="16"
                        width="48"
                        height="28"
                        rx="2"
                        stroke="#2563eb"
                        strokeWidth="2"
                        fill="white"
                      />
                      <rect
                        x="14"
                        y="22"
                        width="36"
                        height="16"
                        rx="1"
                        fill="#e0f2fe"
                      />

                      {/*  Laptop bottom -->
                      <rect
                        x="6"
                        y="44"
                        width="52"
                        height="4"
                        rx="1"
                        fill="#2563eb"
                      />

                      {/*  Gear icon -->
                      <circle
                        cx="48"
                        cy="20"
                        r="6"
                        stroke="#2563eb"
                        strokeWidth="2"
                        fill="white"
                      />
                      <path
                        d="M48 16v2M48 22v2M44 20h2M50 20h2M45.5 17.5l1.4 1.4M45.5 22.5l1.4-1.4M50.5 17.5l-1.4 1.4M50.5 22.5l-1.4-1.4"
                        stroke="#2563eb"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">Software Development</h6>
                  </Link>
                  <p className="description">
                    Innovative Custom Software Development at Aadishri Softech:
                    Transforming Ideas into Solutions.
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">02</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="IT Outsourcing - Globe & Handshake"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M8 8a8 8 0 0 0 8 0" />
                      <path d="M12 4a10 10 0 0 0 0 8" />
                      <path d="M12 4a10 10 0 0 1 0 8" />
                      <line x1="8" y1="8" x2="16" y2="8" />

                      <path d="M3 16l3-2 3 2 3-2 3 2 3-2" />
                      <path d="M6 18l3-2 3 2 3-2" />
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">IT Outsourcing Solutions</h6>
                  </Link>
                  <p className="description">
                    Utilize our profound technological expertise in digital
                    transformation to formulate strategies.
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">03</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <rect
                        x="16"
                        y="4"
                        width="32"
                        height="56"
                        rx="4"
                        stroke="#2563eb"
                        stroke-width="2"
                        fill="white"
                      />

                      <rect
                        x="28"
                        y="6"
                        width="8"
                        height="2"
                        rx="1"
                        fill="#2563eb"
                      />

                      <rect
                        x="22"
                        y="16"
                        width="8"
                        height="8"
                        rx="2"
                        fill="#2563eb"
                      />
                      <rect
                        x="34"
                        y="16"
                        width="8"
                        height="8"
                        rx="2"
                        fill="#2563eb"
                      />

                      <rect
                        x="22"
                        y="28"
                        width="8"
                        height="8"
                        rx="2"
                        fill="#2563eb"
                      />
                      <rect
                        x="34"
                        y="28"
                        width="8"
                        height="8"
                        rx="2"
                        fill="#2563eb"
                      />

                      <rect
                        x="22"
                        y="40"
                        width="8"
                        height="8"
                        rx="2"
                        fill="#2563eb"
                      />
                      <rect
                        x="34"
                        y="40"
                        width="8"
                        height="8"
                        rx="2"
                        fill="#2563eb"
                      />

                      <circle cx="32" cy="54" r="2" fill="#2563eb" />
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">Mobile App Development</h6>
                  </Link>
                  <p className="description">
                    Fuel Business Growth with Our Innovative Mobile App
                    Development Services.
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">04</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="IoT Cloud with Nodes"
                    >
                      <path d="M7 14a4 4 0 0 1 0-8c.6-2.4 3-4 5.5-3.4A4.5 4.5 0 0 1 17 7a3.5 3.5 0 0 1 0 7H7z" />

                      <circle cx="5" cy="18" r="1.5" />
                      <circle cx="12" cy="18" r="1.5" />
                      <circle cx="19" cy="18" r="1.5" />

                      <line x1="6.3" y1="17.4" x2="10.7" y2="17.4" />
                      <line x1="13.3" y1="17.4" x2="17.7" y2="17.4" />
                    </svg>
                  </div>

                  <Link href="#">
                    <h6 className="fs-22 my-3"> IOT Based Solutions</h6>
                  </Link>
                  <p className="description">
                    Offering Smart IoT Solutions for Connecting Possibilities,
                    Empowering Futures, Innovating Smart Solutions.{" "}
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">05</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <rect
                        x="8"
                        y="24"
                        width="48"
                        height="16"
                        rx="6"
                        stroke="#4F46E5"
                        stroke-width="2"
                        fill="none"
                      />
                      <circle cx="20" cy="32" r="4" fill="#4F46E5" />
                      <circle cx="44" cy="32" r="4" fill="#4F46E5" />

                      <circle
                        cx="32"
                        cy="12"
                        r="6"
                        stroke="#22C55E"
                        stroke-width="2"
                        fill="none"
                      />
                      <path
                        d="M28 12a4 6 0 1 0 8 0a4 6 0 1 0 -8 0z"
                        stroke="#22C55E"
                        stroke-width="1.5"
                      />
                      <path d="M26 12h12" stroke="#22C55E" stroke-width="1.5" />

                      <path
                        d="M16 48c4 4 28 4 32 0"
                        stroke="#9333EA"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">AR/VR/Metaverse</h6>
                  </Link>
                  <p className="description">
                    Transforming touchscreens into immersive real-world
                    experiences, unveiling new dimensions with AR.
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">06</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <rect
                        x="12"
                        y="14"
                        width="16"
                        height="36"
                        rx="2"
                        stroke="#2563EB"
                        stroke-width="2"
                        fill="none"
                      />
                      <circle cx="20" cy="22" r="2" fill="#2563EB" />
                      <circle cx="20" cy="30" r="2" fill="#2563EB" />
                      <circle cx="20" cy="38" r="2" fill="#2563EB" />

                      <rect
                        x="36"
                        y="14"
                        width="16"
                        height="36"
                        rx="2"
                        stroke="#2563EB"
                        stroke-width="2"
                        fill="none"
                      />
                      <circle cx="44" cy="22" r="2" fill="#2563EB" />
                      <circle cx="44" cy="30" r="2" fill="#2563EB" />
                      <circle cx="44" cy="38" r="2" fill="#2563EB" />

                      <path
                        d="M24 50a6 6 0 0 1 6-6h1a7 7 0 0 1 13.5-1.5A5.5 5.5 0 0 1 46 54H26a6 6 0 0 1-2-4z"
                        stroke="#10B981"
                        stroke-width="2"
                        fill="none"
                      />

                      <line
                        x1="32"
                        y1="42"
                        x2="32"
                        y2="50"
                        stroke="#F59E0B"
                        stroke-width="2"
                        stroke-dasharray="3 2"
                      />
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">VPS & Data Center Provider</h6>
                  </Link>
                  <p className="description">
                    At Aadishri Softtech We provide reliable VPS and data center
                    solutions tailored to your business needs.
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">07</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <path
                        d="M14 26 L26 20 L26 44 L14 38 Z"
                        fill="none"
                        stroke="#2563EB"
                        stroke-width="2"
                      />
                      <rect
                        x="26"
                        y="26"
                        width="8"
                        height="12"
                        fill="none"
                        stroke="#2563EB"
                        stroke-width="2"
                      />

                      <path
                        d="M34 28 Q40 32 34 36"
                        stroke="#F59E0B"
                        stroke-width="2"
                        fill="none"
                      />
                      <path
                        d="M38 26 Q46 32 38 38"
                        stroke="#F59E0B"
                        stroke-width="2"
                        fill="none"
                      />

                      <circle
                        cx="50"
                        cy="32"
                        r="8"
                        stroke="#10B981"
                        stroke-width="2"
                        fill="none"
                      />
                      <path
                        d="M50 24 A8 8 0 0 0 50 40"
                        stroke="#10B981"
                        stroke-width="1.5"
                      />
                      <path
                        d="M42 32 H58"
                        stroke="#10B981"
                        stroke-width="1.5"
                      />

                      <rect x="12" y="48" width="6" height="8" fill="#F59E0B" />
                      <rect
                        x="22"
                        y="44"
                        width="6"
                        height="12"
                        fill="#10B981"
                      />
                      <rect
                        x="32"
                        y="40"
                        width="6"
                        height="16"
                        fill="#2563EB"
                      />
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">Digital Marketing Services</h6>
                  </Link>
                  <p className="description">
                    We Offer Exceptional Digital Marketing Solutions: Elevate
                    your brand with our tailored strategies.
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">08</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <rect
                        x="16"
                        y="16"
                        width="32"
                        height="32"
                        rx="4"
                        ry="4"
                        stroke="#2563EB"
                        stroke-width="2"
                        fill="none"
                      />

                      <line
                        x1="32"
                        y1="16"
                        x2="32"
                        y2="8"
                        stroke="#10B981"
                        stroke-width="2"
                      />
                      <line
                        x1="32"
                        y1="48"
                        x2="32"
                        y2="56"
                        stroke="#10B981"
                        stroke-width="2"
                      />
                      <line
                        x1="16"
                        y1="32"
                        x2="8"
                        y2="32"
                        stroke="#10B981"
                        stroke-width="2"
                      />
                      <line
                        x1="48"
                        y1="32"
                        x2="56"
                        y2="32"
                        stroke="#10B981"
                        stroke-width="2"
                      />

                      <text
                        x="50%"
                        y="50%"
                        text-anchor="middle"
                        dy=".3em"
                        font-size="12"
                        font-weight="bold"
                        fill="#F59E0B"
                      >
                        AI
                      </text>
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">AI/ML</h6>
                  </Link>
                  <p className="description">
                    At Aadishri Softech,Harness the potential of automation
                    combined with Artificial intelligence
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">09</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="32" cy="20" r="6" />
                      <path d="M26 34c0-3.3 2.7-6 6-6s6 2.7 6 6v6H26v-6z" />

                      <circle cx="12" cy="12" r="5" />
                      <path d="M7 20c0-2.8 2.2-5 5-5s5 2.2 5 5v4H7v-4z" />

                      <circle cx="52" cy="12" r="5" />
                      <path d="M47 20c0-2.8 2.2-5 5-5s5 2.2 5 5v4H47v-4z" />

                      <circle cx="12" cy="48" r="5" />
                      <path d="M7 56c0-2.8 2.2-5 5-5s5 2.2 5 5v4H7v-4z" />

                      <circle cx="52" cy="48" r="5" />
                      <path d="M47 56c0-2.8 2.2-5 5-5s5 2.2 5 5v4H47v-4z" />

                      <line x1="32" y1="26" x2="12" y2="17" />
                      <line x1="32" y1="26" x2="52" y2="17" />
                      <line x1="32" y1="26" x2="12" y2="48" />
                      <line x1="32" y1="26" x2="52" y2="48" />
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">
                      Direct Selling & Network Marketing
                    </h6>
                  </Link>
                  <p className="description">
                    We provide trusted Direct Selling & Network Marketing
                    opportunities, helping individuals build their own business,
                    grow their network, and achieve financial freedom.
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">10</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div
                className="card-services position-relative shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <Link href="#" className="position-absolute end-0 top-0 m-4">
                  <div className="icon-shape icon-40 rounded-circle bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5H15V13.125"
                        stroke="#0D6EFD"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="card-body px-4 py-5">
                  <div className="icon-shape icon-70 rounded-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="#F4F6F9"
                        stroke="#E0E0E0"
                        stroke-width="2"
                      />

                      <g transform="translate(15,25)">
                        <rect
                          x="0"
                          y="0"
                          width="24"
                          height="18"
                          rx="2"
                          fill="#4285F4"
                        />
                        <polyline
                          points="0,0 12,10 24,0"
                          fill="none"
                          stroke="white"
                          stroke-width="2"
                        />
                      </g>

                      <g transform="translate(40,25)">
                        <rect
                          x="0"
                          y="0"
                          width="24"
                          height="18"
                          rx="2"
                          fill="#34A853"
                        />
                        <circle cx="6" cy="9" r="2" fill="white" />
                        <circle cx="12" cy="9" r="2" fill="white" />
                        <circle cx="18" cy="9" r="2" fill="white" />
                        <path d="M6 18 L10 22 H18 L22 18" fill="#34A853" />
                      </g>

                      <g transform="translate(30,55)">
                        <circle cx="20" cy="20" r="18" fill="#25D366" />
                        <path
                          d="M12 34 L14 28 A12 12 0 0 1 28 14 L34 16 L32 22 A12 12 0 0 1 18 34 Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <Link href="#">
                    <h6 className="fs-22 my-3">Email/SMS/WhatsApp Marketing</h6>
                  </Link>
                  <p className="description">
                    We offer powerful Email, SMS & WhatsApp Marketing solutions
                    to connect you with your audience instantly and effectively
                    retain customers with cost-effective multi-channel
                    marketing.
                  </p>
                  <div className="step align-items-center justify-content-start gap-3">
                    <span className="line" />
                    <p className="text-primary fw-medium mb-0">10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
