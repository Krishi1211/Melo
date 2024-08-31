import { FaShield } from "react-icons/fa6";
import "react-icons/fa";
import "./styles.css";

import { FaArrowRight } from "react-icons/fa6";
import { Montserrat } from "@next/font/google";

export const metadata = {
    title: "Music | Promotion Services with Melo",
    description:
        "With Melo's promotional services, promote your music online and reach millions of fans worldwide. Get viral in the blink of an eye.",
    openGraph: {
        images: ["https://melo.works/assets/images/favicon.png"],
    },
};

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700']
});

export default function Promote() {
    return (
        <>
            <section
                className="text-secondary sand py-3 py-md-5"
                style={{
                    background: "#8fa9e4",
                    paddingTop: "6rem",
                    paddingBottom: "6rem",
                }}
            >
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6 py-4">
                            <div className="align-left" style={{ color: "white" }}>
                                <h1
                                    className={`mb-4 display-4 ${montserrat.className}`}
                                    style={{
                                        fontWeight: "400",
                                    }}
                                >
                                    Promote
                                </h1>
                                <p className="mb-4 ">
                                    Promote your music to millions and reach more fans wherever
                                    they are. Gain popularity and monitor real-time results from
                                    fans most passionate about discovering you, with Melos range
                                    of promotional services.
                                </p>
                                <a
                                    className="btn ms-0 started-btn fw-bold"
                                    href="promote.html#pricing2-27"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex align-items-center mb-4">
                                <div
                                    className="icon-box"
                                    style={{
                                        background: "#ffffff",
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
                                        className=""
                                        style={{ fontSize: "2rem" }}
                                    >
                                        <FaShield />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="display-7" style={{ color: "#fafafa" }}>
                                        <strong>Connect with Real People</strong>
                                    </h4>
                                    <p className="align-left" style={{ color: "#ffffff" }}>
                                        At Melo, we are dedicated to keeping your fan base human. No
                                        AI, No Bots - only real connections, between you and your
                                        fans.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div
                                    className="icon-box"
                                    style={{
                                        background: "#ffffff",
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
                                        className="mbr-iconfont fa-users fa"
                                        style={{ fontSize: "2rem" }}
                                    ></span>
                                </div>
                                <div>
                                    <h4 className="display-7" style={{ color: "#fafafa" }}>
                                        <strong>Targeted Audience</strong>
                                    </h4>
                                    <p className="align-left" style={{ color: "#ffffff" }}>
                                        Specify your tracks genre, mood, description &amp; target
                                        audience. We try our best to meet your selection.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div
                                    className="icon-box"
                                    style={{
                                        background: "#ffffff",
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
                                        className="mbr-iconfont fa-music fa"
                                        style={{ fontSize: "2rem" }}
                                    ></span>
                                </div>
                                <div>
                                    <h4 className="display-7" style={{ color: "#fafafa" }}>
                                        <strong>Multi-Genre Marketing</strong>
                                    </h4>
                                    <p className="align-left" style={{ color: "#ffffff" }}>
                                        Be it pop, rock, hip-hop, rap, festive or traditional, we
                                        can take care of it all.&nbsp;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="sand1"
                style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
            >
                <div className="container px-md-5 px-5">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="card-wrapper mb-4 bg-white">
                                <div className="align-center">
                                    <h4
                                        className={`mb-4 display-4 ${montserrat.className}`}
                                    >
                                        Steps
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-12 col-md-6 col-lg-3 p-lg-0">
                            <div className="item first   p-4  py-lg-4 pe-lg-4 ps-lg-3">
                                <div
                                    className="icon-wrap w-100"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        className="icon-box rounded-circle d-inline-block text-center"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#8fa9e4",
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
                                            1
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-3 align-center custom-item">
                                    <h4 className="icon-title display-7 fs-5 custom_Height ">
                                        <strong>Submit Song</strong>
                                    </h4>
                                    <p className=" text-start ">
                                        Once you've registered on our website, purchase a promote
                                        credit according to the desired streaming platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="item p-4">
                                <div
                                    className="icon-wrap w-100"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        className="icon-box rounded-circle d-inline-block text-center"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#8fa9e4",
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
                                            2
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-3 align-center">
                                    <h4 className="icon-title display-7 fs-5 custom_Height">
                                        <strong>Select Target Audience</strong>
                                    </h4>
                                    <p className=" text-start ">
                                        Fill out our form with your tracks genre, mood, description,
                                        social handles &amp; target audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="item p-4 ">
                                <div
                                    className="icon-wrap w-100"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        className="icon-box rounded-circle d-inline-block text-center"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#8fa9e4",
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
                                            3
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-3 align-center">
                                    <h4 className="icon-title display-7 fs-5 custom_Height ">
                                        <strong>Promote</strong>
                                    </h4>
                                    <p className="text-start ">
                                        Once youve filled in everything, we will plan out and run
                                        your campaign according to the selected package.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="item p-4">
                                <div
                                    className="icon-wrap w-100"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        className="icon-box rounded-circle d-inline-block text-center"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#8fa9e4",
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
                                <div className="mt-3 align-center">
                                    <h4 className="icon-title display-7 fs-5 custom_Height">
                                        <strong>Get Paid</strong>
                                    </h4>
                                    <p className="text-start ">
                                        Once your promote is live, youll start earning for streams
                                        &amp; downloads, if your package is monetisable.
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-12 col-md-6 col-lg-3 p-lg-0">
                            <div className="item first p-4  py-lg-4 pe-lg-4 ps-lg-3">
                                <div
                                    className="icon-wrap w-100"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        className="icon-box  rounded-circle d-inline-block text-center"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#8fa9e4",
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
                                            1
                                        </span>
                                    </div>
                                </div>

                                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                                    <h4 className="icon-title display-7 fs-5 custom_Height">
                                        <strong>Submit Song</strong>
                                    </h4>
                                    <p className="fs-6 pt-lg-2 pt-xxl-0">
                                        Once you&apos;ve registered on our website, purchase a promote
                                        credit according to the desired streaming platform.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- <span mbr-icon className="  mobi-mbri-devices mobi-mbri"></span> --> */}
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
                            <div className="custom_arrow_blue p-4 py-lg-4 pe-lg-4 ps-lg-0">
                                <div
                                    className="icon-wrap w-100"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        className="icon-box rounded-circle d-inline-block text-center"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#8fa9e4",
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
                                            2
                                        </span>
                                    </div>
                                </div>
                                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                                    <h4 className="icon-title display-7 fs-5 custom_Height">
                                        <strong>Select Target Audience</strong>
                                    </h4>
                                    <p className="fs-6 pt-lg-2 pt-xxl-0">
                                        Fill out our form with your tracks genre, mood, description,
                                        social handles &amp; target audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
                            <div className="custom_arrow_blue p-4 py-lg-4 pe-lg-4 ps-lg-0">
                                <div
                                    className="icon-wrap w-100"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        className="icon-box rounded-circle d-inline-block text-center"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#8fa9e4",
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
                                            3
                                        </span>
                                    </div>
                                </div>
                                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                                    <h4 className="icon-title display-7 fs-5 custom_Height">
                                        <strong>Promote</strong>
                                    </h4>
                                    <p className="fs-6 pt-lg-2 pt-xxl-0">
                                        Once you&apos;ve filled in everything, we will plan out and run
                                        your campaign according to the selected package.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
                            <div className="custom_arrow_blue p-4 py-lg-4 pe-lg-4 ps-lg-0">
                                <div
                                    className="icon-wrap w-100"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        className="icon-box rounded-circle d-inline-block text-center"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: "#8fa9e4",
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
                                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                                    <h4 className="icon-title display-7 fs-5 custom_Height">
                                        <strong>Get Paid</strong>
                                    </h4>
                                    <p className="fs-6 pt-lg-2 pt-xxl-0">
                                        Once your promote is live, youll start earning for streams
                                        &amp; downloads, if your package is monetisable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="sand2"
                style={{
                    paddingTop: "4rem",
                    paddingBottom: "4rem",
                    background: "#131313",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3
                                className={`align-center display-4 mb-4 ${montserrat.className} text-white`}
                                style={{
                                    fontWeight: "400",
                                }}
                            >
                                What you get
                            </h3>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 p-3">
                            <div className="card-wrapper">
                                <div className="align-center">
                                    <span
                                        className="mbr-iconfont imind-people-oncloud d-block"
                                        style={{
                                            marginBottom: "2rem",
                                            fontSize: "5rem",
                                            color: "#8fa9e4",
                                        }}
                                    ></span>
                                    <p
                                        className="align-center display-7"
                                        style={{ color: "white" }}
                                    >
                                        <strong>Organic Reach</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-wrapper">
                                <div className="align-center">
                                    <span
                                        className="mbr-iconfont imind-new-mail d-block"
                                        style={{
                                            marginBottom: "2rem",
                                            fontSize: "5rem",
                                            color: "#8fa9e4",
                                        }}
                                    ></span>
                                    <p
                                        className="align-center display-7"
                                        style={{ color: "white" }}
                                    >
                                        <strong>Email Blast</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-wrapper">
                                <div className="align-center">
                                    <span
                                        className="mbr-iconfont fa-desktop fa d-block"
                                        style={{
                                            marginBottom: "2rem",
                                            fontSize: "5rem",
                                            color: "#8fa9e4",
                                        }}
                                    ></span>
                                    <p
                                        className="align-center display-7"
                                        style={{ color: "white" }}
                                    >
                                        <strong>Google SEO Keywords</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-wrapper">
                                <div className="align-center">
                                    <span
                                        className="mbr-iconfont fa-users fa d-block"
                                        style={{
                                            marginBottom: "2rem",
                                            fontSize: "5rem",
                                            color: "#8fa9e4",
                                        }}
                                    ></span>
                                    <p
                                        className="align-center display-7"
                                        style={{ color: "white" }}
                                    >
                                        <strong>Targeted Audience</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-wrapper">
                                <div className="align-center">
                                    <span
                                        className="mbr-iconfont icon54-v2-star-shield-1 d-block"
                                        style={{
                                            marginBottom: "2rem",
                                            fontSize: "5rem",
                                            color: "#8fa9e4",
                                        }}
                                    >  <FaShield /></span>
                                    <p
                                        className="align-center display-7"
                                        style={{ color: "white" }}
                                    >
                                        <strong>Safe Streams</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-wrapper">
                                <div className="card-box align-center">
                                    <span
                                        className="mbr-iconfont fa-music fa d-block"
                                        style={{
                                            marginBottom: "2rem",
                                            fontSize: "5rem",
                                            color: "#8fa9e4",
                                        }}
                                    ></span>
                                    <p
                                        className="align-center display-7"
                                        style={{ color: "white" }}
                                    >
                                        <strong>Multi-Genre</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="sand3 bg-light"
                style={{
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center px-3">
                        <div className="col-12 col-md-6 align-center col-lg-4 bg-white border m-1 rounded" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                            <div className="plan">
                                <div
                                    style={{
                                        paddingTop: "2rem",
                                        paddingLeft: "1rem",
                                        paddingRight: "1rem",
                                    }}
                                >
                                    <h6
                                        className="mb-3 display-7 align-right"
                                        style={{ color: "black" }}
                                    >
                                        <strong>YouTube Promotion</strong>
                                    </h6>
                                    <div>
                                        <p
                                            className="m-0 align-right"
                                            style={{
                                                color: "#8fa9e4",
                                                fontFamily: "Montserrat, sans-serif",
                                                fontSize: "3rem",
                                                lineHeight: "1.1",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <strong>₹3,999</strong>
                                        </p>
                                        <p
                                            className="mb-3 display-7 align-right"
                                            style={{ color: "black" }}
                                        >
                                            <strong>Onwards</strong>
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <div className="pb-3">
                                    <div className="mb-4">
                                        <ul className="list-group list-group-flush display-7">
                                            <li
                                                className="list-group-item position-relative justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                <span>1 Video</span>
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                <span>Monetisation-Safe Streams</span>
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                <span>Organic Viewers</span>
                                                <br />
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                Music / Lyric Videos only
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                Indian/Global Audience
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                Channel &amp; Ad Driven Streams
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-center">
                                        <a
                                            href="https://forms.gle/YcSEcf15Quk8rUQ98"
                                            className="btn bg-black text-white fw-bold "
                                            style={{ width: "90%" }}
                                            target="_blank"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 align-center col-lg-4 bg-white border m-1 rounded  " style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                            <div className="plan">
                                <div
                                    style={{
                                        paddingTop: "2rem",
                                        paddingLeft: "1rem",
                                        paddingRight: "1rem",
                                    }}
                                >
                                    <h6
                                        className="mb-3 display-7 align-right"
                                        style={{ color: "black" }}
                                    >
                                        <strong>Spotify Promotion</strong>
                                    </h6>
                                    <div>
                                        <p
                                            className="m-0 align-right"
                                            style={{
                                                color: "#8fa9e4",
                                                fontFamily: "Montserrat, sans-serif",
                                                fontSize: "3rem",
                                                lineHeight: "1.1",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <strong>₹2,499</strong>
                                            <br />
                                        </p>
                                        <p
                                            className="mb-3 display-7 align-right"
                                            style={{ color: "black" }}
                                        >
                                            <strong>Onwards</strong>
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <div className="pb-3">
                                    <div className="  mb-4">
                                        <ul className="list-group list-group-flush display-7">
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                1 Single
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                <span>Royalty-Safe Streams</span>
                                                <br />
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                Organic Streams
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                Originals or Cover Tracks
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                Global Audience
                                            </li>
                                            <li
                                                className="list-group-item justify-content-center border-0"
                                                style={{
                                                    fontSize: "16px",
                                                    backgroundColor: "transparent",
                                                    paddingTop: "0.5rem",
                                                    paddingBottom: "0.5rem",
                                                    paddingLeft: "3.25rem",
                                                    paddingRight: "3.25rem",
                                                }}
                                            >
                                                Playlist &amp; Ad Driven Streams
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-center ">
                                        <a
                                            href="https://forms.gle/Rczyc1414fu6SrKm7"
                                            className="btn bg-black fw-bold text-white"
                                            style={{ width: "90%" }}
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
