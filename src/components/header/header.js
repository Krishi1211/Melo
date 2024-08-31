"use client";
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";
import "./header.css";
// import '../../assets/icon54-v3/style.css'
import "../../assets/icons-mind/style.css";
import "../../assets/theme/css/style.css";
import "../../assets/font-awesome/css/font-awesome.css";
import "../../assets/dropdown/css/style.css";
import melo from "../../assets/images/path-114.png";
import { useEffect, useState } from "react";
// import { FaCity } from "react-icons/fa";
// import '../../assets/theme/css/style.css'

const Header = () => {
  const handleNavigation = () => {
    document.querySelector("#hamburger_icon").click();
  };
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarToggler.click();
        }
      });
    });
  }, []);

  return (
    <>

      {/* NAVBAR FOR LARGE SCREENS START HERE */}
      <div className="d-none d-lg-block">
        <nav className="py-2 navbar navbar-dropdown navbar-fixed-top navbar-expand-lg bg-white px-md-5 px-4 shadow-sm">
          <div className="container flex-nowrap px-xl-3">
            <Link href="/">
              <Image
                src={melo}
                width="auto"
                height="auto"
                className="logo object-fit-contain me-4"
                alt="Melo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ marginTop: ".5rem" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarText"
            >
              <ul
                className="navbar-nav flex-wrap nav-dropdown  mb-2 mb-lg-0"
                data-app-modern-menu="true"
              >
                <li className="nav-item ms-0 dropdown">
                  <span
                    className="nav-link text-secondary-emphasis fw-semibold dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    aria-haspopup="true"
                    style={{ cursor: "pointer" }}
                  >
                    Music Distribution
                  </span>
                  <div className="dropdown-menu border border-secondary-subtle rounded">
                    <Link
                      className="nav-link text-secondary-emphasis float-start fw-semibold on_Hover"
                      href="forever-release"
                    >
                      Forever Release
                    </Link>
                    <Link
                      className="nav-link text-secondary-emphasis float-start fw-semibold on_Hover"
                      href="release-covers"
                    >
                      Release Covers
                    </Link>
                    <Link
                      className="nav-link text-nowrap text-secondary-emphasis float-start fw-semibold on_Hover"
                      href="label-subscription"
                    >
                      Label Subscriptions
                    </Link>
                  </div>
                </li>

                <li className="nav-item ms-0 dropdown">
                  <span
                    className="nav-link text-secondary-emphasis fw-semibold dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    aria-haspopup="true"
                    style={{ cursor: "pointer" }}
                  >
                    Promote
                  </span>

                  <div className="dropdown-menu border border-secondary-subtle rounded">
                    <Link
                      className="nav-link text-secondary-emphasis fw-semibold float-start on_Hover"
                      href="youtube-promotions"
                    >
                      YouTube Ads
                    </Link>
                    <Link
                      className="nav-link text-secondary-emphasis fw-semibold float-start on_Hover"
                      href="spotify-promotions"
                    >
                      Spotify
                    </Link>
                  </div>
                </li>

                <li className="nav-item ms-0">
                  <Link
                    className="nav-link text-secondary-emphasis fw-semibold"
                    href="pricing"
                  >
                    Pricing
                  </Link>
                </li>

                <li className="nav-item ms-0 d-block d-lg-none">
                  <Link
                    className="nav-link text-secondary-emphasis fw-semibold"
                    href="./events"
                  >
                    Events
                  </Link>
                </li>

                <li className="nav-item ms-0">
                  <Link
                    className="nav-link text-secondary-emphasis fw-semibold"
                    href="./tilt-jams"
                  >
                    #TheMeloTilt
                  </Link>
                </li>

                <li className="nav-item ms-0">
                  <Link
                    className="nav-link text-secondary-emphasis fw-semibold"
                    href="contact"
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item ms-0 my-3 my-xl-0 my-lg-0">
                  <Link
                    className="btn greenBg mx-0 fs-6 my-0"
                    href="https://dashboard.melo.works/"
                    target="_blank"
                    style={{ width: "8rem" }}
                  >
                    Dashboard
                  </Link>
                </li>
                {/* 
                <li className="nav-item">
                  <Link
                    className="text-secondary-emphasis fw-semibold"
                    style={{ padding: "0.5rem", margin: "0.7rem" }}
                    href="city"
                  >
                    <FaCity className="fa-3x" />
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div className="" style={{ paddingTop: "3.5rem" }}></div>
      </div>
      {/* NAVBAR FOR LARGE SCREENS END HERE */}

      {/* NAVBAR FOR SMALL SCREENS START HERE */}
      <div className="d-block d-lg-none">
        <nav className="py-2 navbar navbar-dropdown navbar-fixed-top navbar-expand-lg bg-white px-md-5 px-1 shadow-sm">
          <div className="container-fluid px-xl-3">
            <Link href="/">
              <Image
                src={melo}
                width="auto"
                height="auto"
                className="logo object-fit-contain me-4"
                alt="Melo"
              />
            </Link>
            <button
              className="navbar-toggler"
              id="hamburger_icon"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ marginTop: ".5rem" }}
              onClick={() => setOpenItem(null)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end align-items-center modifiedNav"
              id="navbarText"
            >
              <div className="accordion" id="navbarAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header modifiedNav2" id="headingOne">
                    <button
                      className={`accordion-button ${openItem !== 'one' ? 'collapsed' : ''}`}
                      type="button"
                      onClick={() => setOpenItem(openItem === 'one' ? null : 'one')}
                      aria-expanded={openItem === 'one'}
                      aria-controls="collapseOne"

                    >
                      Music Distribution
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${openItem === 'one' ? 'show' : ''}`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#navbarAccordion"
                  >
                    <div className="accordion-body">
                      <Link className="nav-link text-secondary-emphasis fw-semibold" href="forever-release" onClick={() => setOpenItem(null)}
                      >
                        Forever Release
                      </Link>
                      <Link className="nav-link text-secondary-emphasis fw-semibold" href="release-covers" onClick={() => setOpenItem(null)}
                      >
                        Release Covers
                      </Link>
                      <Link className="nav-link text-secondary-emphasis fw-semibold" href="label-subscription" onClick={() => setOpenItem(null)}
                      >
                        Label Subscriptions
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header modifiedNav2" id="headingTwo">
                    <button
                      className={`accordion-button ${openItem !== 'two' ? 'collapsed' : ''}`}
                      type="button"
                      onClick={() => setOpenItem(openItem === 'two' ? null : 'two')}
                      aria-expanded={openItem === 'two'}
                      data-bs-target="#collapseTwo"
                      aria-controls="collapseTwo"
                    >
                      Promote
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${openItem === 'two' ? 'show' : ''}`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#navbarAccordion"
                  >
                    <div className="accordion-body">
                      <Link className="nav-link text-secondary-emphasis fw-semibold" href="youtube-promotions"
                        onClick={() => setOpenItem(null)}
                      >
                        YouTube Ads
                      </Link>
                      <Link className="nav-link text-secondary-emphasis fw-semibold" href="spotify-promotions"
                        onClick={() => setOpenItem(null)}
                      >
                        Spotify
                      </Link>
                    </div>
                  </div>
                </div>
                <ul className="navbar-nav flex-wrap nav-dropdown mb-2 mb-lg-0">
                  <li className="nav-item ms-0">
                    <Link className="nav-link text-secondary-emphasis fw-semibold" href="pricing">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item ms-0 d-block d-lg-none">
                    <Link className="nav-link text-secondary-emphasis fw-semibold" href="./events">
                      Events
                    </Link>
                  </li>
                  <li className="nav-item ms-0">
                    <Link className="nav-link text-secondary-emphasis fw-semibold" href="./tilt-jams">
                      #TheMeloTilt
                    </Link>
                  </li>
                  <li className="nav-item ms-0">
                    <Link className="nav-link text-secondary-emphasis fw-semibold" href="contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item ms-0 my-1 my-xl-0 my-lg-0">
                    <Link
                      className="btn greenBg mx-0 fs-6 my-0"
                      href="https://dashboard.melo.works/"
                      target="_blank"
                      style={{ width: "8rem" }}
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div style={{ paddingTop: "73px" }}></div>
      </div>

      {/* NAVBAR FOR LARGE SCREENS END HERE */}

    </>
  );
};

export default Header;
