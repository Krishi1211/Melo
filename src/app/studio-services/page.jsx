import React from "react";
import styles from "./studioServices.module.css";

import Image from "next/image";
import card1 from "@/assets/images/mic-2.jpg";
import card2 from "@/assets/images/prod.jpg";
import card3 from "@/assets/images/mixer.jpg";
import card4 from "@/assets/images/headphones.jpg";
import "./studioServices.css";
// import Marquee from '@/components/Marquee/Marquee'
export const metadata = {
  title: "Melo | Studio Services",
  description: "Melo sells your music worldwide on various platforms like Spotify, Apple, Amazon, TikTok, YouTube, and more, and it makes you earn a maximum profit for your music.",
  openGraph: {
    images: ['https://melo.works/assets/images/favicon.png']
  },
}
export default function page() {
  const cardData = [
    {
      image: card1,
      head: "Recording",
      text: "Melo is a professional recording studio and provides both production and engineering services in an excellent acoustic space for a broad range of audio projects. We deliver a variety of microphones, a Soundproof vocal booth, a live room with an entire drum kit, and a variety of guitars for recordings.",
    },
    {
      image: card2,
      head: "Music Production",
      text: `Produce radio-ready songs that grab the hearts & minds of listeners Our eclectic roster of A-list talent has decades of experience recording and producing music we've loved throughout our lives. Just think, how good will your songs sound with their musicianship and experience?`,
    },
    {
      image: card3,
      head: "Mixing",
      text: `Get your music mixed by the best in the industry. Melo's outstanding engineers have an eclectic skill-set that permits them to work on a broad range of projects. The stunning acoustically treated rooms and special monitoring at Melo ensure that we can furnish the best sonic experience for vinyl, digital, and streaming.`,
    },
    {
      image: card4,
      head: "Mastering",
      text: `Mastering is the last stage of music production and is highly recommended for any release. It is the icing on the cake, which ensures your track is sonically balanced across all playback systems. If you are releasing an album or EP, online WAV mastering also guarantees a constant, clean sound across all tracks. The final master tracks audio can then be duplicated and distributed.`,
    },
  ];

  return (
    <>
      <section
        className={`d-flex align-items-center flex-lg-row flex-column justify-content-center w-100 text-light p-md-5 p-4 ${styles.bgImg}`}
      >
        <div className="text-center pe-lg-5 pe-0 w-100">
          <h1
            style={{ fontWeight: "900", fontSize: "3.2rem" }}
            className="mb-3"
          >
            STUDIO SERVICES
          </h1>
          <h4 className="">WHATEVER YOU NEED, WE ARE HERE</h4>
        </div>
        <div
          className={`${styles.glassMorph} my-lg-0 my-3 fs-md-5 fs-6 rounded-2 w-100 me-0 me-lg-4 p-lg-5 p-4 text-center`}
        >
          <p className="mb-0 fs-6 lh-lg">
            Let&apos;s be honest you didn&apos;t start making music so that you
            could spend all of your time learning how to record, mix, master,
            and produce all of your songs, did you? Opting to take all of that
            stuff steals your valuable time from you, which you could better
            spend writing songs, playing and performing music, and becoming a
            better musician or songwriter.
          </p>
        </div>
      </section>

      <section className="bg-black text-light p-4">
        <h2 className="text-center pt-3 fw-bold">WHAT WE DO</h2>
        <div className="pt-0 d-flex justify-content-center ">
          <div className="d-flex flex-wrap justify-content-center align-items-center flex-column flex-lg-row p-2 p-md-4 pt-0">
            {cardData.map((item, index) => (
              <>
                <div
                  key={index}
                  className={`d-flex flex-grow-1 flex-lg-grow-0 ${styles.cardSize} py-4 p-md-5 p-3  m-1 flex-column`}
                >
                  <Image
                    src={item.image}
                    width={500}
                    height={290}
                    className="rounded-2 object-fit-cover"
                    alt="melo"
                    style={{ border: "1px solid #ffffff30" }}
                  />
                  <div className="my-md-3 my-2 text-center ">
                    <h4 className="greenTxt fw-bold mt-2">{item.head}</h4>
                    <p className="fs-6 fs-md-4">{item.text}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#181818" }}
        className="py-5 px-2 px-md-5 "
      >
        <div style={{ margin: "auto" }} className="greyTxt col-10 p-0">
          <h1 className="fw-bold  greyTxt">Equipments</h1>
          <div
            className=" accordion accordion-flush"
            id="accordionFlushExample"
          >
            <div className="accordion-item pt-4 bg-transparent">
              <h2
                className="accordion-header bg-transparent"
                id="flush-headingOne"
              >
                <button
                  className="greyTxt accordion-button px-0 bg-transparent collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  System
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
                  className={`accordion-body greyTxt px-0 ${styles.accordionTxt}`}
                >
                  MAC M1 Silicon
                </div>
              </div>
            </div>
            <div className="accordion-item pt-4 bg-transparent">
              <h2
                className="accordion-header bg-transparent"
                id="flush-headingTwo"
              >
                <button
                  className="greyTxt accordion-button px-0 bg-transparent collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Monitors
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
                  className={`accordion-body greyTxt px-0 ${styles.accordionTxt}`}
                >
                  MAudio AV40
                </div>
              </div>
            </div>
            <div className="accordion-item pt-4 bg-transparent">
              <h2
                className="accordion-header bg-transparent"
                id="flush-headingThree"
              >
                <button
                  className="greyTxt accordion-button px-0 bg-transparent collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Microphones
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
                  className={`accordion-body greyTxt px-0 ${styles.accordionTxt}`}
                >
                  Rode NT2A, AKG Lyra Ultra High Definition, Audio Technica
                  AT2020
                </div>
              </div>
            </div>
            <div className="accordion-item pt-4 bg-transparent">
              <h2
                className="accordion-header bg-transparent"
                id="flush-headingFour"
              >
                <button
                  className="accordion-button greyTxt px-0 bg-transparent collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Audio Interfaces
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
                  className={`accordion-body greyTxt px-0 ${styles.accordionTxt}`}
                >
                  Audient iD14
                </div>
              </div>
            </div>
            <div className="accordion-item pt-4 bg-transparent">
              <h2
                className="accordion-header bg-transparent"
                id="flush-headingFive"
              >
                <button
                  className="accordion-button px-0 bg-transparent collapsed greyTxt fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Guitars
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
                  className={`accordion-body greyTxt px-0 ${styles.accordionTxt}`}
                >
                  Epiphone Riviera P93 Limited Edition and PRS
                </div>
              </div>
            </div>
            <div className="accordion-item pt-4 bg-transparent">
              <h2
                className="accordion-header bg-transparent"
                id="flush-headingSix"
              >
                <button
                  className="accordion-button px-0 bg-transparent collapsed greyTxt fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Softwares
                </button>
              </h2>
              <hr color="white" style={{ margin: "0" }} />

              <div
                id="flush-collapseSix"
                // style={{ backgroundColor: 'transparent !important' }}
                className="accordion-collapse collapse bg-transparent"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className={`accordion-body greyTxt px-0 ${styles.accordionTxt}`}
                >
                  Logic Pro X, Native Instruments Komplete 13 (Ultimate Bundle),
                  Valhalla Bundle, FabFilter Bundle, IK Multimedia Amplitube 4 &
                  5, Izotope Bundle
                </div>
              </div>
            </div>
            <div className="accordion-item pt-4 bg-transparent">
              <h2
                className="accordion-header bg-transparent"
                id="flush-headingSeven"
              >
                <button
                  className="accordion-button px-0 bg-transparent collapsed greyTxt fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                >
                  AMPs
                </button>
              </h2>
              <hr color="white" style={{ margin: "0" }} />

              <div
                id="flush-collapseSeven"
                // style={{ backgroundColor: 'transparent !important' }}
                className="accordion-collapse collapse bg-transparent"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className={`accordion-body greyTxt px-0 ${styles.accordionTxt}`}
                >
                  Marshall MG Series MG15CFXMS (Mini Stack)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
