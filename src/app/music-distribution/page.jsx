import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import locationPin from "@/assets2/location-svgrepo-com.svg";
import styles from './musicDistribution.module.css';
import '../../assets/icon54/style.css'
import '../../assets/icon54-v2/style.css'
import '../../assets/icon54-v3/style.css'
import Link from "next/link";

export const metadata = {
  title: "Melo - Sell Your Music Online - Digital Music Distribution",
  description: "Get your music playing to 100+ streaming services and stores worldwide—unlimited music distribution for independent artists and labels.",
  openGraph: {
    images: ['https://melo.works/assets/images/favicon.png']
  },
}

export default function MusicDistribution() {
  return (
    <>
      <section
        className=" backset py-5"
        style={{ backgroundColor: "#131313", color: "white" }}
      >
        <div className="container py-5">
          <div className="d-flex flex-wrap justify-content-center">
            <div className="col-12 col-lg-6">
              <div className="card-wrapper p-4 mb-4 mb-lg-0">
                <div className="card-box align-left">
                  <h1 className={`display-4 mb-4`}>
                    Music Distribution
                  </h1>
                  <p className=" mb-4 display-7">
                    Entertainment is a very serious business, and we mean it. So
                    get your music playing to 100+ streaming services and stores
                    worldwide, and start making money as soon as possible.
                  </p>
                  <div className="">
                    <Link
                      className="btn ms-0 text-black fw-bold greenBg"
                      href="pricing"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* <div className="item "> */}
              <div className="d-flex align-items-center my-4">
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
                <div className="text-box">
                  <h4 className="icon-title display-7">
                    <strong>No Annual Fees / No Takedown Fees</strong>
                  </h4>
                  <p className="icon-text ">
                    Pay once and we ensure its in stores forever. We wont charge
                    you extra to keep your music online or to send you royalty.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center my-4">
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
                    className="icon54-v2-global text-dark"
                    style={{
                      fontSize: "2rem",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                    }}
                  >
                  </span>
                </div>
                <div className="text-box">
                  <h4 className="icon-title display-7">
                    <strong>
                      Popular International &amp; Indian Platforms
                    </strong>
                  </h4>
                  <p className="icon-text ">
                    Spotify, Apple Music, YouTube, JioSaavn, Wynk Music, Gaana,
                    Amazon Music, Deezer &amp; more.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center my-4">
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
                    className="imind-cloud-secure text-dark"
                    style={{
                      fontSize: "2rem",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                    }}
                  >
                  </span>
                </div>
                <div className="text-box">
                  <h4 className="icon-title display-7">
                    <strong>ISRC &amp; UPC Codes Included</strong>
                  </h4>
                  <p className="icon-text ">
                    Free ISRC &amp; UPC codes to identify your sound recordings
                    and music videos for online &amp; retail platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={`pricing2 ${styles.pricing} py-5`} id="pricing2-1x"> */}
      <section className="bg-light py-5">
        <div className="">
          <div className="d-flex flex-wrap justify-content-center">
            <div className="bg-white card m-2 col-12 col-md-6 align-center col-lg-3 p-3">
              <div className="mb-4">
                <div className="pt-2 px-1">
                  <h6 className="display-7 fw-bold" style={{ textAlign: 'right' }}>
                    Forever Release
                  </h6>
                  <div className="">
                    <p className="price m-0 priceHeading">
                      ₹996
                    </p>
                    <p className="price-term mb-3 fw-bold display-7" style={{ textAlign: 'right' }}>
                      Onwards
                      <br />
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className=" mb-4">
                    <ul className="list-group list-group-flush display-7">
                      <li className="list-group-item px-1 py-2 bg-transparent">Original Music</li>
                      <li className="list-group-item px-1 py-2 bg-transparent">Unlimited Artists</li>
                      <li className="list-group-item px-1 py-2 bg-transparent">Independent / Label</li>
                      <li className="list-group-item px-1 py-2 bg-transparent">85% Artist Royalty</li>
                      <li className="list-group-item px-1 py-2 bg-transparent">International & Indian Stores</li>
                    </ul>
                  </div>
                </div>
                <Link href='forever-release' className="btn bg-black fw-bold text-white m-0 d-block text-decoration-none" target="_blank">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="bg-white card m-2 col-12 col-md-6 align-center col-lg-3 p-3">
              <div className="d-flex flex-column justify-content-between">
                <div className="">
                  <div className="pt-2 px-1">
                    <h6 className="display-7 fw-bold" style={{ textAlign: 'right' }}>
                      Release Covers
                    </h6>
                    <div className="">
                      <p className="price m-0 price m-0 priceHeading">
                        ₹1,999
                      </p>
                      <p className="price-term display-7 fw-bold" style={{ textAlign: 'right' }}>
                        Per Release
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className=" mb-4">
                      <ul className="list-group list-group-flush display-7">
                        <li className="list-group-item px-1 py-2" style={{ backgroundColor: 'transparent' }}>Cover Music</li>
                        <li className="list-group-item px-1 py-2" style={{ backgroundColor: 'transparent' }}>Unlimited Artists</li>
                        <li className="list-group-item px-1 py-2" style={{ backgroundColor: 'transparent' }}>Independent / Label</li>
                        <li className="list-group-item px-1 py-2" style={{ backgroundColor: 'transparent' }}>60% Artist Royalty</li>
                        <li className="list-group-item px-1 py-2" style={{ backgroundColor: 'transparent' }}>
                          International Stores
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Link href='release-covers' className="btn fw-bold bg-black text-white m-0 d-block text-decoration-none" target="_blank">
                  Get Started
                </Link>
              </div>

            </div>
            <div className="bg-white card m-2 col-12 col-md-6 align-center col-lg-3 p-3">
              <div className="d-flex flex-column justify-content-between">
                <div className="">
                  <h6 className="mb-3 display-7 fw-bold" style={{ textAlign: 'right' }}>
                    Label Subscriptions

                  </h6>
                  <div className="">
                    <p className="price m-0 price m-0 priceHeading">
                      ₹9,996
                    </p>
                    <p className="price-term mb-3 fw-bold display-7" style={{ textAlign: 'right' }}>
                      Onwards
                      <br />
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className=" mb-4">
                    <ul className="list-group list-group-flush display-7">
                      <li className="list-group-item">
                        Original & Cover Music
                      </li>
                      <li className="list-group-item px-1 py-2" style={{ backgroundColor: 'transparent' }}>Unlimited Artists</li>
                      <li className="list-group-item px-1 py-2" style={{ backgroundColor: 'transparent' }}>Your Own Label</li>
                      <li className="list-group-item px-1 py-2" style={{ backgroundColor: 'transparent' }}>85% Label Royalty</li>
                      <li className="list-group-item px-1 py-2" style={{ backgroundColor: 'transparent' }}>
                        International & Indian Stores
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link href='label-subscription' className="btn bg-black fw-bold text-white m-0 d-block text-decoration-none" target="_blank">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="px-3 px-md-5 py-5">
        <div className="d-flex flex-column justify-content-center">

          <div className="d-flex w-100 flex-md-nowrap flex-wrap">
            <div className="bg-light d-flex align-items-center  w-100 rounded-1 m-3 p-3 p-md-5">
              <div className="d-flex align-items-md-center align-items-start gap-4 flex-column flex-lg-row ">
                <FaRegUser color="#b9de22" className="" style={{ width: '2.5rem', height: '2.5rem' }} />
                <div className="">
                  <h6 className="mb-1 display-6">
                    New Enquiries
                  </h6>
                  <br />
                  <p className="display-7">
                    Tanooj Sanjeev Mehra, CEO
                  </p>
                  <p className="display-7">
                    <Link href="https://wa.me/919820283097" className="text-black">Phone / WhatsApp: +91 98202 83097</Link>
                  </p>
                  <p className="display-7">
                    Email: tan@melo.works
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-light d-flex align-items-center w-100 rounded-1 m-3 p-3 p-md-5">
              <div className="d-flex align-items-md-center align-items-start gap-4 flex-column flex-lg-row">
                <FaRegUser color="#b9de22" className="" style={{ width: '2.5rem', height: '2.5rem' }} />
                <div className="">
                  <h6 className="mb-1 display-6">
                    Support Team
                  </h6>
                  <br />
                  <p className="display-7">
                    Adnan Baig, Head A&R
                  </p>
                  <p className="display-7">
                    <Link href="https://wa.me/7021572975" className="text-black">Phone / WhatsApp: +91 77381 93314</Link>
                  </p>
                  <p className="display-7">
                    Email: hi@melo.works
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex w-100 flex-md-nowrap flex-wrap">
            <div className="bg-light d-flex align-items-center w-100 rounded-1 m-3 p-3 p-md-5">
              <div className="d-flex align-items-md-center align-items-start gap-4 flex-column flex-lg-row">
                <Image src={locationPin} className="object-fit-contain w-auto" width={42} height={42} alt="melo location" />
                <div className="">
                  <h6 className="display-6">Address</h6>
                  <p className="display-7">
                    <Link className="text-black text-decoration-none" href="https://goo.gl/maps/7taT2ygzR8v2gU1Q6" target="_blank">603
                      Chaitanya Building, Ram Mandir Signal, Goregaon West,
                      Mumbai, Maharashtra 400104</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-light d-flex align-items-center w-100 rounded-1 m-3 p-3 p-md-5">
              <div className="d-flex align-items-md-center align-items-start gap-4 flex-column flex-lg-row">
                <FaRegClock color="#b9de22" style={{ width: '2.6rem', height: '2.5rem' }} />
                <div className="">
                  <h6 className="display-6">
                    Working Hours
                  </h6>

                  <p className="display-7">

                    Monday to Friday : 11:00AM - 06:00PM (IST)
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}
