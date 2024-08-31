import Image from 'next/image';
import weddingImg from '../../assets/Blog/weddingimg.jpg';
import corporateImg from '../../assets/Blog/corporate.png';
import birthdayImg from '../../assets/Blog/birthdaytwo.PNG';
import aishwaryaImg from '../../assets/Blog/aishwarya.webp'
import mohitImg from '../../assets/Blog/mohit.jpg'
import Link from 'next/link';
import styles from './events.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Roboto } from "next/font/google";
const roboto = Roboto({
    subsets: ["latin"],
    weight: ['400', '700']
  });

  export const metadata = {
    title: 'Melo Events | Premium Music Entertainment for Weddings & Corporate Functions',
    description: "Elevate your event with Melo's curated selection of top-tier artists and comprehensive event management services. Experience unforgettable entertainment for weddings, corporate events, and festive celebrations",
    openGraph: {
        images: ['https://melo.works/assets/images/favicon.png']
    },
}

export default function Events() {
    return (
        <>
        <meta property="og:description" content="Acme is a..." />
            <div className="overflow-x-hidden">
                {/* Video  */}
                <section style={{ width: '100vw', height: '100vh' }} className=''>
                    <iframe
                        src="https://www.youtube.com/embed/rBFuGZcjzBI?playlist=rBFuGZcjzBI&autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&rel=0"
                        frameBorder="0"
                        className='w-100 h-100'
                        // height={550}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    >
                    </iframe>
                </section>

                <section className="w-100 px-md-5 px-3 py-4 bg-black">
                    <div className="p-md-3 p-0 container">
                        <h1 className={`mb-5 fw-bold text-white text-center title pt-4 ${roboto.className}`}>
                            Events We Cater To With <span className="fw-bold animatedColorText">Melo</span>
                        </h1>

                        <div className="d-flex flex-lg-row flex-column align-items-center">
                            <div className="col-12 col-lg-6 text-white">
                                <Image
                                    style={{ aspectRatio: '532/360' }}
                                    className="img-fluid pe-lg-4 py-md-4 py-2 ps-0 pe-0 object-fit-cover"
                                    src={weddingImg}
                                    alt="weddingimg"
                                    unoptimized
                                />
                            </div>
                            <div className="text-start text-white">
                                <p className="fs-4 pb-2 mb-0 pt-2">Weddings</p>
                                <div>
                                    <p className="text-white-50"><span className="text-white">Mandap Muhurat: </span>Sanctify your
                                        wedding vows with soulful melodies that match the sanctity of the moment.
                                    </p>
                                    <p className="text-white-50"><span className="text-white">Sangeet: </span>Let us set the stage for a night of dance, music, and revelry that reflects your love story.
                                    </p>
                                    <p className="text-white-50"><span className="text-white">Mehndi: </span>Add a traditional or
                                        modern soundtrack to the colorful expressions of your Mehndi event.
                                    </p>
                                    <p className="text-white-50"><span className="text-white">Reception: </span>off your matrimonial
                                        celebrations with a grand reception filled with music that entertains and enchants.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 d-flex flex-lg-row flex-column-reverse align-items-center">
                            <div className="text-start">
                                <p className="fs-4 pb-2 mb-0 text-white text-start">Corporate Events</p>
                                <div className=''>
                                    <p className="text-white-50"><span className="text-white">Product Launches: </span>Launch your next big idea with a bang, accompanied by music that
                                        amplifies your brand’s message.
                                    </p>
                                    <p className="text-white-50"><span className="text-white">Trade Shows: </span>Stand out in the crowd with live performances
                                        that capture and retain attendee attention.
                                    </p>
                                    <p className="text-white-50"><span className="text-white">Company Milestones: </span>Celebrate your company’s achievements
                                        with music that embodies your corporate ethos.
                                    </p>
                                    <p className="text-white-50"><span className="text-white">Award Ceremonies: </span>Honor outstanding achievements with fanfares
                                        and performances fit for winners.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 text-white">
                                <Image
                                    className="img-fluid px-lg-4 py-md-4 py-2 px-0 p-1 object-fit-cover"
                                    style={{ aspectRatio: '532/360' }}
                                    src={corporateImg}
                                    alt="corporate event"
                                    unoptimized
                                />
                            </div>
                        </div>

                        <div className="d-flex flex-lg-row flex-column align-items-center">
                            <div className="col-12 col-lg-6 text-white">
                                <Image
                                    style={{ aspectRatio: '532/360' }}
                                    className="img-fluid pe-lg-4 py-md-4 py-2 ps-0 pe-0 w-100 h-100 object-fit-cover"
                                    src={birthdayImg}
                                    alt="holiday party"
                                    unoptimized
                                />
                            </div>
                            <div className="text-start">
                                <p className="fs-4 pb-2 mb-0 text-white text-start">Holiday Parties</p>
                                <div>
                                    <p className="text-white-50"><span className="text-white">Birthday Bash & Anniversaries: </span>Mark personal milestones with celebrations that
                                        sparkle with fun and festivity.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-white-50"><span className="text-white">Jubilees: </span>Commemorate significant occasions with grandeur,
                                        reflecting on past glories and future aspirations.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-white-50"><span className="text-white">Cultural Festivals (Diwali, Holi, Navratri): </span>Immerse in the spirit of Indian
                                        festivals with events that embody the essence of these vibrant traditions.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="text-white py-5" style={{ backgroundColor: '#202020' }}>
                    <div className="p-3">
                        <h1 className={`text-center fw-bold title ${roboto.className}`}>
                            Event Mastery for<span className="fw-bold animatedColorText"> Every Milestone</span>
                        </h1>

                        <div className="d-flex justify-content-center flex-md-row flex-column align-items-md-start align-items-center py-5">
                            {/* Aishwarya Card STARTS  */}
                            <div className={`card ${styles.cardSize} m-2`}>
                                <Image
                                    className="img-fluid object-fit-cover rounded-3 w-100 h-75 rounded-bottom-0"
                                    src={aishwaryaImg}
                                    // style={{objectPosition: '-2rem 0rem'}}
                                    alt="aishwarya"
                                    unoptimized
                                />
                                <div className="card-body w-100 pt-3 h-25 rounded-bottom-3 text-white bg-black d-flex flex-column justify-content-center align-items-center">

                                    <div>
                                        <h5 className="mb-3 text-center">
                                            <strong>Aishwarya Anand</strong>
                                        </h5>
                                        <p className="d-flex justify-content-center align-items-center" style={{ fontSize: '.7rem' }}>Bollywood, Classical, Punjabi, Ghazal, Folk</p>
                                    </div>
                                    <div className="w-100">

                                        <div className="d-flex justify-content-center p-2 ">
                                            <div className="">
                                                <Link href="https://www.facebook.com/AishwaryaAnandLive" target="_blank" className="social-icon">
                                                    <FaFacebookF color='#b9de22' />
                                                </Link>
                                            </div>

                                            <div className="mx-4">
                                                <Link href="https://www.instagram.com/aishwaryaanandofficial/" target="_blank" className="social-icon">
                                                    <FaInstagram color='#b9de22' />
                                                </Link>
                                            </div>

                                            <div className="">
                                                <Link href="https://www.youtube.com/channel/UCOdEzFGKzeqEZftl8F1K5Iw" target="_blank" className="social-icon">
                                                    <FaYoutube color='#b9de22' />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* Aishwarya Card ENDS  */}

                            {/* Mohit Card STARTS  */}
                            <div className={`card ${styles.cardSize} m-2`}>
                                <Image
                                    className="img-fluid object-fit-cover rounded-3 h-75 w-100 rounded-bottom-0"
                                    src={mohitImg}
                                    alt="mohit lalwani"
                                    unoptimized
                                />
                                <div className="card-body pt-3 rounded-bottom-3 h-25 text-white bg-black d-flex flex-column justify-content-center align-items-center">
                                    <div>
                                        <h5 className="mb-3 text-center">
                                            <strong>Mohit Lalwani</strong>
                                        </h5>
                                        <p className="d-flex justify-content-center align-items-center" style={{ fontSize: '.7rem' }}>Bollywood, Sindhi, Folk, Punjabi</p>
                                    </div>

                                    <div className="w-100">
                                        <div className="d-flex justify-content-center p-2 ">
                                            <div className="">
                                                <Link href="https://www.facebook.com/mohitlalwaniofficial?mibextid=ZbWKwL" target="_blank" className="social-icon">
                                                    <FaFacebookF color='#b9de22' />
                                                </Link>
                                            </div>

                                            <div className="mx-4">
                                                <Link href="https://www.instagram.com/mohitlalwaniofficial/?igshid=MWZjMTM2ODFkZg" target="_blank" className="social-icon">
                                                    <FaInstagram color='#b9de22' />
                                                </Link>
                                            </div>

                                            <div className="">
                                                <Link href="https://youtube.com/@mohitlalwani1941?si=aMA9GV0N7yEa-sfL" target="_blank" className="social-icon">
                                                    <FaYoutube color='#b9de22' />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* Mohit Card ENDS  */}
                        </div>
                    </div>
                </section >

                <section className="bg-black  w-100 d-flex flex-column justify-content-center align-items-center py-5">
                    <div className="container">
                        <h1 className={`text-center text-white mb-5 fw-bold title ${roboto.className}`}>
                            Turning Moments into<span className="fw-bold animatedColorText"> Memories</span>
                        </h1>

                        <div className="px-md-1 d-flex justify-content-center align-items-center flex-column flex-lg-row">
                            <div className="">
                                <div className="">

                                    <p className="text-start fs-4 mb-0 text-white" style={{}}>
                                        Signed & Vetted Artists
                                    </p>
                                    <p className="lh-sm text-white-50">
                                        We boast a handpicked selection of musicians who are not just performers but
                                        storytellers. Each artist is thoroughly vetted to ensure they align with our
                                        commitment to excellence and can deliver the perfect soundtrack to your special
                                        event.
                                    </p>
                                </div>
                                <div className="">

                                    <p className="text-start fs-4 mb-0 text-white" style={{}}>
                                        Low Commissions & Affordable Prices
                                    </p>
                                    <p className="lh-sm text-white-50">
                                        Enjoy the luxury of premium entertainment without the hefty price tag. Our
                                        transparent pricing and low commission structure ensure that you receive
                                        unbeatable value, allowing you to allocate your budget where it matters most.
                                    </p>
                                </div>
                                <div className="">

                                    <p className="text-start fs-4 mb-0 text-white" style={{}}>
                                        End to End Event Logistics & Planning
                                    </p>
                                    <p className="lh-sm text-white-50 ">
                                        Leave the intricacies of event planning to us. From the initial concept to the final
                                        encore, our team handles every detail with precision. Logistics, schedules, technical
                                        requirements - we cover it all to give you peace of mind.
                                    </p>
                                </div>
                            </div>

                            <Image
                                src="https://images.pexels.com/photos/3563171/pexels-photo-3563171.jpeg?auto=compress&cs=tinysrgb&lazy=load"
                                width={100}
                                height={500}
                                unoptimized
                                // style={{ height: '80vh', width: '30vw' }}
                                className="object-fit-cover mx-lg-4 mx-md-3 mx-0 my-4 my-lg-0"
                                alt="image"
                            />

                            {/* <div className="col-12 col-lg-6 col-md-12 d-flex  d-block d-lg-none mb-3 mt-2">
                                <Image src="https://images.pexels.com/photos/3563171/pexels-photo-3563171.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" id="imgheight" className=" w-75  w-md-50  h-50 m-auto p-auto" alt="image" />
                            </div> */}

                            <div className="d-flex align-self-baseline flex-column">

                                <p className="fs-4 mb-0 text-white text-start">
                                    Pre-Packaged Deals & IPs
                                </p>
                                <p className="lh-sm text-white-50">
                                    Choose from our selection of pre-packaged deals designed to suit any theme or occasion.
                                    These carefully crafted experiences come complete with our Intellectual Properties
                                    (IPs) that add an exclusive edge to your event.
                                </p>

                                <p className="fs-4 mb-0 text-white text-start" >
                                    Live Broadcasting on YouTube / Facebook / Zoom
                                </p>
                                <p className="lh-sm text-white-50">
                                    Extend your event&apos;s reach with our live broadcasting capabilities. Share your special
                                    moments in real time across YouTube, Facebook, and Zoom, connecting with a wider audience
                                    and adding a modern twist to traditional celebrations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                
            </div >

        </>
    )
}
