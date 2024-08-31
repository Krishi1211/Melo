"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";
import "./footer.css";
import path112 from "../../assets/images/path-112.png";
import axios from "axios";
import "../../app/pixels/gtag";
const currentYear = new Date().getFullYear();

const Footer = () => {
  const [data, setData] = useState();
  const getPlatformLinks = async () => {
    try {
      const response = await axios.get(
        "https://api.melo.works/user/website/viewPlatforms"
      );
      // console.log(response?.data?.data);
      setData(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPlatformLinks();
  }, []);

  // console.log(data);

  return (
    <>
      <section className="blackBg pt-md-5 pt-3">
        <div className="container">
          <div className="row mbr-white">
            <div className="col-12 col-md-3 col-lg-3 cen my-2">
              <div className="media-wrap col-md-3 col-lg-3 col-md-3 col-sm-12 col-lg-7">
                <Link className="footerLinks" href="">
                  <Image
                    src={path112}
                    width="auto"
                    height="auto"
                    alt="Melo logo"
                    style={{ height: "2.5rem", width: "auto" }}
                  />
                </Link>
                <br />
              </div>
              <p className="mb-4 robotoTxt" style={{ textAlign: "left" }}>
                India&apos;s First All-In-One Music Distribution Service.
              </p>
            </div>
            <div className="col-12 col-md-9 col-lg-9 my-2">
              <div className="row">
                <div
                  className="col-12  col-md-3 col-lg-3 my-2 text-left"
                  style={{ textAlign: "left" }}
                >
                  <h5 className="greenTxt robotoTxt">
                    <strong>Make Music With Melo</strong>
                  </h5>
                  <ul className="list robotoTxt list-unstyled">
                    <li className="footerTxtSize">
                      <span>
                        <Link className="footerLinks" href="./sell-your-music">
                          Sell Your Music
                        </Link>
                      </span>
                    </li>
                    <li className="footerTxtSize">
                      <span>
                        <Link className="footerLinks" href="./artist-services">
                          Artist Services
                        </Link>
                      </span>
                    </li>
                    <li className="footerTxtSize">
                      <Link
                        className="footerLinks"
                        href="https://forms.gle/C1XkzxmrVcyPSLkS8"
                        target="_blank"
                      >
                        Promote Now
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <span>
                        <Link className="footerLinks" href="./studio-services">
                          Studio Services
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>

                <div
                  className="col-12 col-md-3 col-lg-3 my-2 text-left"
                  style={{ textAlign: "left" }}
                >
                  <h5 className="greenTxt robotoTxt">
                    <strong>Quick Links</strong>
                  </h5>
                  <ul className="list robotoTxt list-unstyled">
                    <li className="footerTxtSize">
                      <Link
                        className="footerLinks"
                        href="./terms-and-conditions"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link className="footerLinks" href="./privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link className="footerLinks" href="/refund-policy">
                        Refund Policy
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link className="footerLinks" href="/blogs">
                        Blogs
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link className="footerLinks" href="/about-melo">
                        About Us
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link
                        className="footerLinks"
                        href="https://sellmusic.online"
                        target="_blank"
                      >
                        SMO &amp; SMO&apos;kin
                      </Link>
                    </li>
                    <Link
                      className="footerLinks"
                      href="https://sellmusic.online"
                      target="_blank"
                    ></Link>
                    <li className="footerTxtSize">
                      <span>
                        <Link
                          className="footerLinks"
                          href="https://sellmusic.online/advent-2020"
                          target="_blank"
                        >
                          Advent 2020
                        </Link>
                      </span>
                    </li>
                    <li className="footerTxtSize">
                      <Link className="footerLinks" href="/streaming-platforms">
                        Streaming Platforms
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link className="footerLinks" href="/pricing">
                        Pricing
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link className="footerLinks" href="/events">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-12 col-md-3 col-lg-3 my-2 text-left"
                  style={{ textAlign: "left" }}
                >
                  <h5 className="greenTxt robotoTxt">
                    <strong>Release Now</strong>
                  </h5>
                  <ul className="list robotoTxt list-unstyled">
                    <li className="footerTxtSize">
                      <Link
                        className="footerLinks"
                        href="https://docs.google.com/forms/d/1DKv-DCy85w-fSFDoVdUhH6VYTtVj_eZeD5m4slok8Tw/edit?usp=drive_web"
                        target="_blank"
                      >
                        Release Single
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link
                        className="footerLinks"
                        href="https://docs.google.com/forms/d/1zGKolGYBMgnCqKSbrhkChOp_1yELOd2hgaO7wYnpr8Y/edit"
                        target="_blank"
                      >
                        Release EP
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link
                        className="footerLinks"
                        href="https://docs.google.com/forms/d/1zGKolGYBMgnCqKSbrhkChOp_1yELOd2hgaO7wYnpr8Y/edit"
                        target="_blank"
                      >
                        Release Album
                      </Link>
                    </li>
                    <li className="footerTxtSize">
                      <Link
                        className="footerLinks"
                        href="https://docs.google.com/forms/d/1G_PhNrQixgmVqEP3p3ygcUq_dx4m1kiMkQocO0tiz0M/edit?usp=drive_web"
                        target="_blank"
                      >
                        Register Label
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-container col-12 col-md-3 col-lg-3 my-2 text-left">
                  <div style={{ textAlign: "left" }}>
                    <h5 className="greenTxt robotoTxt">
                      <strong>Account Services</strong>
                    </h5>
                    <ul className="list robotoTxt list-unstyled">
                      <li className="footerTxtSize">
                        <span>
                          <Link
                            className="footerLinks"
                            href="https://dashboard.melo.works/"
                          >
                            My Account
                          </Link>
                        </span>
                      </li>
                      <li className="footerTxtSize">
                        <span>
                          <Link
                            className="footerLinks"
                            href="https://dashboard.melo.works/"
                          >
                            Artist Dashboard
                          </Link>
                        </span>
                      </li>
                      <li className="footerTxtSize">
                        <span>
                          <Link className="footerLinks" href="/contact">
                            Contact
                          </Link>
                        </span>
                      </li>
                      <li className="footerTxtSize">
                        <span>
                          <Link className="footerLinks" href="/faq">
                            FAQs
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="m-0 bg-white" style={{ height: "3px" }} />
        </div>
      </section>

      <section className="blackBg">
        <div className="container pt-4">
          <div className="row ">
            {data?.map((item) => (
              <div key={item.id} className="col-12 col-md-3">
                <Link
                  className="text-decoration-underline text-white my-2"
                  style={{
                    width: "240px",
                    fontSize: ".8rem",
                  }}
                  href={`/streaming-platforms/${item?.slug}`}
                  target="_blank"
                >
                  {" "}
                  Music Distribution on {item?.platformName}
                </Link>
              </div>
            ))}
          </div>
          <p
            className="mb-0 greenTxt copyright align-center robotoTxt"
            style={{ paddingBottom: "1.5%", paddingTop: '3.5rem', fontSize: '.9rem' }}
          >
            © Copyright {currentYear} - All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
