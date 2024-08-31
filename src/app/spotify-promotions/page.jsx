import { FaShield } from "react-icons/fa6";
import styles from "./spotifyPromotions.module.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata = {
  title: " Melo | Spotify Ads Campaigns for Artists",
  description: "Leverage the power of Spotify Ads to promote your music. Melo's tailored Spotify advertising campaigns help artists connect with their audience and grow their streams.",
  openGraph: {
    images: ['https://melo.works/assets/images/favicon.png']
  },
}

export default function SpotifyPromotions() {
  return (
    <>
      <section
        className="box"
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          backgroundColor: "#8fa9e4",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <div className={`${styles.cardwrapper}`}>
                <div className="align-left text-white">
                  <h4
                    className={`mb-4 display-4 ${montserrat.className}`}
                    style={{
                      // fontSize: "3rem",
                      lineHeight: "1.1",
                      fontWeight: "400",
                    }}
                  >
                    Feel the Priceless Magic of Fame
                  </h4>
                  <p
                    className="mb-4 text-md-start text-justify"
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: "1.5",
                    }}
                  >
                    We know how it works and we can help you grow on Spotify,
                    organically. Our campaign strategy has a positive impact on
                    the algorithm.
                  </p>
                  <div style={{ marginLeft: "-9px" }}>
                    <a
                      className={`btn bg-white fw-bold ${styles.custom_hover}`}
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdXUjyR-5Onqxh7GRuGpPCWO9igAVKejn-ekokvjnXUjjLrUg/viewform"
                      target="_blank"
                      style={{
                        fontFamily: "roboto, sans-serif",
                        fontSize: "1rem",
                        lineHeight: "1.5",
                      }}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-white"
                  style={{
                    width: "60px",
                    minWidth: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginRight: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="fa"
                    style={{ fontSize: "2rem", color: "#808080" }}
                  >
                    <FaShield />
                  </span>
                </div>
                <div className="text-box">
                  <h4
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: "1.5",
                      color: "#fafafa",
                    }}
                  >
                    <strong>Connect with Real People</strong>
                  </h4>
                  <h5
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                      color: "#ffffff",
                    }}
                    className=""
                  >
                    Do what you love and focus on your music; we&apos;ll do the
                    rest. At Melo, we help you get heard without the use of
                    bots.
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-white"
                  style={{
                    width: "60px",
                    minWidth: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginRight: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="fa-users fa"
                    style={{ fontSize: "2rem", color: "#808080" }}
                  ></span>
                </div>
                <div className="text-box">
                  <h4
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: "1.5",
                      color: "#fafafa",
                    }}
                  >
                    <strong>Targeted Audience</strong>
                  </h4>
                  <h5
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                      color: "#ffffff",
                    }}
                  >
                    Amplify and enhance your music industry career with our
                    dedicated music promotion team. Select your target audience
                    and leave the rest to us.
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-white"
                  style={{
                    width: "60px",
                    minWidth: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginRight: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="fa-music fa"
                    style={{ fontSize: "2rem", color: "#808080" }}
                  ></span>
                </div>
                <div className="text-box">
                  <h4
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: "1.5",
                      color: "#fafafa",
                    }}
                  >
                    <strong>Multi-Genre Marketing</strong>
                  </h4>
                  <h5
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                      color: "#ffffff",
                    }}
                  >
                    Musicians down the block. Artists across the country. Reach
                    your audience in more places online while they’re searching,
                    browsing, or watching. We connect you to the people who
                    match your fanbase. &nbsp;
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="box1 bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem'}}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className={`${styles.cardwrapper} mb-4`}>
                                <div className="align-center">
                                    <h4 className="mb-4" style={{ fontFamily: 'montserrat, sans-serif', fontSize: '3rem', lineHeight: '1.1', fontWeight: '400' }}>
                                        Steps
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="item first p-4 d-flex align-items-center flex-column">
                                <div className="align-center w-100">
                                    <div style={{ background: '#8fa9e4', width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}>
                                        <span className="step-number  display-5" style={{ fontSize: '2rem', color: '#fff', lineHeight: '60px' }}>1</span>
                                    </div>
                                </div>

                                <div className="mt-3 text-center">
                                    <h4 style={{ fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}><strong>Select Target
                                        Audience</strong></h4>
                                    <h5 style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>You select your audience, and we work
                                        on advertising your Spotify ads in the best and most engaging way possible, filtering out
                                        the low-engagement streams as per your demand.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="item p-4 d-flex align-items-center flex-column">
                                <div className="align-center w-100">
                                    <div style={{ background: '#8fa9e4', width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}>
                                        <span className="step-number  display-5" style={{ fontSize: '2rem', color: '#fff', lineHeight: '60px' }}>2</span>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <h4 style={{ fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}><strong>Submit &
                                        Pay</strong></h4>
                                    <h5 style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>Melo promotes original and cover music
                                        on Spotify and helps to increase the streams at the lowest cost.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="item p-4 d-flex align-items-center flex-column">
                                <div className="align-center w-100">
                                    <div style={{ background: '#8fa9e4', width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}>
                                        <span className="step-number  display-5" style={{ fontSize: '2rem', color: '#fff', lineHeight: '60px' }}>3</span>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <h4 style={{ fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}><strong>Kick Back and
                                        Relax</strong>
                                    </h4>
                                    <h5 style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>Get ready to take Spotify by storm.
                                        Once the payment is made, you can sit and see us do the magic. We advertise your ads
                                        throughout and until the required target is achieved, providing you with a new and increased
                                        audience.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="item p-4 d-flex align-items-center flex-column">
                                <div className="align-center w-100">
                                    <div style={{ background: '#8fa9e4', width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}>
                                        <span className="step-number display-5" style={{ fontSize: '2rem', color: '#fff', lineHeight: '60px' }}>4</span>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <h4 style={{ fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
                                        <strong>Congratulations!</strong>
                                    </h4>
                                    <h5 style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>Finally, you don’t have to worry
                                        anymore about how to get more streams. Slowly but surely, you will see the campaign pick up
                                        speed and bring you more engagement.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      <section
        className="secondarycont pb-md-5 pb-2 bg-white"
        style={{ paddingTop: "6rem" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 pb-lg-5">
              <div className={`${styles.cardwrapper} mb-4`}>
                <div className="align-center">
                  <h4
                    className={`mb-4 display-4 ${montserrat.className}`}
                    style={{
                      // fontFamily: "montserrat, sans-serif",
                      // fontSize: "3rem",
                      lineHeight: "1.1",
                      fontWeight: "400",
                    }}
                  >
                    Steps
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0">
              <div className="first p-4 pe-lg-4 py-lg-0 ps-lg-0 d-flex align-items-center flex-column">
                <div className="align-center w-100">
                  <div
                    style={{
                      background: "#8fa9e4",
                      width: "60px",
                      minWidth: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    <span
                      className="step-number display-5"
                      style={{
                        fontSize: "2rem",
                        color: "#fff",
                        lineHeight: "60px",
                      }}
                    >
                      1
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-center ps-lg-1 ps-xl-2 ps-xxl-3">
                  <h4
                    className="fs-5 custom_Height_Promotions"
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: "1.5",
                    }}
                  >
                    <strong>Select Target Audience</strong>
                  </h4>
                  <h5
                    className="fs-6 text-md-center text-justify pt-lg-2 pt-xxl-0"
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    You select your audience, and we work on advertising your
                    Spotify ads in the best and most engaging way possible,
                    filtering out the low-engagement streams as per your demand.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
              <div className="custom_item_promotions p-4 pe-lg-4 py-lg-0 ps-lg-0 d-flex align-items-center flex-column">
                <div className="align-center w-100">
                  <div
                    style={{
                      background: "#8fa9e4",
                      width: "60px",
                      minWidth: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    <span
                      className="step-number display-5"
                      style={{
                        fontSize: "2rem",
                        color: "#fff",
                        lineHeight: "60px",
                      }}
                    >
                      2
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4
                    className="fs-5 custom_Height_Promotions "
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: "1.5",
                    }}
                  >
                    <strong>Submit & Pay</strong>
                  </h4>
                  <h5
                    className="fs-6 text-md-center text-justify pt-lg-2 pt-xxl-0"
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    Melo promotes original and cover music on Spotify and helps
                    to increase the streams at the lowest cost.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
              <div className="custom_item_promotions p-4 pe-lg-4 py-lg-0 ps-lg-0 d-flex align-items-center flex-column">
                <div className="align-center w-100">
                  <div
                    style={{
                      background: "#8fa9e4",
                      width: "60px",
                      minWidth: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    <span
                      className="step-number  display-5"
                      style={{
                        fontSize: "2rem",
                        color: "#fff",
                        lineHeight: "60px",
                      }}
                    >
                      3
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4
                    className="fs-5  custom_Height_Promotions"
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: "1.5",
                    }}
                  >
                    <strong>Kick Back and Relax</strong>
                  </h4>
                  <h5
                    className="fs-6 text-md-center text-justify pt-lg-2 pt-xxl-0"
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    Get ready to take Spotify by storm. Once the payment is
                    made, you can sit and see us do the magic. We advertise your
                    ads throughout and until the required target is achieved,
                    providing you with a new and increased audience.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
              <div className="custom_item_promotions p-4 pe-lg-3 py-lg-0 ps-lg-0 d-flex align-items-center flex-column">
                <div className="align-center w-100">
                  <div
                    style={{
                      background: "#8fa9e4",
                      width: "60px",
                      minWidth: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    <span
                      className="step-number  display-5"
                      style={{
                        fontSize: "2rem",
                        color: "#fff",
                        lineHeight: "60px",
                      }}
                    >
                      4
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4
                    className="fs-5 custom_Height_Promotions"
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1.2rem",
                      lineHeight: "1.5",
                    }}
                  >
                    <strong>Congratulations!</strong>
                  </h4>
                  <h5

                    className="fs-6 text-md-center text-justify pt-lg-2 pt-xxl-0"
                    style={{
                      fontFamily: "roboto, sans-serif",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    Finally, you don&apos;t have to worry anymore about how to get
                    more streams. Slowly but surely, you will see the campaign
                    pick up speed and bring you more engagement.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
