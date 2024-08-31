import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import '../../assets/icon54/style.css'
import '../../assets/icon54-v2/style.css'
import '../../assets/icon54-v3/style.css'
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700']
});

export const metadata = {
    title: "Melo | Release Covers on Popular International Platforms",
    description: "Melo takes care of the legalities of obtaining a cover license and paying dues to the original artist while releasing their covers.",
    openGraph: {
        images: ['https://melo.works/assets/images/favicon.png']
    },
}

export default function ReleaseCovers() {
    return (
        <>

            <section className="py-md-5 py-3 blackBg" style={{ textAlign: 'left !important' }}>

                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6 py-4">
                            <div className="align-left">
                                <h4 className={`mb-4 text-white display-4 ${montserrat.className}`} style={{ textAlign: 'left' }}>Release Covers, Really?</h4>
                                <p className="mb-4 display-7 text-white">
                                    Melo can release covers for you while taking care of the legalities of obtaining a cover
                                    license and paying dues to the original artist.</p>
                                <Link className="ms-0 btn greenBg fw-bold"
                                    href="#release-cov">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex align-items-center pb-4">
                                <div className="d-flex justify-content-center align-items-center rounded-circle" style={{
                                    width: "60px",
                                    height: "60px",
                                    backgroundColor: "#b9de22",
                                    marginRight: "1rem",
                                    borderRadius: "50%",
                                }}>
                                    <span className=" icon54-v1-cash-pay text-dark"
                                        style={{
                                            fontSize: "2rem",
                                            marginLeft: "1rem",
                                            marginRight: "1rem",
                                        }}></span>
                                </div>
                                <div className="text-box" style={{ color: 'white' }}>
                                    <h4 className="icon-title display-7 " style={{ color: 'white' }} ><strong>No Annual Fees / No Takedown Fees</strong></h4>
                                    <p className="text-white" >Pay once and we ensure its in stores forever. We wont charge you extra to keep your music online or to send you royalty.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pb-4">
                                <div className="d-flex justify-content-center align-items-center rounded-circle" style={{
                                    width: "60px",
                                    height: "60px",
                                    backgroundColor: "#b9de22",
                                    marginRight: "1rem",
                                    borderRadius: "50%",
                                }}>
                                    <span className="icon54-v2-global" style={{
                                        fontSize: "2rem",
                                        marginLeft: "1rem",
                                        marginRight: "1rem",
                                    }}></span>
                                </div>
                                <div className="text-box">
                                    <h4 className="icon-title  display-7"><strong style={{ color: 'white' }}>Popular International
                                        Platforms</strong></h4>
                                    <p className="text-white">Spotify, Apple Music, YouTube, Amazon Music, Deezer, Pandora, TikTok, Yandex Music, Xiami Music, Instagram, Tencent Music Entertainment & United Media Agency.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pb-4">
                                <div className="d-flex justify-content-center align-items-center rounded-circle" style={{
                                    width: "60px",
                                    height: "60px",
                                    backgroundColor: "#b9de22",
                                    marginRight: "1rem",
                                    borderRadius: "50%",
                                }}>
                                    <span className="imind-cloud-secure" style={{
                                        fontSize: "2rem",
                                        marginLeft: "1rem",
                                        marginRight: "1rem",
                                    }}></span>
                                </div>
                                <div className="text-box">
                                    <h4 className="icon-title display-7"><strong style={{ color: 'white' }}>ISRC &amp; UPC Codes
                                        Included</strong></h4>
                                    <p className="icon-text " style={{ color: 'white' }}>Free ISRC & UPC codes to identify your sound recordings and music videos for online & retail platforms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5" >
                <div className="container py-6">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="card-wrapper mb-4 bg-white">
                                <div className="card-box align-center">
                                    <h4 className={`display-4 mb-md-4 mb-2 ${montserrat.className}`}>
                                        Steps
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-lg-0 ">
                            <div className=" first py-3 px-4 py-lg-4 pe-lg-4 ps-lg-3">
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
                                        Fill in your track information & artist details to credit the correct people for their work, and upload high quality assets for OTTs.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- <span mbr-icon className="  mobi-mbri-devices mobi-mbri"></span> --> */}
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
                                        Once you&apos;ve registered on our website, purchase a single / EP / album credit according to the number of tracks.
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
                                        <strong>Obtain Cover License</strong>
                                    </h4>
                                    <p className="fs-6 pt-lg-2 pt-xxl-0">
                                        Based on the information provided for the cover song, we contact the original artist & their record label to legally release your track.
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
                                        Once your release is live, you&apos;ll start earning for every stream & download. We automatically deduct the royalties and split it with the original artist.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blackBg py-5" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h3 className={`text-white align-center mb-4 pb-lg-4 display-4 ${montserrat.className}`}>What you get
                            </h3>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2 p-3">
                            <div className="card-box align-center">
                                <span className="mbr-iconfont icon54-v1-cash-pay" style={{
                                    display: 'block',
                                    fontSize: '5rem',
                                    color: '#b9de22',
                                    marginBottom: '2rem'
                                }}></span>
                                <h6 className="fw-bold align-center display-7 line text-white">
                                    60% Royalty</h6>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-box align-center">
                                <span className="mbr-iconfont imind-cloud-secure" style={{
                                    display: 'block',
                                    fontSize: '5rem',
                                    color: '#b9de22',
                                    marginBottom: '2rem'
                                }}></span>
                                <h6 className="fw-bold align-center display-7 line text-white">
                                    ISRC &amp; UPC Codes</h6>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-box align-center">
                                <span className="mbr-iconfont icon54-v2-global" style={{
                                    display: 'block',
                                    fontSize: '5rem',
                                    color: '#b9de22',
                                    marginBottom: '2rem'
                                }}></span>
                                <h6 className="fw-bold align-center display-7 line text-white">Global
                                    Reach</h6>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-box align-center">
                                <span className="mbr-iconfont imind-support" style={{
                                    display: 'block',
                                    fontSize: '5rem',
                                    color: '#b9de22',
                                    marginBottom: '2rem'
                                }}></span>
                                <h6 className="fw-bold align-center display-7 line text-white">Local Support</h6>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-box align-center">
                                <span className="mbr-iconfont fa-star-o fa" style={{
                                    display: 'block',
                                    fontSize: '5rem',
                                    color: '#b9de22',
                                    marginBottom: '2rem'
                                }}></span>
                                <h6 className="fw-bold align-center display-7 line text-white">
                                    Playlist Submissions</h6>
                            </div>
                        </div>
                        <div className="p-3 col-12 col-md-4 col-lg-2">
                            <div className="card-box align-center">
                                {/* <!-- <i className="fa fa-wpforms" aria-hidden="true"></i> --> */}
                                <span className="mbr-iconfont fa-wpforms fa" style={{
                                    display: 'block',
                                    fontSize: '5rem',
                                    color: '#b9de22',
                                    marginBottom: '2rem'
                                }}></span>
                                <h6 className="fw-bold align-center display-7 line text-white">
                                    Cover Licenses</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <hr style={{ size: '2', width: '100%', color: "white" }} />
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="card-box align-center">
                                <h6 style={{ fontSize: '.9rem' }} className="py-2 text-white fw-bold align-center">FREE! One Page
                                    Share Link <br /> All Rights Reserved with Artist</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card-box align-center">
                                <h6 style={{ fontSize: '.9rem' }} className="py-2 text-white fw-bold align-center">
                                    Royalties are split with Original Artist<br />Playlist Submissions</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="card-box align-center">
                                <h6 style={{ fontSize: '.9rem' }} className="py-2 text-white fw-bold align-center">
                                    International Platforms <br />No monthly or yearly subscriptions</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5"  >
                <div className="container" id="release-cov">
                    <div className="row justify-content-center mx-1 py-6" >

                        <div className="card p-3 col-md-4 col-lg-4 col-sm-12 bg-white border border-secondary-subtle rounded" >
                            <div className="plan">
                                <div className="plan-header">
                                    <h6 className="fw-bold mb-3 display-7"

                                        style={{ textAlign: 'right' }}>
                                        Single</h6>
                                    <div className="">
                                        <p className="price fw-bold m-0" style={{ fontSize: '3rem' }}>₹1999</p>
                                        <p className="fw-bold mb-3 display-7" style={{ textAlign: 'right' }}>One time<br /></p>
                                    </div>
                                </div>
                                <div className="plan-body" >
                                    <div className="plan-list mb-4">
                                        <ul className="list-group list-group-flush display-7">
                                            <li className="list-group-item"><span
                                                sx={{ backgroundColor: 'transparent', fontSize: '1.2rem' }}>1 Composition</span></li>

                                        </ul>
                                    </div>
                                    <Link href=" https://forms.gle/XW4kqHoLG5EWEs7e6"
                                        className="p-3 text-white blackBg d-block text-center text-decoration-none rounded-2 fw-bold" target="_blank" >Release Cover</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}
