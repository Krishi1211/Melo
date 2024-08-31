import Image from "next/image";
import "./styles.css";
import randomImage2 from "../../assets/Blog/randomimage2.jpeg";
import randomImage from "../../assets/Blog/randomimg.jpeg";
import { Montserrat } from "@next/font/google";
import { Roboto } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Melo | Affordable Music Distribution Pricing",
  description:
    "Discover competitive pricing for music distribution. Unlimited releases, no hidden fees, and transparent royalties. Choose Melo for budget-friendly music distribution solutions..",
  openGraph: {
    images: ["https://melo.works/assets/images/favicon.png"],
  },
};

export default function Pricing() {
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
    {
      releaseType: "Cover",
      price: 1999,
      perRelease: "per release",
      noOfTrack: "1 Tracks",
      releaseButton: "Release Cover",
      form: "https://docs.google.com/forms/d/1mdL5WRP0FzjSOUGaVg6NDaGx81soZHYJPLCUunIu1SA/edit?usp=drive_web",
    },
  ];

  const labelPlans = [
    {
      planType: "Pay As You Go",
      price: "5,999",
      planDuration: "One Time",
      forPlusReleases: false,
      form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true",
    },
    {
      planType: "Company Registration",
      price: "2,499",
      planDuration: "One Time",
      forPlusReleases: false,
      form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true",
    },
    {
      planType: "Unlimited Label Subscription",
      price: "20,000",
      planDuration: "Yearly",
      forPlusReleases: false,
      form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true",
    },
    {
      planType: "Free Label Subscription",
      price: "Free",
      planDuration: "Yearly",
      forPlusReleases: false,
      form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true",
    },
    {
      planType: "Ultimate Label 1",
      price: "50+",
      planDuration: "Yearly Releases",
      forPlusReleases: true,
      form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true",
    },
    {
      planType: "Ultimate Label 2",
      price: "100+",
      planDuration: "Yearly Releases",
      forPlusReleases: true,
      form: "https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/viewform?edit_requested=true",
    },
  ];

  const youtubePromotions = [
    {
      promotionType: "YouTube P2P Promotion",
      plans: [
        {
          views: "10k Views",
          price: 4000,
        },
        {
          views: "25k Views",
          price: 10000,
        },
        {
          views: "50k Views",
          price: 20000,
        },
        {
          views: "100k Views",
          price: 35000,
        },
        {
          views: "250k Views",
          price: 87000,
        },
        {
          views: "500k Views",
          price: 175500,
        },
        {
          views: "1M Views",
          price: 300000,
        },
      ],
    },
    {
      promotionType: "YouTube Ad Promotion",
      plans: [
        {
          views: "10k Views",
          price: 4000,
        },
        {
          views: "20k Views",
          price: 8000,
        },
        {
          views: "30k Views",
          price: 11000,
        },
        {
          views: "40k Views",
          price: 13000,
        },
        {
          views: "50k Views",
          price: 15000,
        },
        {
          views: "100k Views",
          price: 25000,
        },
        {
          views: "200k Views",
          price: 45000,
        },
        {
          views: "500k Views",
          price: 110000,
        },
        {
          views: "1M Views",
          price: 195000,
        },
      ],
    },
  ];

  const spotifyPromotions = [
    // {
    //   promotionType: "Spotify SEO Marketing Services",
    //   specification: [
    //     {
    //       spec: "Designed to boost music visibility and streaming numbers on Spotify.",
    //     },
    //     {
    //       spec: "Offers Royalty Eligible Streams, ensuring earnings for the artist.",
    //     },
    //     {
    //       spec: "100% organic streams from real listeners.",
    //     },
    //     {
    //       spec: "Quality-based stream speed for natural growth.",
    //     },
    //     {
    //       spec: "Potential to trigger Spotify's algorithms for enhanced reach.",
    //     },
    //     {
    //       spec: "Quality-based stream speed for natural growth.",
    //     },
    //   ],
    //   price: [
    //     {
    //       streams: "5k Streams",
    //       pricing: "2,500",
    //     },
    //     {
    //       streams: "10k Streams",
    //       pricing: "5,000",
    //     },
    //     {
    //       streams: "25k Streams",
    //       pricing: "11,000",
    //     },
    //     {
    //       streams: "50k Streams",
    //       pricing: "18,000",
    //     },
    //   ],
    // },
    {
      promotionType: "Spotify User Generated Playlists",
      specification: [
        {
          spec: "Places music on popular user-generated playlists for increased exposure.",
        },
        {
          spec: "Royalty Eligible Streams contributing to the artist's income.",
        },
        {
          spec: "Curator approval required, ensuring quality and fit.",
        },
        {
          spec: "Playlist link provided for verification and promotion.",
        },
        {
          spec: "Potential for extra organic streams beyond the purchased amount.",
        },
      ],
      price: [
        {
          streams: "50k Streams",
          pricing: "20,000",
        },
        {
          streams: "100k Streams",
          pricing: "40,000",
        },
      ],
    },
    // {
    //   promotionType: "Spotify Exclusive Ads",
    //   specification: [
    //     {
    //       spec: "Direct promotion through Meta/Google advertising platform.",
    //     },
    //     {
    //       spec: "Generates royalty-eligible streams, though rates may be lower.",
    //     },
    //     {
    //       spec: "100% ad streams for high visibility.",
    //     },
    //     {
    //       spec: "Quality-based speed of streaming growth.",
    //     },
    //   ],
    //   price: [
    //     {
    //       streams: "5k Streams",
    //       pricing: "2,500",
    //     },
    //     {
    //       streams: "10k Streams",
    //       pricing: "5,000",
    //     },
    //     {
    //       streams: "25k Streams",
    //       pricing: "11,000",
    //     },
    //     {
    //       streams: "50k Streams",
    //       pricing: "18,000",
    //     },
    //   ],
    // },
  ];

  return (
    <>
      <div>
        <section
          className="w-100 container-fluid bg-black"
          style={{ padding: "7.5rem 0 5.1rem 0" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className={`fw-bold text-white title ${roboto.className}`}>
                  Melo <span className="fw-bold">Pricing</span>
                </h1>
                <br />
                <p className="text-md-center text-justify" style={{ color: "#ACACAC", fontSize: "1.3rem" }}>
                  Extend the reach of your music to over 150 digital stores
                  spanning across 200 countries and territories worldwide. Keep
                  tabs on daily sales trends for major platforms such as
                  JioSaavn, Amazon, iTunes, Apple Music, and Spotify. With Melo,
                  you get every cent you deserve from both your sales and
                  streams.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-100 container-fluid"
          style={{ backgroundColor: "#202020", padding: "2.8rem 0 2.8rem 0" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center py-4">
                <h1 className={`fw-bold text-white title ${roboto.className}`}>
                  Forever Release
                </h1>
              </div>

              {release?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-lg-3 col-md-6 bg-black text-center text-white py-4 bg-transparent"
                  >
                    <div className="p-4 bg-black">
                      <div className="">
                        <div className=" text-right">
                          <h6 className={`mb-3 display-7 fs-5 align-right`}>
                            <strong>{item.releaseType}</strong>
                          </h6>
                          <div className="">
                            <p
                              className={`price m-0 align-right ${montserrat.className}`}
                              style={{
                                color: "#B9DE22",
                                fontWeight: "50px",
                                fontSize: "3rem",
                                lineHeight: "1.1",
                              }}
                            >
                              <strong style={{ fontWeight: "700" }}>
                                ₹{item.price}
                              </strong>
                            </p>
                            <p className="mb-3 display-7 align-right">
                              <strong>{item.perRelease}</strong>
                              <br />
                            </p>
                          </div>
                        </div>
                        <div className="text-left text-white d-flex justify-content-start pt-1 pb-3">
                          <p style={{ fontSize: "1.2rem" }}>{item.noOfTrack}</p>
                        </div>
                        <div className="w-100">
                          <div className="text-center">
                            <a
                              className="btn greenBg mx-auto w-100"
                              style={{ fontSize: "1.1rem" }}
                              href={item.form}
                              target="_blank"
                            >
                              <b>{item.releaseButton}</b>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container" id="addsomemargin">
            <div className="row">
              <div className="col-12 text-center py-4">
                <h1 className={`fw-bold text-white title ${roboto.className}`}>
                  Label Plans
                </h1>
              </div>

              {labelPlans?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md-6  mx-md-auto mx-0 mx-lg-0 col-lg-4 bg-black text-center text-white py-4 bg-transparent"
                  >
                    <div className="p-4 bg-black">
                      <div className="">
                        <div className=" text-right">
                          <h6 className="mb-3 display-7 align-right">
                            <strong>{item.planType}</strong>
                          </h6>
                          <div className="">
                            <p
                              className="price m-0 align-right"
                              style={{
                                color: "#B9DE22",
                                fontFamily: "montserrat, sans-serif",
                                fontSize: "3rem",
                                lineHeight: "1.1",
                              }}
                            >
                              {item.forPlusReleases === true ? (
                                <span
                                  className={`mb-3 display-7 text-white fs-2`}
                                >
                                  <strong>For</strong>
                                </span>
                              ) : null}
                              <strong style={{ fontWeight: "700" }}>
                                {" "}
                                {["5,999", "2,499", "20,000"].includes(
                                  item.price
                                )
                                  ? "₹"
                                  : null}
                                {item.price}
                              </strong>
                            </p>
                            <p className="mb-3 display-7 align-right">
                              <strong>{item.planDuration}</strong>
                              <br />
                            </p>
                          </div>
                        </div>
                        <div className="w-100">
                          <div className="text-center">
                            <a
                              className="btn greenBg mx-auto w-100"
                              style={{ fontSize: "1.1rem" }}
                              href={item.form}
                              target="_blank"
                            >
                              <b>Register Label</b>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="w-100 container-fluid"
          style={{ backgroundColor: "#202020", padding: "0 0 2rem 0" }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive" id="dtHorizontalExample">
                  <table
                    className="table table-borderless"
                    style={{ minWidth: "49rem", overflowX: "auto" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" className="bg-transparent"></th>
                        <th
                          scope="col"
                          style={{
                            borderRadius: "25px 0 0 0",
                            backgroundColor: "rgb(9, 9, 9)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <div>
                            <div className="">
                              <div className=" text-center">
                                <h6 className="mb-3 display-7 text-white">
                                  <strong>Pay As You Go</strong>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </th>

                        <th
                          scope="col"
                          style={{
                            backgroundColor: "rgb(17, 17, 17)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                          className=""
                        >
                          <div>
                            <div className="">
                              <div className=" text-center">
                                <h6 className="mb-3 display-7 text-white">
                                  <strong>Unlimited Label </strong>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th
                          scope="col"
                          style={{
                            backgroundColor: "rgb(22, 22, 22)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <div>
                            <div className="">
                              <div className=" text-center">
                                <h6 className="mb-3 display-7 text-white">
                                  <strong>Free Label </strong>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th
                          scope="col"
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <div>
                            <div className="">
                              <div className=" text-center">
                                <h6 className="mb-3 display-7 text-white">
                                  <strong>Ultimate Label 1</strong>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th
                          scope="col"
                          style={{
                            borderRadius: "0 25px 0 0",
                            backgroundColor: "rgb(29, 29, 29)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <div>
                            <div className="">
                              <div className=" text-center">
                                <h6 className="mb-3 display-7 text-white">
                                  <strong>Ultimate Label 2</strong>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="text-white align-left bg-transparent"
                          style={{ width: "260px" }}
                        >
                          Unlimited Releases
                        </th>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(9, 9, 9)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        ></td>

                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(17, 17, 17)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#ffee00" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(22, 22, 22)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#008121" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#004cff" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(29, 29, 29)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#760188" }}
                            ></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="text-white align-left bg-transparent"
                          style={{ width: "260px" }}
                        >
                          Royalty Split
                        </th>
                        <td
                          className="text-center text-white"
                          style={{
                            backgroundColor: "rgb(9, 9, 9)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          85%
                        </td>

                        <td
                          className="text-center text-white "
                          style={{
                            backgroundColor: "rgb(17, 17, 17)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          85%
                        </td>
                        <td
                          className="text-center text-white "
                          style={{
                            backgroundColor: "rgb(22, 22, 22)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          70%
                        </td>
                        <td
                          className="text-center text-white "
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          80%
                        </td>
                        <td
                          className="text-center text-white "
                          style={{
                            backgroundColor: "rgb(29, 29, 29)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          85%
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="text-white align-left bg-transparent"
                          style={{ width: "260px" }}
                        >
                          Pay Per Releases
                        </th>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(9, 9, 9)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#e50000" }}
                            ></i>
                          </span>
                        </td>

                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(17, 17, 17)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        ></td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(22, 22, 22)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        ></td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        ></td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(29, 29, 29)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="text-white align-left bg-transparent"
                        >
                          Unlimited Artists
                        </th>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(9, 9, 9)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#e50000" }}
                            ></i>
                          </span>
                        </td>

                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(17, 17, 17)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#ffee00" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(22, 22, 22)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#008121" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#004cff" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(29, 29, 29)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#760188" }}
                            ></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="text-white align-left bg-transparent"
                        >
                          Your own Label{" "}
                        </th>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(9, 9, 9)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#e50000" }}
                            ></i>
                          </span>
                        </td>

                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(17, 17, 17)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#ffee00" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(22, 22, 22)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#008121" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#004cff" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(29, 29, 29)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#760188" }}
                            ></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="text-white align-left bg-transparent"
                        >
                          Your own Label 2X
                        </th>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(9, 9, 9)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        ></td>

                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(17, 17, 17)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#ffee00" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(22, 22, 22)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        ></td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        ></td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(29, 29, 29)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="text-white align-left bg-transparent"
                        >
                          Release Covers at 50% Off
                        </th>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(9, 9, 9)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        ></td>

                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(17, 17, 17)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#ffee00" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(22, 22, 22)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#008121" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#004cff" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(29, 29, 29)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#760188" }}
                            ></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="text-white align-left bg-transparent"
                        >
                          Release Covers at Full Price
                        </th>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(9, 9, 9)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#e50000" }}
                            ></i>
                          </span>
                        </td>

                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(17, 17, 17)",
                            borderBottom: "0.5px solid #aaa7a7",
                          }}
                        ></td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(22, 22, 22)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        ></td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(26, 26, 26)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        ></td>
                        <td
                          className="text-center"
                          style={{
                            backgroundColor: "rgb(29, 29, 29)",
                            borderBottom: "0.5px solid rgb(220, 220, 220)",
                          }}
                        ></td>
                      </tr>

                      <tr>
                        <th
                          scope="row"
                          className="text-white align-left bg-transparent"
                        >
                          All Rights Reserved with Label
                        </th>
                        <td
                          className="text-center"
                          style={{
                            borderRadius: "0 0 0 25px",
                            backgroundColor: "rgb(9, 9, 9)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#e50000" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{ backgroundColor: "rgb(17, 17, 17)" }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#ffee00" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{ backgroundColor: "rgb(22, 22, 22)" }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#008121" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center "
                          style={{ backgroundColor: "rgb(26, 26, 26)" }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#004cff" }}
                            ></i>
                          </span>
                        </td>
                        <td
                          className="text-center"
                          style={{
                            borderRadius: "0 0 25px 0",
                            backgroundColor: "rgb(29, 29, 29)",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <i
                              className="fa fa-check"
                              style={{ color: "#760188" }}
                            ></i>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row">
              <div className="col-12 text-center py-4">
                <h1 className={`fw-bold text-white title ${roboto.className}`}>
                  YouTube Promotions
                </h1>
              </div>
              {youtubePromotions?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md-6 mx-md-auto mx-0 mx-lg-0 text-white py-4"
                  >
                    <div className="p-4 bg-black">
                      <div className="">
                        <div className="">
                          <div className="text-center">
                            <h5 className="mb-3 text-center display-7 ">
                              <strong>{item.promotionType}</strong>
                            </h5>
                          </div>

                          <div className="overflow-hidden">
                            <div
                              className=""
                              style={{
                                overflowY: "scroll",
                                marginRight: "-17px",
                                paddingRight: "17px",
                              }}
                            >
                              <table className="table table-borderless ">
                                <tbody
                                  style={{
                                    display: "block",
                                    maxHeight: "200px",
                                  }}
                                >
                                  {item?.plans?.map((plan, index) => {
                                    return (
                                      <tr
                                        key={index}
                                        style={{
                                          display: "table",
                                          width: "100%",
                                          tableLayout: "fixed",
                                        }}
                                      >
                                        <th
                                          scope="row"
                                          className="text-white align-left bg-transparent"
                                          style={{ fontSize: "1.2rem" }}
                                        >
                                          {plan.views}
                                        </th>
                                        <td className="text-right bg-black">
                                          <p
                                            className="price m-0 align-right"
                                            style={{
                                              color: "#B9DE22",
                                              fontSize: "1.2rem",
                                            }}
                                          >
                                            <strong>₹{plan.price}</strong>
                                          </p>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center align-items-center">
                            <span>
                              <i
                                className="fa fa-chevron-down"
                                style={{
                                  mozOsxFontSmoothing: "grayscale",
                                  webkitFontSmoothing: "antialiased",
                                  display: "var(--fa-display, inline-block)",
                                  fontStyle: "normal",
                                  fontVariant: "normal",
                                  lineHeight: "1",
                                  textRendering: "auto",
                                }}
                              ></i>
                            </span>
                          </div>
                        </div>
                        <div className="w-100">
                          <div className="text-center">
                            <a
                              className="btn greenBg mx-auto w-100"
                              style={{ fontSize: "1.1rem" }}
                              href="./contact"
                              target="_blank"
                            >
                              <b>Contact Us</b>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* need to review this spotify section for css loading issues */}

          <div className="container mt-5">
            <div className="row">
              <div className="col-12 text-center py-4">
                <h1 className="fw-bold text-white title">Spotify Promotions</h1>
              </div>
              {spotifyPromotions.map((item, index) => (
                <div
                  key={index}
                  // className="col-12 col-md-6 col-lg-4 mx-md-auto mx-0 mx-lg-0 text-white py-4" // for multiple cards
                  className="col-12 col-md-6 mx-auto text-white py-4" // for single
                >
                  <div className="p-4 bg-black">
                    <div className="">
                      <div className="text-center custom_height">
                        <h5 className="mb-3 text-center display-7">
                          <strong>{item.promotionType}</strong>
                        </h5>
                      </div>
                      <div className="overflow-hidden">
                        <div
                          style={{
                            overflowY: "scroll",
                            maxHeight: "200px",
                            marginRight: "-17px",
                            paddingRight: "17px",
                          }}
                        >
                          <table className="table table-borderless">
                            <tbody>
                              {item.specification.map((spotify, index) => (
                                <tr key={index}>
                                  <td className="text-white bg-transparent align-left pb-0">
                                    <ul className="m-0">
                                      <li className="text-white bg-transparent align-left">
                                        {spotify.spec}
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <h5 className="text-center pb-2 pt-4 text-white">
                            Pricing
                          </h5>
                          <table className="table table-borderless">
                            <tbody>
                              {item.price.map((pricing, index) => (
                                <tr
                                  key={index}
                                  style={{
                                    display: "table",
                                    width: "100%",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <th
                                    scope="row"
                                    className="text-white bg-transparent align-left"
                                    style={{ fontSize: "1.2rem" }}
                                  >
                                    {pricing.streams}
                                  </th>
                                  <td className="text-right bg-black">
                                    <p
                                      className="price m-0 align-right"
                                      style={{
                                        color: "#B9DE22",
                                        fontSize: "1.2rem",
                                      }}
                                    >
                                      <strong>₹{pricing.pricing}</strong>
                                    </p>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <span>
                          <i
                            className="fa fa-chevron-down"
                            style={{
                              mozOsxFontSmoothing: "grayscale",
                              webkitFontSmoothing: "antialiased",
                              display: "var(--fa-display, inline-block)",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              lineHeight: "1",
                              textRendering: "auto",
                            }}
                          ></i>
                        </span>
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="text-center">
                        <a
                          className="btn greenBg mx-auto w-100"
                          style={{ fontSize: "1.1rem" }}
                          href="./contact"
                          target="_blank"
                        >
                          <b>Contact Us</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* spotify testing */}

          {/* <div className="container mt-5">
            <div className="row">
              <div className="col-12 text-center py-4">
                <h1 className={`fw-bold text-white title ${roboto.className}`}>Spotify Promotions</h1>
              </div>
              {
                youtubePromotions?.map((item, index) => {
                  return (
                    <div key={index} className="col-12 col-md-6 mx-md-auto mx-0 mx-lg-0 text-white py-4">
                      <div className="p-4 bg-black">
                        <div className="">
                          <div className="">
                            <div className="text-center">
                              <h5 className="mb-3 text-center display-7 ">
                                <strong>{item.promotionType}</strong>
                              </h5>
                            </div>

                            <div className="overflow-hidden">
                              <div className="" style={{ overflowY: 'scroll', marginRight: '-17px', paddingRight: '17px' }}>
                                <table className="table table-borderless ">
                                  <tbody style={{ display: 'block', maxHeight: '200px' }}>
                                    <ul>
                                      <li key={index} className="text-white bg-transparent align-left">lower isp didi lorem  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</li>
                                      <li key={index} className="text-white bg-transparent align-left">lower isp didi lorem  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</li>
                                      <li key={index} className="text-white bg-transparent align-left">lower isp didi lorem  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</li>
                                      <li key={index} className="text-white bg-transparent align-left">lower isp didi lorem  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</li>
                                    </ul>
                                    <h5 className="text-center py-1 text-white">Pricing</h5>

                                    {
                                      item?.plans?.map((plan, index) => {
                                        return (
                                          <tr key={index} style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
                                            <th scope="row" className="text-white align-left bg-transparent" style={{ fontSize: "1.2rem" }}>{plan.views}
                                            </th>
                                            <td className="text-right bg-black">
                                              <p className="price m-0 align-right"
                                                style={{ color: "#B9DE22", fontSize: "1.2rem" }}>
                                                <strong>₹{plan.price}</strong>
                                              </p>
                                            </td>
                                          </tr>
                                        )
                                      })
                                    }

                                  </tbody>
                                </table>
                              </div>
                            </div>

                            <div className="d-flex justify-content-center align-items-center"><span><i
                              className="fa fa-chevron-down" style={{
                                mozOsxFontSmoothing: 'grayscale',
                                webkitFontSmoothing: 'antialiased',
                                display: 'var(--fa-display, inline-block)',
                                fontStyle: 'normal',
                                fontVariant: 'normal',
                                lineHeight: '1',
                                textRendering: 'auto'
                              }}></i></span></div>
                          </div>
                          <div className="w-100">
                            <div className="text-center">
                              <a className="btn greenBg mx-auto w-100" style={{ fontSize: '1.1rem' }} href="./contact"
                                target="_blank"><b>Contact Us</b></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div> */}

          <div className="container mt-5 overflow-hidden">
            <div className="row gx-5">
              <div className="col-12 text-center py-4">
                <h1 className={`fw-bold text-white title ${roboto.className}`}>
                  {" "}
                  Melo Studio{" "}
                </h1>
              </div>

              <div className="col-12 col-md-12 col-lg-8 mx-auto text-white py-4">
                <div className="p-4 bg-black">
                  <div className="">
                    <div className="">
                      <div className="text-center">
                        <h5
                          className="mb-3 text-center display-7"
                          style={{ fontSize: "1.3rem" }}
                        >
                          <strong>Audio/Video Services</strong>
                        </h5>
                      </div>
                      <div className="overflow-hidden">
                        <div
                          className=""
                          style={{
                            overflowY: "scroll",
                            marginRight: "-17px",
                            paddingRight: "17px",
                          }}
                        >
                          <table className="table table-borderless">
                            <tbody
                              style={{ display: "block", maxHeight: "200px" }}
                            >
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                }}
                              >
                                <th
                                  scope="row"
                                  className="text-white align-left bg-transparent"
                                  style={{ fontSize: "1.2rem" }}
                                >
                                  Production
                                </th>
                                <td className="text-right bg-black">
                                  <p
                                    className="price m-0 align-right "
                                    style={{
                                      color: "#B9DE22",
                                      fontSize: "1.2rem",
                                    }}
                                  >
                                    <strong>₹15000</strong>
                                    <span>
                                      <strong
                                        style={{
                                          color: "#B9DE22",
                                          fontSize: "0.76rem",
                                        }}
                                      >
                                        <span> </span> Onwards
                                      </strong>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                }}
                              >
                                <th
                                  scope="row"
                                  className="text-white align-left bg-transparent"
                                  style={{ fontSize: "1.2rem" }}
                                >
                                  Mix & Master
                                </th>
                                <td className="text-right bg-black">
                                  <p
                                    className="price m-0 align-right "
                                    style={{
                                      color: "#B9DE22",
                                      fontSize: "1.2rem",
                                    }}
                                  >
                                    <strong>₹15000</strong>
                                    <span>
                                      <strong
                                        style={{
                                          color: "#B9DE22",
                                          fontSize: "0.76rem",
                                        }}
                                      >
                                        <span> </span>Onwards
                                      </strong>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                }}
                              >
                                <th
                                  scope="row"
                                  className="text-white align-left bg-transparent"
                                  style={{ fontSize: "1.2rem" }}
                                >
                                  Professional Lyric Writing
                                </th>
                                <td className="text-right bg-black">
                                  <p
                                    className="price m-0 align-right "
                                    style={{
                                      color: "#B9DE22",
                                      fontSize: "1.2rem",
                                    }}
                                  >
                                    <strong>
                                      ₹5000{" "}
                                      <span
                                        className="ps-threeee ps-md-0 fw-bold"
                                        style={{
                                          color: "#B9DE22",
                                          fontSize: "0.76rem",
                                        }}
                                      >
                                        {" "}
                                        Onwards
                                      </span>
                                    </strong>
                                  </p>
                                </td>
                              </tr>
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                }}
                              >
                                <th
                                  scope="row"
                                  className="text-white align-left bg-transparent"
                                  style={{ fontSize: "1.2rem" }}
                                >
                                  Professional Composition
                                </th>
                                <td className="text-right bg-black">
                                  <p
                                    className="price m-0 align-right "
                                    style={{
                                      color: "#B9DE22",
                                      fontSize: "1.2rem",
                                    }}
                                  >
                                    <strong>
                                      ₹5000{" "}
                                      <span
                                        className="ps-threeee ps-md-0 fw-bold"
                                        style={{
                                          color: "#B9DE22",
                                          fontSize: "0.76rem",
                                        }}
                                      >
                                        Onwards
                                      </span>
                                    </strong>
                                  </p>
                                </td>
                              </tr>
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                }}
                              >
                                <th
                                  scope="row"
                                  className="text-white align-left bg-transparent"
                                  style={{ fontSize: "1.2rem" }}
                                >
                                  Professional Video Shoot
                                </th>
                                <td className="text-right bg-black">
                                  <p
                                    className="price m-0 align-right "
                                    style={{
                                      color: "#B9DE22",
                                      fontSize: "1.2rem",
                                    }}
                                  >
                                    <strong>₹20000</strong>
                                    <span>
                                      <strong
                                        style={{
                                          color: "#B9DE22",
                                          fontSize: "0.76rem",
                                        }}
                                      >
                                        <span> </span>Onwards
                                      </strong>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                }}
                              >
                                <th
                                  scope="row"
                                  className="text-white align-left bg-transparent"
                                  style={{ fontSize: "1.2rem" }}
                                >
                                  Professional Video Edit
                                </th>
                                <td className="text-right bg-black">
                                  <p
                                    className="price m-0 align-right "
                                    style={{
                                      color: "#B9DE22",
                                      fontSize: "1.2rem",
                                    }}
                                  >
                                    <strong>₹20000</strong>
                                    <span>
                                      <strong
                                        style={{
                                          color: "#B9DE22",
                                          fontSize: "0.76rem",
                                        }}
                                      >
                                        <span> </span>Onwards
                                      </strong>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                }}
                              >
                                <th
                                  scope="row"
                                  className="text-white align-left bg-transparent"
                                  style={{ fontSize: "1.2rem" }}
                                >
                                  Full Package
                                </th>
                                <td className="text-right align-right bg-black">
                                  <a
                                    className="price m-0 "
                                    href="./contact"
                                    target="_blank"
                                    style={{
                                      color: "#B9DE22",
                                      fontSize: "1.2rem",
                                    }}
                                  >
                                    <strong>Request Quote</strong>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <span>
                          <i
                            className="fa fa-chevron-down"
                            style={{
                              mozOsxFontSmoothing: "grayscale",
                              webkitFontSmoothing: "antialiased",
                              display: "var(--fa-display, inline-block)",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              lineHeight: "1",
                              textRendering: "auto",
                            }}
                          ></i>
                        </span>
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="text-center">
                        <a
                          className="btn greenBg mx-auto w-100"
                          style={{ fontSize: "1.1rem" }}
                          href="./contact"
                          target="_blank"
                        >
                          <b>Contact Us</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-100 container-fluid bg-black"
          style={{ padding: "7.8rem 0 7.8rem 0" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8  col-md-7">
                <h1
                  className={`title fw-bold text-white align-left ${roboto.className}`}
                >
                  Unlock the Potential of{" "}
                  <span
                    className="fw-bold"
                  >
                    Collaboration
                  </span>
                </h1>
                <br />

                <h3>
                  <b className="text-white">
                    Flexible and Curated Pricing Plans
                  </b>
                </h3>

                <p className="text-justify" style={{ color: "#beb9b9", fontSize: "1.2rem" }}>
                  At Melo, we understand that every artist and musician is
                  unique. That&apos;s why we offer flexible pricing plans
                  tailored to your specific needs. Whether you&apos;re an
                  independent artist just starting or a seasoned professional,
                  we&apos;ve got a that suits you.
                </p>
                <p className="text-justify" style={{ color: "#beb9b9", fontSize: "1.2rem" }}>
                  Our curated pricing options ensure that you get the best value
                  for your music distribution needs. Choose Melo for a pricing
                  as unique as your sound.
                </p>
              </div>
              <div className="col-12 col-lg-4  col-md-5 d-flex justify-content-center align-items-center">
                <Image
                  src={randomImage2}
                  unoptimized
                  className="img-fluid  h-75"
                  alt="xyz"
                  width={404}
                  height={75}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-100 container-fluid"
          style={{ backgroundColor: "#202020", padding: "7.8rem 0 7.8rem 0" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 px-md-5 d-flex justify-content-center align-items-center order-2 order-lg-1 px-3 px-md-0">
                <Image
                  src={randomImage}
                  unoptimized
                  className="img-fluid object-fit-cover"
                  alt="xyz"
                  width={404}
                  height={550}
                />
              </div>
              <div className="col-12 col-lg-6 px-md-5  order-1 order-lg-2 px-3 px-md-0">
                <h1
                  className={`title fw-bold text-white align-left pb-3 ${roboto.className}`}
                >
                  There Are{" "}
                  <span
                    className="fw-bold"
                  >
                    {" "}
                    No Barriers{" "}
                  </span>
                  to Your Career
                </h1>

                <h3 className="fs-3 text-white pt-md-2 align-left">
                  <b className="fw-bold">Global Presence</b>
                </h3>
                <p className="py-2 text-white text-lg-start text-justify">
                  Unlock the global stage for your music. We&apos;ll guarantee
                  that your music is distributed for download or streaming on
                  all major digital music stores and top-tier streaming
                  platforms worldwide. Your music will be within reach of your
                  fans, wherever they choose to indulge in it.
                </p>

                <h3 className="fs-3 text-white pt-md-2 align-left">
                  <b className="fw-bold">Songwriter Solutions</b>
                </h3>
                <p className="py-2 text-white text-lg-start text-justify">
                  Don&apos;t miss out on potential earnings from your original
                  compositions. Whether your music is featured in film and TV or
                  shared by your fans on YouTube, Melo&apos;s supplementary
                  services have you covered.
                </p>

                <h3 className="fs-3 text-white pt-md-2 align-left">
                  <b className="fw-bold">Prompt & Reliable Artist Support</b>
                </h3>
                <p className="py-2 text-white text-lg-start text-justify">
                  At Melo, our dedicated team of Customer Care and Content
                  Review & Rights Specialists is ready to support you throughout
                  the distribution process. You can reach our friendly customer
                  care team via phone, and they&apos;re always just a call away.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
