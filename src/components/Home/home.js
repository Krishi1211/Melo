
import Image from "next/image";
import './home.css';
import cover5 from '../../assets/Blog/cover5.jpeg'
import whychoosemelo from '../../assets/Blog/WhyChooseMelo.jpg'
import Link from "next/link";
import ArtistsSwiper from "../ArtistsSwiper/ArtistsSwiper";
import { Montserrat } from "@next/font/google";
import { Roboto } from "next/font/google";
import '@/app/pixels/gtag';
import PopUpForm from "../PopUpForm/PopUpForm";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700']
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700']
});

export default function HomePage() {
  const ourServices = [
    {
      serviceName: 'Forever Release',
      amount: '996',
      info: "Looking to distribute original music? Here's the simplest way.",
      slug: 'forever-release'
    },
    {
      serviceName: 'Release Covers',
      amount: '1,999',
      info: "With the legal stuff all taken care of, releasing covers has never been this easy.",
      slug: 'release-covers',
    },
    {
      serviceName: 'Promote',
      amount: '996',
      info: "Effective marketing approaches to attract unique & organic streams for your singles.",
      slug: 'promote'
    },
    {
      serviceName: 'Subscriptions',
      amount: '9,996',
      info: "A customised solution enabling you to enable your artists - limitlessly.",
      slug: 'label-subscription'
    },

  ]

  return (
    <>
      {/* gif starts */}
        <section className="bgIMG"></section>
      {/* gif ends */}

      <section className="bg-dark py-0 rounded text-white" >
        <div>
          <div>
            <h4 className="text-white align-center mb-0 text-3xl mb-0"></h4>
          </div>
          
          <div className="py-5 px-4 bg-black">
            <div className="container px-0">
              <h1 className={`title text-center mb-5 pt-4 fw-bold text-white ${roboto.className}`}>
                Forever Releases starting at <span className="fw-bold">Rs. 996</span>
              </h1>
              <p className="text-center" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                Get your music on Spotify, Apple Music, Wynk, Hungama, YouTube,
                JioSaavn, Instagram and more. Keep 100% ownership of your music and
                stay in control of your career.
              </p>
            </div>
          </div>

          <div className="py-5" style={{ backgroundColor: 'rgb(24, 24, 24)' }}>
            <div className="container">
              <div className="row d-flex flex-column-reverse flex-xl-row flex-lg-row">
                <div className="col-12 col-lg-6 col-xl-6 col-md-12 d-flex">
                  <Image unoptimized src={whychoosemelo} height="auto" width="auto" className="img w-75 m-auto p-auto object-fit-cover" alt="image" />
                </div>
                <div className="col-12 col-lg-6 col-md-12 px-4">
                  <h1 className={`title text-left mb-5 fw-bold ${roboto.className}`} style={{ color: 'white' }}>
                    Why choose <span className="fw-bold">melo</span>
                  </h1>
                  <p className="text-white align-left fs-4 mb-0" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    Extensive Distribution Network:
                  </p>
                  <p style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Reach audiences worldwide on major digital platforms.</small>
                  </p>
                  <p className="text-white align-left fs-4 mb-0" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    Global Reach, Local Expertise:
                  </p>
                  <p style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Tailored solutions for the Indian music industry.</small>
                  </p>
                  <p className="text-white align-left fs-4 mb-0" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    Transparent Royalty Payments:
                  </p>
                  <p style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Accurate and timely payments, ensuring fairness.</small>
                  </p>
                  <p className="text-white align-left fs-4 mb-0" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    Artist-Focused Approach:
                  </p>
                  <p style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Support, promotion, and industry resources for artists.</small>
                  </p>
                  <p className="text-white align-left fs-4 mb-0" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    Customized Solutions for Labels:
                  </p>
                  <p style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Streamlined distribution for record labels.</small>
                  </p>
                  <p style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small></small>
                  </p>
                  <p className="text-white align-left fs-4 mb-0" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    Competitive Pricing:
                  </p>
                  <p style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Affordable plans for all budgets.</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="py-5 bg-black" >
            <div className="">
              <h1 className={`text-center mb-5 fw-bold ${roboto.className}`} style={{ color: 'white', }}>
                Our services
              </h1>
              <div className="container">
                <div className="d-flex flex-wrap justify-content-center">
                  {
                    ourServices.map((item, index) => (
                      <>
                        <div key={index} className="blackBg animationEffect rounded-1 p-4 m-3 col-md-8 col-lg-5 col-sm-11" style={{ minHeight: '10rem' }}>
                          <Link className="text-decoration-none" href={item.slug}>
                            <div className="position-relative rounded h-100 d-flex flex-column" >
                              <h5 className={`text-white fs-2 fw-bold  ${montserrat.className}`}>
                                {item.serviceName}
                              </h5>
                              <h6 className="display-7 fs-6 text-white fst-italic fw-semibold">
                                Starting at <span className="greenTxt fw-medium">₹{item.amount}</span>
                              </h6>
                              <p className="mt-4 fw-bold fs-5 display-7" style={{ color: 'rgb(172, 172, 172)' }}>
                                {item.info}
                              </p>
                            </div>
                          </Link>
                        </div>
                      </>
                    ))
                  }
                </div>
              </div>
            </div>
          </section>

          <div className="py-5 px-4" style={{ backgroundColor: 'rgb(24, 24, 24)' }}>
            <div className="container px-0">
              <h1 className={`title text-center mb-5 fw-bold text-white ${roboto.className}`} style={{}}>
                How to <span className="fw-bold">Sell Your Music Online</span>
              </h1>
              <p className="text-justify" style={{fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                Selling your music online is a straightforward process that begins
                with choosing a reliable music distribution service. Look for a
                service like Melo that offers global reach and transparent royalty
                payments. Ensure your audio files are of the highest quality,
                professionally mastered to optimize the sound. Create visually
                captivating cover art that grabs attention and represents your music.
                Plan your release strategy, considering factors like release dates and
                target audience. Leverage social media platforms and digital marketing
                to promote your music effectively. Engage with your fan base, respond
                to feedback, and build a strong online presence. Stay consistent,
                persistent, and proactive in promoting your music to maximize your
                online sales potential.
              </p>
            </div>
          </div>
          
          <div className="py-5 bg-black" >
            <div className="container px-lg-0">
              <h1 className={`title text-center mb-5 fw-bold text-white ${roboto.className}`} style={{}}>
                Melo <span className="fw-bold">Artists</span>
              </h1>
              <ArtistsSwiper />
            </div>
          </div>
          
          <div className="py-5" style={{ backgroundColor: 'rgb(24, 24, 24)' }}>
            <div className="container">
              <h1 className={`title text-center mb-5 fw-bold ${roboto.className}`} style={{ color: 'white', }}>
                Hit it off in <span className="fw-bold">the Music Business</span>
              </h1>
              <div className="row d-flex flex-column flex-xl-row flex-lg-row px-lg-2">
                <div className="col-12 col-lg-4 col-xl-4 col-md-12 px-4 px-lg-2">
                  <p className="fs-4 mb-0 text-white" style={{ fontSize: '1.3rem' }}>
                    Building a Strong Network
                  </p>
                  <p className="lh-sm text-justify" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Connect with fellow musicians and industry professionals. Attend industry events, workshops, and
                      seminars. Join online communities and forums dedicated to music and networking.</small>
                  </p>
                  <p className="fs-4 mb-0" style={{ color: 'white', fontSize: '1.3rem' }}>
                    Engaging with Fans
                  </p>
                  <p className="lh-sm text-justify" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Build and nurture relationships with your fan base. Use digital marketing to promote your
                      music. Engage with fans through comments, live sessions, and feedback mechanisms.</small>
                  </p>
                  <p className="fs-4 mb-0 text-white" style={{ fontSize: '1.3rem' }}>
                    Staying Updated
                  </p>
                  <p className="lh-sm text-justify" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Monitor industry trends and shifts. Keep an eye on emerging artists and successful strategies.
                      Adjust your music and marketing strategies based on consumer preferences.</small>
                  </p>
                  <p className="fs-4 mb-0 text-white" style={{ fontSize: '1.3rem' }}>
                    Persistence and Dedication
                  </p>
                  <p className="lh-sm text-justify" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Be prepared for setbacks and rejections. Stay dedicated and passionate about your craft.
                      Understand that success in the music industry often requires patience and resilience.</small>
                  </p>
                </div>
                <div className="col-lg-4 col-xl-4 col-md-12 d-flex imgwidth d-none d-lg-block px-5 " id="imgwidth"
                  style={{ position: 'relative' }}>
                  <Image unoptimized src={cover5} height="auto" width="auto" id="imgheight" className="w-75 h-75 object-fit-cover" alt="image" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                  />
                </div>
                <div className="col-12 col-lg-6 col-xl-6 col-md-12 d-flex  d-block d-lg-none mb-3 mt-2">
                  <Image src={cover5} height="auto" width="auto" id="imgheight" className=" w-75  w-md-50  h-50 m-auto p-auto"
                    alt="image" />
                </div>
                <div className="col-12 col-lg-4 col-xl-4 col-md-12 px-4  px-lg-2">
                  <p className="fs-4 mb-0 text-white" style={{ fontSize: '1.3rem' }}>
                    Collaborations and Opportunities
                  </p>
                  <p className="lh-sm text-justify" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Collaborate with fellow artists to reach new audiences. Seek potential partnerships or
                      sponsorships. Use collaborations as a platform to showcase versatility.</small>
                  </p>
                  <p className="fs-4 mb-0 text-white" style={{ fontSize: '1.3rem' }}>
                    Guidance and Continuous Learning
                  </p>
                  <p className="lh-sm text-justify" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Seek guidance from mentors or industry professionals. Attend workshops, webinars, or courses to hone
                      your skills. Always be open to feedback and adapt accordingly.</small>
                  </p>
                  <p className="fs-4 mb-0 text-white" style={{ fontSize: '1.3rem' }}>
                    Online Presence and Branding
                  </p>
                  <p className="lh-sm text-justify" style={{ fontSize: '1.3rem', color: 'rgb(172, 172, 172)' }}>
                    <small>Establish a professional online presence. Utilize social media platforms effectively. Launch a
                      personal website or blog for deeper engagement. Feature your work on music streaming platforms.</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopUpForm/>
    </>
  );
}
