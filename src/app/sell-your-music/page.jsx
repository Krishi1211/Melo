import ContactForm from "@/components/ContactForm/ContactForm";

// import contactForm from '@/components/contact-form/page'
import Link from "next/link";
import React from "react";
// import Marquee from '@/components/Marquee/Marquee'

export const metadata = {
  title: "Melo | Sell Your Music Worldwide",
  description: "Melo sells your music worldwide on various platforms like Spotify, Apple, Amazon, TikTok, YouTube, and more, and it makes you earn a maximum profit for your music.",
  openGraph: {
    images: ['https://melo.works/assets/images/favicon.png']
  },
}
export default function SellMusic() {
  const ourInfo = [
    {
      mainText: "Create an account with us",
      subText: `Simply create an account with us, and we'll work diligently to meet your expectations. Your music will soon be on platforms like Spotify and Apple Music.`,
    },
    {
      mainText: "Upload your music",
      subText:
        "Upload your album art, add credits and music (preferably in WAV format). If you have an ISRC code, share it. Well distribute your music to online stores and streaming platforms to expand your reach.",
    },
    {
      mainText: "We distribute",
      subText:
        "We help you select the right music stores, consider genres and audiences, and distribute your music on platforms like Spotify, Apple Music, and more to reach a global audience.",
    },
    {
      mainText: "Get Paid",
      subText:
        "Your music goes live fast, boosting your chances of playlists and earnings. We ensure ongoing availability at no extra cost, so you get the profits you deserve.",
    },
  ];

  return (
    <>
      <section
        className="backset py-4 text-white"
        style={{ backgroundColor: "#131313" }}
      >
        <div className="container py-4">
          <div className="row justify-content-center py-4">
            <div className="col-12 col-lg-6 py-4">
              <div className="align-left text-white">
                <h4 className="mb-4 display-4 fw-semibold">SELL YOUR MUSIC</h4>
                <p className="mb-4 display-7">
                  An artist not only dreams of creating magical music by
                  curating the best of vocals, notes, and lyrics but also
                  envisions people willingly choosing to invest their time and
                  money in listening to their music.
                </p>
                <p className="mb-4 display-7">
                  Brace yourselves and get ready to monetize your creation. Be
                  ready to be incredibly proud of your work and show your magic
                  to the whole world out there.
                </p>
                <div>
                  <Link className="btn ms-0 fw-bold greenBg " href="/contact">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="w-100 pe-0   pt-4">
                {ourInfo.map((item, index) => (
                  <div key={index} className="d-flex mb-4 align-items-center">
                    <div
                      style={{
                        width: "2.7rem",
                        height: "2.7rem",
                        backgroundColor: "#b9de22",
                      }}
                      className="rounded-circle p-4 d-flex justify-content-center align-items-center text-black fs-5"
                    >
                      {index + 1}
                    </div>
                    <div className="ms-3">
                      <h5 className="fw-bold">{item.mainText}</h5>
                      <p className="">{item.subText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
