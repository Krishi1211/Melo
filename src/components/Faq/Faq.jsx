"use client";
import Link from "next/link";
import { useState } from "react";

import "@/app/faq/faq.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700']
});

export default function Faquestion({styles}) {
  const [activeTab, setActiveTab] = useState("join-us");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="" id="faqId">
        <div className="blackBg py-5 px-md-5 px-1">
          <div className="container">
            <div className="p-0">
              <h1
                className={`text-light ${montserrat.className} ${styles.heading}`}
              >
                Frequently Asked Questions
              </h1>
              <div className="py-4">
                <ul className="nav nav-tabs justify-content-md-start justify-content-center">
                  <li className="nav-item my-sm-0 my-">
                    <button
                      className={`fw-bold fs-md-5 fs-6 ps-3 ps-lg-0 nav_link_new ${activeTab === "join-us" ? `active` : ``
                        }`}
                      onClick={() => handleTabClick("join-us")}
                    >
                      Join Us
                    </button>
                  </li>
                  <li className="nav-item my-sm-0 my-">
                    <button
                      className={`fw-bold fs-md-5 fs-6 nav_link_new ${activeTab === "my-account" ? `active` : ``
                        }`}
                      onClick={() => handleTabClick("my-account")}
                    >
                      My Account
                    </button>
                  </li>
                  <li className="nav-item my-sm-0 my-">
                    <button
                      className={`fw-bold fs-md-5 fs-6 nav_link_new ${activeTab === "releases"
                          ? `active`
                          : `${styles.activeTxt}`
                        }`}
                      onClick={() => handleTabClick("releases")}
                    >
                      Releases
                    </button>
                  </li>
                  <li className="nav-item my-sm-0 my-">
                    <button
                      className={`fw-bold fs-md-5 fs-6 nav_link_new ${activeTab === "royalties" ? `active` : ``
                        }`}
                      onClick={() => handleTabClick("royalties")}
                    >
                      Royalties
                    </button>
                  </li>
                  <li className="nav-item my-sm-0 my-">
                    <button
                      className={`fw-bold nav_link_new fs-md-5 fs-6 ${activeTab === "dashboard" ? `active` : ""
                        }`}
                      onClick={() => handleTabClick("dashboard")}
                    >
                      Dashboard
                    </button>
                  </li>
                </ul>

                <div className="tab-content text-light p-3 pt-4 px-0">
                  <div
                    className={`tab-pane ${activeTab === "join-us" ? "active" : ""
                      }`}
                  >
                    <p className="fst-italic mb-2 text-light">
                      Why and how to join melo.
                    </p>
                    <p className="mb-4 text-light">
                      Benefits of melo and a step by step guide on how to use
                      our easy platform.
                    </p>
                    <Link href="#royaltiesId" className="greenTxt">
                      Learn More
                    </Link>
                  </div>
                  <div
                    className={`tab-pane ${activeTab === "my-account" ? "active" : ""
                      }`}
                  >
                    <p className="fst-italic mb-2 text-light">My Account.</p>

                    <p className="text-light mb-4">
                      Read about your account settings to ensure a smooth
                      experience.
                    </p>
                    <Link href="" className="greenTxt">
                      Learn More
                    </Link>
                  </div>
                  <div
                    className={`tab-pane ${activeTab === "releases" ? "active" : ""
                      }`}
                  >
                    <p className="text-light mb-2 fst-italic">Releases.</p>
                    <p className="text-light mb-4">
                      All you need to release your work! Originals, Covers,
                      Remixes, Audiobooks, MFit and more!
                    </p>

                    <Link href="" className="greenTxt">
                      Learn More
                    </Link>
                  </div>
                  <div
                    className={`tab-pane ${activeTab === "royalties" ? "active" : ""
                      }`}
                  >

                    <p className="text-light mb-2 fst-italic">
                      Earnings & royalties.
                    </p>
                    <p className="text-light mb-4">
                      Learn about how to check your earnings, how much you can
                      make and sales related stuff.
                    </p>

                    <Link href="" className="greenTxt">
                      Learn More
                    </Link>
                  </div>
                  <div
                    className={`tab-pane ${activeTab === "dashboard" ? "active" : ""
                      }`}
                  >

                    <p className="text-light mb-2 fst-italic">Dashboard</p>
                    <p className="text-light mb-4">
                      Your very own dashboard filled with features.
                    </p>

                    <Link href="" className="greenTxt">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`d-flex  flex-column align-items-center`}>
          {/* Join us accordions START HERE */}
          <div
            id="joinUsId"
            className={`px-md-5 py-md-5 px-3 py-4 col-12 col-md-9`}
          >
            <div className="">
              <h1
                className={`${styles.heading} ${montserrat.className} pt-2 pt-md-5`}
              >
                Join Us
              </h1>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-headingOne"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Can I use more than one digital distributor for a release?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />
                  <div
                    id="flush-collapseOne"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      Can I use more than one digital distributor for a release?
                      No, you can&apos;t distribute your release with another digital
                      distributor at the same time, but you can use a different
                      digital distributor for other releases.
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-headingTwo"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      How it works?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapseTwo"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      Create your free account with melo to access all our
                      services; <br />
                      Check your email to confirm; <br />
                      Login to your own personal dashboard to manage your music.
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-headingThree"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What are the benefits of melo?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapseThree"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <div className="">
                        <ul className="mb-0 list-unstyled">
                          <li>Indian company established in 2020.</li>
                          <li>Helped over 1,000 artists.</li>
                          <li>Deliver more than 100 releases a month.</li>
                          <li>Simple terms and conditions.</li>
                          <li>
                            More time to focus on what you do best – making
                            music.
                          </li>
                          <li>Own your data and cancel whenever you want.</li>
                          <li>
                            Take down your release from the shops anytime, free
                            of charge.
                          </li>
                        </ul>
                      </div>

                      <div className="mt-3">
                        <h6 className="fw-bold">Support</h6>
                        <div className="">
                          Dedicated customer support in two languages. <br />
                          Real people answer in your own language, within one
                          working day.
                        </div>
                      </div>
                      <div className="mt-3">
                        <h6 className="fw-bold">Shops</h6>
                        <div className="">
                          Sell in all major online platforms. <br />
                          Publish your music on 20+ OTT platforms to reach your
                          fans everywhere. <br />
                          Free ISRC and UPC codes for your release. <br />
                        </div>
                      </div>
                      <div className="mt-3">
                        <h6 className="fw-bold">Earnings and Royalties</h6>
                        <div className="">
                          Dedicated customer support in two languages. <br />
                          Real people answer in your own language, within one
                          working day.
                        </div>
                      </div>
                      <div className="mt-3">
                        <h6 className="fw-bold">Fees</h6>
                        <div className="">
                          Pay only once per release. <br />
                          No recurring annual fee for your release or choose
                          label subscription for unlimited tracks. <br />
                          No take down fees if you decide to cancel. <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-headingFour"
                  >
                    <button
                      className="accordion-button text-black px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      How do I switch from another music distributor to melo?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapseFour"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <div className="">
                        We are happy that you’re considering redistributing your
                        music with us. <br />
                        Please contact us over email{" "}
                        <Link href="mailto:hi@melo.works" className="greenTxt">
                          hi@melo.works
                        </Link>{" "}
                        - so that we can guide you on how to redistribute your
                        music with us.
                      </div>
                      <div className="mt-3">
                        Please send us your releases with your original ISRC
                        codes when you upload your release on melo, in order to
                        keep all your stats and playlists intact. Once
                        you&apos;ve sent us your release, you can request your
                        existing distributor to take the release down. <br />
                        We migrate releases while keeping your tracks live so
                        that your fans don&apos;t miss out on any of your
                        content.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-headingFive"
                  >
                    <button
                      className="accordion-button px-0 bg-transparent collapsed text-black fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Is my agreement with melo exclusive?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapseFive"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      No, the agreement is on a release basis and not for your
                      entire catalogue. However, you may not distribute your
                      release with another digital distributor at the same time.
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-4 flex-md-row flex-column justify-content-center">
                <Link
                  href="#faqId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 fs-6 m-1 mx-md-2 mx-0 text-center rounded-1 greenBg text-black fw-bold"
                >
                  Back to FAQ
                </Link>
                <Link
                  href="#joinUsId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 m-1 mx-md-2 mx-0 text-center rounded-1 blackBg text-light fw-bold"
                >
                  Back to Join Us
                </Link>
              </div>
            </div>
          </div>
          {/* Join us accordions END HERE */}

          {/* My accounts accordions START HERE */}
          <div
            className={`px-md-5 px-3 py-4 pt-0 col-12 col-md-9`}
            id="myAccId"
          >
            <div className="">
              <h1
                className={`${styles.heading} pt-2 pt-md-5 ${montserrat.className}`}
              >
                My Account
              </h1>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading1One"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse1One"
                      aria-expanded="false"
                      aria-controls="flush-collapse1One"
                    >
                      I created an account but I can’t access it. How can I fix
                      that?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />
                  <div
                    id="flush-collapse1One"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading1One"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        Once you’ve signed up, you&apos;ll need to activate your
                        account from a link that we send to your email. In case
                        you did not receive an email, please check your spam
                        folder, mark the email as ‘No spam’ and follow the link.
                      </p>
                      <p>
                        If you already activated your account and you cannot
                        login, please reset your password here:{" "}
                        <Link
                          href="https://dashboard.melo.works/auth/forgot-password"
                          className="greenTxt"
                        >
                          {" "}
                          https://dashboard.melo.works/auth/forgot-password
                        </Link>
                      </p>
                      <p>
                        <span className="fw-bold">Please note:</span> Links are
                        only valid for 1 hour. After 1 hour you&apos;ll need to
                        request a new one.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading1Two"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse1Two"
                      aria-expanded="false"
                      aria-controls="flush-collapse1Two"
                    >
                      How do I change my email?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse1Two"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading1Two"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        We don&apos;t just take care of your music, we also care
                        about your hard-earned money, the security of your
                        account, and your personal data.
                      </p>
                      <p>
                        That&apos;s why you&apos;ll need to send us one of the
                        following proofs of identity to change your login email
                        address: <br />
                        <span className="fw-bold fst-italic">
                          Passport or Aadhar Card.
                        </span>
                        <br />
                        <span className="fw-bold fst-italic">
                          A picture of you holding your Passport or Aadhar Card.
                        </span>{" "}
                      </p>
                      <p>
                        We could also arrange a Skype call to verify your
                        identity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading1Three"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse1Three"
                      aria-expanded="false"
                      aria-controls="flush-collapse1Three"
                    >
                      How many releases can I create if I choose Label
                      Subscription?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse1Three"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading1Three"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      As a label, you can release as much as you want. All you
                      pay is the annual fee and you&apos;re good to go.
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading1Four"
                  >
                    <button
                      className="accordion-button text-black px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse1Four"
                      aria-expanded="false"
                      aria-controls="flush-collapse1Four"
                    >
                      Can I release for multiple artists or labels with Label
                      Subscription?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse1Four"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading1Four"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <div className="">
                        Yes, you can also release for as many artists or bands
                        as you want.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading1Five"
                  >
                    <button
                      className="accordion-button px-0 bg-transparent collapsed text-black fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse1Five"
                      aria-expanded="false"
                      aria-controls="flush-collapse1Five"
                    >
                      How do I close my account?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse1Five"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading1Five"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        You can end your agreement with us whenever you want. To
                        do so, simply:
                        <br />
                        <span className="fw-bold fst-italic">
                          Send us an email.
                        </span>
                        <br />
                        <span className="fw-bold fst-italic">
                          Make sure all outstanding invoices are paid.
                        </span>{" "}
                      </p>
                      <p>
                        Please bear in mind that sales can come in the following
                        months. <br /> Closing your account can result in
                        missing out on some future income.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading1Six"
                  >
                    <button
                      className="accordion-button px-0 bg-transparent collapsed text-black fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse1Six"
                      aria-expanded="false"
                      aria-controls="flush-collapse1Six"
                    >
                      How can I pay?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse1Six"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading1Six"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        We process our payments via RazorPay or Manual Bank
                        Transfers:
                        <br />
                        <span className="fw-bold fst-italic">
                          With RazorPay, you can pay with Credit / Debit Cards,
                          Internet Banking, UPI & Wallets.
                        </span>
                        <br />
                        <span className="fw-bold fst-italic">
                          For Manual Bank Transfers, please send us the payment
                          to the details below and send us a receipt on{" "}
                          <Link
                            href="mailto:hi@melo.works"
                            className="greenTxt"
                          >
                            hi@melo.works
                          </Link>
                          .
                        </span>
                      </p>
                      <div className="">
                        Bank Details: <br />
                        <span className="fw-bold">ACCOUNT NAME:</span> KENMARK
                        ITAN SOLUTIONS <br />
                        <span className="fw-bold">ACCOUNT NO:</span>{" "}
                        0174102000022631 <br />
                        <span className="fw-bold">IFSC / RTGS CODE:</span>{" "}
                        IBKL0000174
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex mt-4 flex-md-row flex-column justify-content-center">
                <Link
                  href="#faqId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 m-1 mx-md-2 mx-0 text-center rounded-1 greenBg text-black fw-bold"
                >
                  Back to FAQ
                </Link>
                <Link
                  href="#myAccId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 m-1 mx-md-2 mx-0 text-center rounded-1 blackBg text-light fw-bold"
                >
                  Back to My Account
                </Link>
              </div>
            </div>
          </div>
          {/* My accounts accordions END HERE */}

          {/* Releases accordions START HERE */}
          <div
            className={`px-md-5 px-3 py-4 pt-0 col-12  col-md-9`}
            id="releasesId"
          >
            <div className="">
              <h1
                className={`${styles.heading} ${montserrat.className} pt-2 pt-md-5`}
              >
                Releases
              </h1>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2One"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2One"
                      aria-expanded="false"
                      aria-controls="flush-collapse2One"
                    >
                      What if I need to correct something after a release was
                      delivered?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />
                  <div
                    id="flush-collapse2One"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2One"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        Yes, in most cases this can be done. Please note that it
                        is not possible to change: <br />
                        <span className="fw-bold fst-italic">
                          The number of tracks in your release.
                        </span>
                        <br />
                        <span className="fw-bold fst-italic">
                          The track order.
                        </span>
                        <br />
                        <span className="fw-bold fst-italic">
                          The ISRC and the UPC codes once your release has been
                          approved and delivered.
                        </span>
                        <br />
                        <span className="fw-bold fst-italic">
                          The artist name.
                        </span>
                        <br />
                      </p>
                      <p>
                        All other modifications are possible and cost ₹199 per
                        modification (free for Label Subscription).
                      </p>
                      <p>
                        In case you want to change your release title, please
                        keep in mind that we also need to update the artwork for
                        your release.
                        <br />
                        Therefore, please send us the new artwork with your
                        change request.
                      </p>
                      <p>
                        Send us an email on{" "}
                        <Link href="mailto:hi@melo.works" className="greenTxt">
                          hi@melo.works
                        </Link>{" "}
                        and we&apos;ll help you sort this out.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Two"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Two"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Two"
                    >
                      Which genres do you distribute?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Two"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Two"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        Good news: We distribute all kinds of genres, including
                        classical!
                      </p>
                      <p>
                        If you don&apos;t find the genre that suits your needs
                        best, please send us an email on{" "}
                        <Link href="mailto:hi@melo.works" className="greenTxt">
                          hi@melo.works
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Three"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Three"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Three"
                    >
                      What label can I use for my release?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Three"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Three"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      The creation of the label offered by melo has no legal
                      value. It&apos;s just the name of the label that will
                      appear on online stores in place of melo. When you upload
                      a release on our platform you can decide to publish it
                      with: <br />
                      <span className="fst-italic fw-bold">
                        A free label, which will look like [melo].
                      </span>{" "}
                      <br />
                      <span className="fst-italic fw-bold">
                        A premium label, which will look like [YOUR LABEL NAME];
                        you can purchase each premium label at ₹996.
                      </span>{" "}
                      <br />
                      <br />
                      <p>
                        The creation of a premium label entails a one-time fee
                        for releases published with singles, EPs, albums and
                        covers, while it is included with label subscription.
                      </p>
                      <p>
                        All your premium labels are saved in our systems and can
                        be selected from the drop-down menu for each release.
                        You will not have to pay again for a premium label that
                        you previously created.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Four"
                  >
                    <button
                      className="accordion-button text-black px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Four"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Four"
                    >
                      How long does it take to see my music online?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Four"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Four"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <div className="">
                        We offer 2 different delivery options to port your music
                        to the platforms: <br />
                        <span className="fst-italic fw-bold">
                          Standard delivery (5 - 7 days): Free for all releases.
                        </span>{" "}
                        <br />
                        <span className="fst-italic fw-bold">
                          Express delivery (48 - 72 hours): ₹599 for all
                          releases.
                        </span>{" "}
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Five"
                  >
                    <button
                      className="accordion-button px-0 bg-transparent collapsed text-black fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Five"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Five"
                    >
                      What kind of release types can I distribute?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Five"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Five"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        There are three different release types you can choose:
                      </p>
                      <p>
                        Single: 1 track. <br />
                        EP: upto 5 tracks. <br />
                        Album: upto 15 tracks. <br />
                      </p>
                      <p>
                        Find the prices per release <Link href=""> here.</Link>
                      </p>

                      <p>
                        iTunes has its own rules when it comes to displaying
                        releases, so even if we send your release as an EP, it
                        might be marked as a Single on iTunes.
                      </p>

                      <p>
                        Please note: Once you&apos;ve published your release,
                        you are no longer allowed to add, modify or remove
                        tracks. If you want to change something, you will have
                        to create another release -- and pay for it -- including
                        new tracks. If you need to change the audio file to a
                        better or remastered version of a published track, send
                        it to us via email, and we&apos;ll make the change for
                        you.
                      </p>

                      <p>
                        If your release has not been exported and published yet,
                        you can still add, modify or remove tracks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Six"
                  >
                    <button
                      className="accordion-button px-0 bg-transparent collapsed text-black fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Six"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Six"
                    >
                      What do I need?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Six"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Six"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <ul className="list-unstyled">
                        <li>☑️ Audio files</li>
                        <li>☑️ Artwork</li>
                        <li>☑️ Metadata</li>
                      </ul>

                      <div className="">
                        <div className="mt-3">
                          <h6 className="fw-bold">Audio files</h6>
                          <div className="">
                            We only accept WAV files 44.1 - 88.2 - 96 kHz, 16 -
                            24 bit
                            <br />
                            The maximum size for a track is 1 GB.
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="fw-bold">Artwork</h6>
                          <div className="">
                            Many shops, including Apple Music (iTunes) and
                            Spotify, have very strict policies on artwork they
                            will accept to be sold or streamed from their site.
                            If your artwork does not meet their standards, we
                            will be unable to distribute your release. To ensure
                            your release complies, be sure to follow the
                            guidelines, below.
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="fw-bold">
                            The artwork must meet the following requirements:
                          </h6>
                          <div className="">
                            Minimum 3000 x 3000 pixels, JPG or PNG and sharp
                            when viewing it on 100%. <br />
                            RGB colour mode (CMYK is not accepted).
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="fw-bold">Optional:</h6>
                          <div className="">
                            We recommend adding the artist name and the release
                            title on your artwork especially if you use an
                            artist picture or generic landscape pictures. The
                            artist name and the release title do not have to be
                            added on artistic works.
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="fw-bold">We do not accept:</h6>
                          <div className="">
                            <ul className="list-unstyled">
                              <li>Blurry and pixelated images.</li>
                              <li>Website URLs.</li>
                              <li>Social network symbols.</li>
                              <li>Email addresses.</li>
                              <li>Pornographic images.</li>
                              <li>Copyrighted images.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Seven"
                  >
                    <button
                      className="accordion-button px-0 bg-transparent collapsed text-black fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Seven"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Seven"
                    >
                      How does Melo distribute your cover, edits, remixes,
                      mashups?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Seven"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Six"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      Here are a few examples that will clearly guide you in
                      creating a cover version that Melo will distribute.
                      <br />
                      <br />
                      <strong>
                        1. You did your version of an existing song in which:
                      </strong>
                      <br />
                      <li>
                        In which the songwriters are NOT from your country.
                      </li>
                      <li>
                        You did <strong>NOT</strong> change the lyrics of the
                        song.
                      </li>
                      <li>
                        You did <strong>NOT</strong> change the theme.
                      </li>
                      <li>
                        You did <strong>NOT</strong> change the primary
                        arrangement (e.g., Verse/Chorus/Verse/Chorus, etc.), not
                        even the genre.
                      </li>
                      <br />
                      <strong>
                        If you haven&apos;t done this, you&apos;re good to go
                        and distribute your cover version worldwide!
                      </strong>
                      <br />
                      <br />
                      <strong>PLEASE NOTE:</strong> <br />
                      <li>
                        Make foolproof that you fill in the original song&apos;s
                        composers, lyricists, and publishers when you enter our
                        registration.
                      </li>
                      <li>
                        Don&apos;t fail to mark your cover song by toggling on
                        &quot;cover version.&quot;
                      </li>
                      <li>
                        Legally saying, the original rights holder still secures
                        the right to request the takedown of your cover version.
                      </li>
                      <br />
                      <strong>What Melo needs from you:</strong>
                      <li>
                        The <strong>name(s)</strong> of the original
                        publisher(s) of the song.
                      </li>
                      <li>
                        The <strong>name(s)</strong> of the original composer(s)
                        of the song (can be other than that of the performer)
                      </li>
                      <li>
                        The <strong>name(s)</strong> of the original lyricist(s)
                        of the song (can be other than that from the performer)
                      </li>
                      <li>
                        You can utilise a working database from a collecting
                        institution.
                      </li>
                      <br />
                      <strong>
                        2. You did your version of an existing song in which:
                      </strong>
                      <li>
                        The songwriters <strong>ARE</strong> from your country.
                      </li>
                      <li>
                        You did <strong>NOT</strong> alter the lyrics.
                      </li>
                      <li>
                        You did <strong>NOT</strong> revise the melody
                      </li>
                      <li>
                        You did <strong>NOT</strong> modify the prior
                        arrangement (e.g., Verse/Chorus/Verse/Chorus, etc.), not
                        even the genre
                      </li>
                      <br />
                      <strong>PLEASE NOTE:</strong> <br />
                      <li>
                        Make sure that you fill in the original song&apos;s
                        composers, lyricists, and publishers when you enter for
                        our registration.
                      </li>
                      <li>
                        Don&apos;t fail to mark your cover song by toggling on
                        &quot;cover version.&quot;
                      </li>
                      <li>
                        Legally saying, the original rights holder still secures
                        the right to demand the takedown of your cover version.
                      </li>
                      <br />
                      <strong>What Melo needs from you:</strong> <br />
                      <li>
                        The <strong>name(s)</strong> of the original
                        publisher(s) of the song.
                      </li>
                      <li>
                        The <strong>name(s)</strong> of the original composer(s)
                        of the song (can be other than that of the performer)
                      </li>
                      <li>
                        The <strong>name(s)</strong> of the original lyricist(s)
                        of the song (can be other than that of the performer)
                      </li>
                      <li>
                        You can use a working database from a collecting
                        institution.
                      </li>
                      <br />
                      <strong>
                        3. You did your version of an existing song in which:
                      </strong>
                      <br />
                      <li>
                        You <strong>EDITED/CUT/CHANGED</strong> the lyrics or
                      </li>
                      <li>
                        You <strong>EDITED/CUT/CHANGED</strong> the melody or
                      </li>
                      <li>
                        You <strong>CHANGED</strong> the basic arrangement
                        (e.g., Verse/Chorus/Verse/Chorus, etc.) OR even the
                        genre
                      </li>
                      <br />
                      This is <strong>NOT</strong> a cover version, but an
                      <strong>EDIT</strong>, and you need to get approval from
                      the original rights holders to broadcast your song with
                      us.
                      <br />
                      <br />
                      <strong>PLEASE NOTE:</strong> <br />
                      <li>
                        You can send us all relevant documents via our Contact
                        Form.
                      </li>
                      <li>
                        Once we&apos;ve checked your documents and accepted
                        them, please make sure you follow our guidelines.
                      </li>
                      <br />
                      <strong>
                        4. You did your version of an existing song
                      </strong>
                      <br />
                      <li>You utilised parts of the ORIGINAL RECORDING and</li>
                      <li>
                        You <strong>EDITED/CUT/CHANGED</strong> the lyrics or
                      </li>
                      <li>
                        You <strong>EDITED/CUT/CHANGED</strong> the melody or
                      </li>
                      <li>
                        You <strong>CHANGED</strong> the basic arrangement
                        (e.g., Verse/Chorus/Verse/Chorus, etc.) OR the genre.
                      </li>
                      <br />
                      This is <strong>NOT</strong> a cover version but a
                      <strong>REMIX</strong>. Remixes are very difficult to
                      vacate because you need to get permission from the rights
                      holders of the master rights for the recording and the
                      rights holders of the composition for the editing of the
                      original composition. <br />
                      <br />
                      <strong>PLEASE NOTE:</strong> <br />
                      We only distribute remixes that are properly cleared! So
                      please send us all appropriate documents via our Contact
                      Form. <br />
                      <br />
                      <strong>
                        5. You created one song by mixing two (or more) existing
                        songs:
                      </strong>
                      <br />
                      This is not a cover version but a <strong>MASHUP</strong>.
                      <br />
                      <br />
                      <strong>PLEASE NOTE:</strong> <br />
                      Melo won&apos;t circulate your Mashup unless you
                      adequately clear all parts! So kindly send us all
                      pertinent documents via our Contact Form.
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex mt-4 flex-md-row flex-column justify-content-center">
                <Link
                  href="#faqId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 m-1 mx-md-2 mx-0 text-center rounded-1 greenBg text-black fw-bold"
                >
                  Back to FAQ
                </Link>
                <Link
                  href="#releasesId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 m-1 mx-md-2 mx-0 text-center rounded-1 blackBg text-light fw-bold"
                >
                  Back to Releases
                </Link>
              </div>
            </div>
          </div>
          {/* Releases accordions END HERE */}

          {/* Royalties accordions START HERE */}
          <div
            className={`px-md-5 px-3 py-4 pt-0 col-12 col-md-9`}
            id="royaltiesId"
          >
            <div >
              <h1
                className={`${styles.heading} pt-2 ${montserrat.className} pt-md-5`}
              >
                Royalties
              </h1>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2One"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2One"
                      aria-expanded="false"
                      aria-controls="flush-collapse2One"
                    >
                      How much can I earn with my release?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />
                  <div
                    id="flush-collapse2One"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2One"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        Nowadays most of your revenue will come from streaming
                        services. Here’s a quick explanation of royalty system
                        that most streaming services are using:
                      </p>
                      <p>
                        [(Monthly revenue of streaming service in your country -
                        streaming service commission & payments to collection
                        societies) x (your number of streams / total streams)] -
                        melo commission = your payout amount.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Two"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Two"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Two"
                    >
                      When do I see my sales?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Two"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Two"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        Sales are uploaded quarterly but you can see up-to-date
                        trends from the most important shops and services every
                        month.
                      </p>
                      <p>
                        Sales revenue for a release is only made available by
                        the shops 3-4 months after sales occur. Any data shown
                        will therefore be at least 3-4 months old. If a digital
                        release date occurs after the 20th of a month it could
                        result in the data being delayed by a further month.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Three"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Three"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Three"
                    >
                      How do I request a payout?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Three"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Three"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      At the moment, please email{" "}
                      <Link href="mailto:hi@melo.works" className="greenTxt">
                        hi@melo.works
                      </Link>{" "}
                      for your royalty report. If it exceeds ₹1,500 - you may
                      request a payout via bank transfer.
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Four"
                  >
                    <button
                      className="accordion-button text-black px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Four"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Four"
                    >
                      Should I declare my earnings for taxes?
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Four"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Four"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <p>
                        Any sales income needs to be declared as income. Tax
                        rules are different in every country, so we recommend
                        that you consult your accountant.
                      </p>
                      <p>
                        <span className="fw-bold">Please note:</span> <br />
                        Your sales income is taxed subject to Indian income tax
                        law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex mt-4 flex-md-row flex-column justify-content-center">
                <Link
                  href="#faqId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 m-1 mx-md-2 mx-0 text-center rounded-1 greenBg text-black fw-bold"
                >
                  Back to FAQ
                </Link>
                <Link
                  href="#royaltiesId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 m-1 mx-md-2 mx-0 text-center rounded-1 blackBg text-light fw-bold"
                >
                  Back to Royalties
                </Link>
              </div>
            </div>
          </div>
          {/* Royalties accordions END HERE */}

          {/* Dashboard accordions START HERE */}
          <div
            className={`px-md-5 px-3 py-4 pt-0 col-12 col-md-9`}
            id="dashboardId"
          >
            <div className="">
              <h1
                className={`${styles.heading} ${montserrat.className} pt-2 pt-md-5`}
              >
                Dashboard
              </h1>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2One"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2One"
                      aria-expanded="false"
                      aria-controls="flush-collapse2One"
                    >
                      Guidelines - Assets
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />
                  <div
                    id="flush-collapse2One"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2One"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <ol>
                        <li>
                          Artwork (JPG, 3000x3000px, text required: Artist Name,
                          Track Title, no other text or logo should be added) -
                          required for release
                        </li>
                        <li>
                          Audio (WAV, 44.1kHz 16bit) - required for release
                        </li>
                        <li>Artist HD Image - required for pitch</li>
                        <li>
                          Video Byte(60 Seconds Video that may contain shots
                          from your Music Video or Selfie Video talking to your
                          fans about your upcoming release) - recommended for
                          pitch
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Two"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Two"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Two"
                    >
                      Guidelines - Release
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Two"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Two"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <ol>
                        <li>
                          Track Title Language Genre / Sub-Genre Mood Release
                          Date
                        </li>
                        <li>Explicit Content (Y / N)</li>
                        <li>
                          ISRC Code (Optional: if transferring a release from
                          another distributor)
                        </li>
                        <li>
                          Primary Artists, Featuring Artists Lyricist, Composer
                          (Legal names required)
                        </li>
                        <li>
                          Producer (Optional) Profile links for each artist
                          (Spotify, Apple, Instagram, YouTube)
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="accordion-item pt-4 bg-transparent">
                  <h2
                    className="accordion-header bg-transparent"
                    id="flush-heading2Three"
                  >
                    <button
                      className="text-black accordion-button px-0 bg-transparent collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2Three"
                      aria-expanded="false"
                      aria-controls="flush-collapse2Three"
                    >
                      Guidelines - Pitch
                    </button>
                  </h2>
                  <hr color="white" style={{ margin: "0" }} />

                  <div
                    id="flush-collapse2Three"
                    // style={{ backgroundColor: 'transparent !important' }}
                    className="accordion-collapse collapse bg-transparent"
                    aria-labelledby="flush-heading2Three"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className={`accordion-body px-0 ${styles.accordionTxt}`}
                    >
                      <ol>
                        <li>
                          Release has to be sent at least 21 days in advance.
                        </li>
                        <li>
                          Short Description for Single (Minimum 100 words).
                        </li>
                        <li>Artist Bio (Minimum 200 words).</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex mt-4 flex-md-row flex-column justify-content-center">
                <Link
                  href="#faqId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 m-1 mx-md-2 mx-0 text-center rounded-1 greenBg text-black fw-bold"
                >
                  Back to FAQ
                </Link>
                <Link
                  href="#dashboardId"
                  style={{
                    boxShadow: "0 2px 2px 0 rgba(0,0,0,.2)",
                    scrollBehavior: "smooth",
                  }}
                  className="px-4 py-md-3 py-2 m-1 mx-md-2 mx-0 text-center rounded-1 blackBg text-light fw-bold"
                >
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
          {/* Dashboard accordions END HERE */}
        </div>
      </div>
    </>
  );
}
