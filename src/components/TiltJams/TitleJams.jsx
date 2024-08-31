"use client";
import faqData from "@/app/tilt-jams/data.json";

import Image from "next/image";
import MeloTiltVideo from "@/assets/Blog/meloxtiltannouncementv2.gif";
import "@/app/tilt-jams/styles.css"
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['500', '700']
});


export default function TiltJamsComponent({meloxtiltiinverse}) {
  const meloFaqs = faqData.meloFaq;
  const tiltFaqs = faqData.tiltFaq;

  const toggleCollapse = (faqId) => {
    const element = document.getElementById(`collapse-${faqId}`);
    element.classList.toggle("show");
  };

  return (
    <>
      <section
        className="pt-0 pb-0 bg-black top"
        style={{ overflowX: "hidden" }}
      >
        <div className="container">
          {/* <Image src={MeloTiltVideo} alt="error" width='2000px' height='1000px'/> */}
          <div className="px-md-1 d-flex flex-column flex-lg-row flex-xl-row">
            <div className="col-12 col-xl-6 col-lg-6">
              {/* <video autoPlay muted loop className="w-100"> */}
              {/* <source src={meloTiltVideo} type="video/mp4" /> */}
              {/* <Image   src={MeloTiltVideo} unoptimized layout="responsive" alt="error" width='2000px' height='1000px' style={{ height: '100%' }} /> */}
              <video autoPlay muted loop id="myVideo" className="w-100">
                <source
                  src="/meloxtiltannouncementv2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <section className="bgIMG"></section> */}
              {/* Your browser does not support the video tag. */}
              {/* </video> */}
            </div>
            <div className="col-12 col-lg-6">
              <div className="container my-5">
                <div className="text-center mx-md-5 mb-5">
                  <Image
                    src={meloxtiltiinverse}
                    unoptimized
                    alt="Melo"
                    width={506}
                    height={120}
                    className="img-fluid"
                  />
                </div>
                <div className="ms-md-5">
                  <p
                    className="custom_fontsize text-justify text-md-start"
                    style={{ color: "rgb(211, 211, 211)" }}
                  >
                    It has always been in Melo and Tilt&rsquo;s vision to help
                    develop Mumbai&rsquo;s music scene.
                    <br />
                    <br />
                    Combining Tilt&rsquo;s vibrant jams with Melo&apos;s
                    expertise in online music distribution and promotion, Melo
                    and Tilt have joined forces to bring you an exciting
                    partnership! Together, we are dedicated to supporting
                    Mumbai&rsquo;s artists by offering them a transparent and
                    artist-friendly way of distributing their music in addition
                    to the beautiful platform that we have in the Jams.
                    <br />
                    <br />
                    We look forward to working together to provide an even
                    stronger platform for emerging artists and to contribute to
                    the Mumbai music scene!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 px-0">
            <div className="accordion mx-0 px-0" id="accordionExample">
              <h1 className={`text-center mb-3 text-white ${roboto.className}`}>
                <span className="fw-bolder mb-2" style={{ color: "#b9de22" }}>
                  Melo
                </span>{" "}
                FAQs
              </h1>
              {meloFaqs.map((faq, index) => (
                <div key={faq.ID} className="card border-0 px-0 mb-0">
                  <div
                    className="card-header bg-black p-0 text-left"
                    id={`heading-melo-${faq.ID}`}
                    onClick={() => toggleCollapse(`melo-${faq.ID}`)}
                  >
                    <h2 className="mb-0 py-0">
                      <p
                        className="text-left my-2"
                        type="button"
                        data-toggle="collapse"
                        aria-controls={`collapse-melo-${faq.ID}`}
                        style={{
                          color: "white",
                          textDecoration: "none",
                          border: "none",
                          backgroundColor: "rgb(24, 24, 24)",
                          fontSize: "20px",
                          padding: "10px",
                          borderRadius: "5px",
                          lineHeight: "1.2",
                        }}
                      >
                        {faq.Question}
                      </p>
                    </h2>
                  </div>
                  <div
                    id={`collapse-melo-${faq.ID}`}
                    className={`collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading-melo-${faq.ID}`}
                    data-parent="#accordionExample"
                  >
                    <div
                      className="card-body bg-black"
                      dangerouslySetInnerHTML={{ __html: faq.Answer }}
                      style={{
                        color: "rgb(211, 211, 211)",
                        border: "none",
                        height: "fit-content",
                      }}
                    />
                  </div>
                </div>
              ))}

              <h1 className={`text-center mt-5 mb-3 text-white ${roboto.className}`}>
                <span className="fw-bolder mb-2" style={{ color: "#b68fea" }}>
                  Tilt
                </span>{" "}
                FAQs
              </h1>
              {tiltFaqs.map((faq) => (
                <div key={faq.ID} className="card border-0 bg-transparent">
                  <div
                    className="card-header p-0 text-left"
                    id={`heading-${faq.ID}`}
                    onClick={() => toggleCollapse(faq.ID)}
                  >
                    <h2 className="mb-0 py-0">
                      <p
                        className="text-left my-2"
                        type="button"
                        data-toggle="collapse"
                        aria-controls={`collapse-${faq.ID}`}
                        style={{
                          color: "white",
                          textDecoration: "none",
                          border: "none",
                          backgroundColor: "rgb(24, 24, 24)",
                          fontSize: "20px",
                          padding: "10px",
                          borderRadius: "5px",
                          lineHeight: "1.2",
                        }}
                      >
                        {faq.Question}
                      </p>
                    </h2>
                  </div>
                  <div
                    id={`collapse-${faq.ID}`}
                    className="collapse"
                    aria-labelledby={`heading-${faq.ID}`}
                    data-parent="#accordionExample"
                  >
                    <div
                      className="card-body bg-black"
                      dangerouslySetInnerHTML={{ __html: faq.Answer }}
                      style={{
                        color: "rgb(211, 211, 211)",
                        border: "none",
                        height: "fit-content",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
