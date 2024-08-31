import { AiOutlineGlobal } from "react-icons/ai";
import { TbCloudLock } from "react-icons/tb";
import { PiTranslate } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import "../../assets/icon54/style.css";
import "../../assets/icon54-v2/style.css";
import "../../assets/icon54-v3/style.css";
import Link from "next/link";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700']
});
export const metadata = {
  title: "Melo | Forever Release - Distribute Your Original Music",
  description: "Through Melo's forever release, independent artists can choose between singles, EPs & albums and start distributing their original music.",
  openGraph: {
    images: ['https://melo.works/assets/images/favicon.png']
  },
}

export default function ForeverRelease() {
  const release = [
    {
      releaseType: "Single",
      price: 996,
      perRelease: "per release",
      noOfTrack: "1 Track",
      releaseButton: "Release Single",
      form: "https://docs.google.com/forms/d/1DKv-DCy85w-fSFDoVdUhH6VYTtVj_eZeD5m4slok8Tw/edit?usp=drive_web",
    },
    {
      releaseType: "EP",
      price: 1599,
      perRelease: "per release",
      noOfTrack: "Upto 6 Tracks",
      releaseButton: "Release EP",
      form: "https://docs.google.com/forms/d/1zGKolGYBMgnCqKSbrhkChOp_1yELOd2hgaO7wYnpr8Y/edit",
    },
    {
      releaseType: "Album",
      price: 2499,
      perRelease: "per release",
      noOfTrack: "Upto 15 Tracks",
      releaseButton: "Release Album",
      form: "https://docs.google.com/forms/d/1zGKolGYBMgnCqKSbrhkChOp_1yELOd2hgaO7wYnpr8Y/edit",
    },
  ];

  return (
    <>
      <section
        className="py-md-5 py-3 blackBg"
        style={{ textAlign: "left !important" }}
      >
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 py-4">
              <div className="align-left">
                <h4
                  className={`mb-4 text-white display-4 ${montserrat.className}`}
                  style={{ textAlign: "left" }}
                >
                  What is a Forever Release?
                </h4>
                <p className="mb-4 display-7 text-white">
                  Entertainment is a very serious business, and we mean it. So
                  get your music playing to 100+ streaming services and stores
                  worldwide, and start making money as soon as possible.
                </p>
                <Link className="ms-0 btn greenBg fw-bold" href="#forever-rel">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex align-items-center pb-4">
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#b9de22",
                    marginRight: "1rem",
                    borderRadius: "50%",
                  }}
                >
                  <span
                    className=" icon54-v1-cash-pay text-dark"
                    style={{
                      fontSize: "2rem",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                    }}
                  ></span>
                </div>
                <div className="text-box" style={{ color: "white" }}>
                  <h4
                    className="icon-title display-7 "
                    style={{ color: "white" }}
                  >
                    <strong>No Annual Fees / No Takedown Fees</strong>
                  </h4>
                  <p className="text-white">
                    Pay once and we ensure its in stores forever. We wont charge
                    you extra to keep your music online or to send you royalty.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pb-4">
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#b9de22",
                    marginRight: "1rem",
                    borderRadius: "50%",
                  }}
                >
                  <span
                    className="icon54-v2-global"
                    style={{
                      fontSize: "2rem",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                    }}
                  ></span>
                </div>
                <div className="text-box">
                  <h4 className="icon-title  display-7">
                    <strong style={{ color: "white" }}>
                      Popular International & Indian Platforms
                    </strong>
                  </h4>
                  <p className="text-white">
                    Spotify, Apple Music, YouTube, JioSaavn, Wynk Music, Gaana,
                    Amazon Music, Deezer & more.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pb-4">
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#b9de22",
                    marginRight: "1rem",
                    borderRadius: "50%",
                  }}
                >
                  <span
                    className="imind-cloud-secure"
                    style={{
                      fontSize: "2rem",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                    }}
                  ></span>
                </div>
                <div className="text-box">
                  <h4 className="icon-title display-7">
                    <strong style={{ color: "white" }}>
                      ISRC &amp; UPC Codes Included
                    </strong>
                  </h4>
                  <p className="icon-text " style={{ color: "white" }}>
                    Free ISRC & UPC codes to identify your sound recordings and
                    music videos for online & retail platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="features23"
        id="features24-12"
        style={{ paddingTop: "50px" }}
      >
        <div className="container">
          <div className="row justify-content-center justify-content-center pb-lg-5">
            <div className="col-12">
              <div className="card-wrapper mb-4 bg-white">
                <div className="text-white align-center">
                  <h4 className={`mb-md-4 mb-2 display-4 text-black ${montserrat.className}`}>
                    Steps
                  </h4>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-3 p-lg-0">
              <div className="item first py-3 px-4 py-lg-4 pe-lg-4 ps-lg-3">
                <div
                  className="icon-wrap w-100"
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="icon-box  rounded-circle d-inline-block text-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: " #b9de22",
                    }}
                  >
                    <span
                      className="step-number  display-5"
                      style={{
                        fontSize: "2rem",
                        color: "#010100",
                        lineHeight: "60px",
                      }}
                    >
                      1
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                  <h4 className="icon-title display-7 fs-5 custom_Height">
                    <strong>Meta Data &amp; Upload Assets</strong>
                  </h4>
                  <p className="fs-6 pt-lg-2 pt-xxl-0">
                    Fill in your track information &amp; artist details to
                    credit the correct people for their work, and upload high
                    quality assets for OTTs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
              <div className="custom_item py-3 px-4 py-lg-4 pe-lg-4 ps-lg-0">
                <div
                  className="icon-wrap w-100"
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="icon-box rounded-circle d-inline-block text-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: " #b9de22",
                    }}
                  >
                    <span
                      className="step-number  display-5"
                      style={{
                        fontSize: "2rem",
                        color: "#010100",
                        lineHeight: "60px",
                      }}
                    >
                      2
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                  <h4 className="icon-title display-7 fs-5 custom_Height">
                    <strong>Pay for your Release</strong>
                  </h4>
                  <p className="fs-6 pt-lg-2 pt-xxl-0">
                    Once you&apos;ve registered on our website, purchase a
                    single / EP / album credit according to the number of
                    tracks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
              <div className="custom_item py-3 px-4 py-lg-4 pe-lg-4 ps-lg-0">
                <div
                  className="icon-wrap w-100"
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="icon-box rounded-circle d-inline-block text-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#b9de22",
                    }}
                  >
                    <span
                      className="step-number display-5"
                      style={{
                        fontSize: "2rem",
                        color: "#010100",
                        lineHeight: "60px",
                      }}
                    >
                      3
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                  <h4 className="icon-title display-7 fs-5 custom_Height">
                    <strong>Preview & Submit</strong>
                  </h4>
                  <p className="fs-6 pt-lg-2 pt-xxl-0">
                    Once you&apos;ve filled in everything, make sure to double
                    check the information to avoid any problems later down the
                    line.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
              <div className="custom_item py-3 px-4 py-lg-4 pe-lg-4 ps-lg-0">
                <div
                  className="icon-wrap w-100"
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="icon-box rounded-circle d-inline-block text-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: " #b9de22",
                    }}
                  >
                    <span
                      className="step-number  display-5"
                      style={{
                        fontSize: "2rem",
                        color: "#010100",
                        lineHeight: "60px",
                      }}
                    >
                      4
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                  <h4 className="icon-title display-7 fs-5 custom_Height">
                    <strong>Get Paid</strong>
                  </h4>
                  <p className="fs-6 pt-lg-2 pt-xxl-0">
                    Once your release is live, youll start earning for every
                    stream &amp; download. You can request for your quarterly
                    royalty reports to get paid.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        className="features13 py-5"
        id="features14-11"
        style={{ backgroundColor: "#131313" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h3 className={`text-white pb-lg-4 align-center mb-4  display-4 ${montserrat.className}`}>
                What you get
              </h3>
            </div>
            <div className="blackBg col-12 col-md-4 col-lg-2 p-3">
              <div className="text-white align-center">
                <span
                  className="icon54-v1-cash-pay"
                  style={{
                    display: "block",
                    fontSize: "5rem",
                    color: "#b9de22",
                    marginBottom: "2rem",
                  }}
                ></span>

                <h6 className="fw-bold align-center display-7 line text-white">
                  85% Royalty
                </h6>
              </div>
            </div>
            <div className="blackBg p-3 col-12 col-md-4 col-lg-2">
              <div className="text-white align-center">
                <span
                  className="imind-cloud-secure"
                  style={{
                    display: "block",
                    fontSize: "5rem",
                    color: "#b9de22",
                    marginBottom: "2rem",
                  }}
                ></span>
                <h6 className="fw-bold align-center display-7 line text-white">
                  ISRC &amp; UPC Codes
                </h6>
              </div>
            </div>
            <div className="blackBg p-3 col-12 col-md-4 col-lg-2">
              <div className="text-white align-center">
                <span
                  className="icon54-v2-global"
                  style={{
                    display: "block",
                    fontSize: "5rem",
                    color: "#b9de22",
                    marginBottom: "2rem",
                  }}
                ></span>
                <h6 className="fw-bold align-center display-7 line text-white">
                  Global Reach
                </h6>
              </div>
            </div>
            <div className="blackBg p-3 col-12 col-md-4 col-lg-2">
              <div className="text-white align-center">
                <span
                  className="imind-support"
                  style={{
                    display: "block",
                    fontSize: "5rem",
                    color: "#b9de22",
                    marginBottom: "2rem",
                  }}
                ></span>
                <h6 className="fw-bold align-center display-7 line text-white">
                  Local Support
                </h6>
              </div>
            </div>
            <div className="blackBg p-3 col-12 col-md-4 col-lg-2">
              <div className="text-white align-center">
                <span
                  className="fa-star-o fa"
                  style={{
                    display: "block",
                    fontSize: "5rem",
                    color: "#b9de22",
                    marginBottom: "2rem",
                  }}
                ></span>
                <h6 className="fw-bold align-center display-7 line text-white">
                  Playlist Submissions
                </h6>
              </div>
            </div>
            <div className="blackBg p-3 col-12 col-md-4 col-lg-2">
              <div className="text-white align-center">
                <span
                  className="icon54-v1-calendar-clock"
                  style={{
                    display: "block",
                    fontSize: "5rem",
                    color: "#b9de22",
                    marginBottom: "2rem",
                  }}
                ></span>
                <h6 className="fw-bold align-center display-7 line text-white">
                  Scheduled Releases
                </h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-12">
              <hr
                style={{
                  size: "2",
                  width: "100%",
                  color: "white",
                  height: "1px",
                }}
              />
            </div>
            <div className="blackBg col-md-4 col-lg-3">
              <div className="text-white align-center">
                <h6
                  style={{ fontSize: ".9rem" }}
                  className="py-2 text-white fw-bold align-center"
                >
                  FREE! One Page Share Link <br /> Callertunes for Indian
                  Telecom
                </h6>
              </div>
            </div>
            <div className="blackBg col-md-4 col-lg-3">
              <div className="text-white align-center">
                <h6
                  style={{ fontSize: ".9rem" }}
                  className="py-2 text-white fw-bold align-center"
                >
                  Unlimited Artists <br /> All Rights Reserved with Artist
                </h6>
              </div>
            </div>
            <div className="blackBg col-md-4 col-lg-3">
              <div className="text-white align-center">
                <h6
                  style={{ fontSize: ".9rem" }}
                  className="py-2 text-white fw-bold align-center"
                >
                  International & Indian Platforms <br /> Request for
                  Pre-save/Pre-Orders
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5" id="forever-rel">
        <div className="container">
          <div className="px-lg-3 d-flex flex-lg-nowrap flex-wrap justify-content-center">
            {release?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-3 card bg-white col-12 col-md-6 align-center col-lg-4 bg-light border border-secondary-subtle rounded m-2"
                >
                  <div className="">
                    <h6
                      className="display-7 fw-bold mb-3"
                      style={{ textAlign: "right" }}
                    >
                      {item.releaseType}
                    </h6>
                    <div className="">
                      <p
                        className="price fw-bold m-0 "
                        style={{
                          fontSize: "3rem",
                          lineHeight: "1.5",
                        }}
                      >
                        ₹{item.price}
                      </p>
                      <p
                        className="fw-bold mb-3 display-7"
                        style={{ textAlign: "right" }}
                      >
                        {item.perRelease}
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="mb-4">
                      <ul className="display-7 list-unstyled">
                        <li className="text-start ps-4">
                          <span>{item.noOfTrack}</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href={item.form}
                      className="text-decoration-none d-block p-3 rounded-2 text-white fw-bold blackBg w-100"
                      target="_blank"
                      style={{ width: " 100%" }}
                    >
                      Release Single
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
