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
    title: "Melo | Label Subscriptions",
    description: "Melo knows that labels want a customized solution to let their artists distribute music. Get a subscription and distribute unlimited tracks through your label account.",
    openGraph: {
        images: ['https://melo.works/assets/images/favicon.png']
    },
}


export default function Label() {

    const labelPlans = [
        {
            planType: "Pay As You Go",
            price: "5,999",
            planDuration: "One Time",
            forPlusReleases: false,
            form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true"
        },
        {
            planType: "Company Registration",
            price: "2,499",
            planDuration: "One Time",
            forPlusReleases: false,
            form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true"
        },
        {
            planType: "Unlimited Label Subscription",
            price: "20,000",
            planDuration: "Yearly",
            forPlusReleases: false,
            form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true"
        },
        {
            planType: "Free Label Subscription",
            price: "Free",
            planDuration: "Yearly",
            forPlusReleases: false,
            form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true"
        },
        {
            planType: "Ultimate Label 1",
            price: "50+",
            planDuration: "Yearly Releases",
            forPlusReleases: true,
            form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true"
        },
        {
            planType: "Ultimate Label 2",
            price: "100+",
            planDuration: "Yearly Releases",
            forPlusReleases: true,
            form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true"
        },
    ]

    return (
        <>
            <section
                className="py-md-5 py-3 blackBg"
                style={{ textAlign: "left !important" }}
            >
                <div className="container py-4">
                    <div className="row justify-content-center  ">
                        <div className="col-12 col-lg-6 py-4  ">
                            <div className="align-left">
                                <h4
                                    className={`mb-4 text-white display-4 ${montserrat.className}`}
                                    style={{ textAlign: "left" }}
                                >
                                    Label Subscription for Bulk Releases
                                </h4>
                                <p className="mb-4 display-7 text-white">
                                    We understand that labels would want a customised solution to enable their artists to distribute music.
                                </p>
                                <Link className="ms-0 btn greenBg fw-bold" href="#addsomemargin">
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
                                        className="icon54-v1-cash-pay text-dark"
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
                                        <strong>Unlimited Releases</strong>
                                    </h4>
                                    <p className="text-white">
                                        Pay a yearly fee and distribute as many singles, EPs & albums through your label account.
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
                                        Spotify, Apple Music, YouTube, JioSaavn, Wynk Music, Gaana, Amazon Music, Deezer & more.
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
                className="py-5"
            >
                <div className="container">
                    <div className="row justify-content-center justify-content-center pb-lg-5">
                        <div className="col-12">
                            <div className="card-wrapper mb-4 bg-white">
                                <div className="text-white align-center">
                                    <h4 className={`mb-md-4 mb-2 display-4 text-black ${montserrat.className}`} style={{}}>
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
                            <h3 className={`text-white align-center pb-lg-4 mb-4 display-4 ${montserrat.className}`}>
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
                                    Yearly Subscription <br /> Unlimited Releases
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

            <section className="bg-light" id="label_sub">
                <div className="container py-5" id="addsomemargin">
                    <div className="row" >
                        {
                            labelPlans?.map((item, index) => {
                                return (
                                    <div
                                        key={index} className="col-12 col-md-6  mx-md-auto mx-0 mx-lg-0 col-lg-4 bg-black text-center text-white py-4 bg-transparent">
                                        <div className="p-4 bg-white border border-secondary-subtle rounded">
                                            <div className="">
                                                <div className=" text-right">
                                                    <h6 className="mb-3 display-7 align-right text-dark">
                                                        <strong>{item.planType}</strong>
                                                    </h6>
                                                    <div className="">
                                                        <p className="price m-0 align-right" style={{ color: "#B9DE22", fontFamily: 'montserrat, sans-serif', fontSize: '3rem', lineHeight: '1.1' }}>
                                                            {
                                                                item.forPlusReleases === true ? (
                                                                    <span className={`mb-3 display-7 text-dark fs-2`}><strong>For</strong></span>
                                                                ) : null
                                                            }
                                                            <strong style={{ fontWeight: "700" }}> {["5,999", "2,499", "20,000"].includes(item.price) ? "₹" : null}{item.price}</strong>
                                                        </p>
                                                        <p className="mb-3 display-7 align-right text-dark"><strong>{item.planDuration}</strong><br />
                                                        </p>
                                                    </div>

                                                </div>
                                                <div className="w-100">
                                                    <p className="text-start text-dark">For more information, visit <Link className="text-decoration-none" href="/pricing" target="_blank" style={{ color: "#B9DE22" }}>Pricing</Link></p>
                                                    <div className="text-center">
                                                        <Link className="btn blackBg text-white mx-auto w-100" style={{ fontSize: '1.1rem' }}
                                                            href={item.form}
                                                            target="_blank"><b>Register Label</b></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    );
}
