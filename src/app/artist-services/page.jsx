import React from 'react'
import styles from './artistServices.module.css'

import Image from 'next/image'
import card1 from '@/assets/images/bg/bg-1.jpg';
import card2 from '@/assets/images/bg/bg-2.jpg';
import card3 from '@/assets/images/bg/bg-3.jpg';
import card4 from '@/assets/images/bg/bg-4.jpg';
import ContactForm from '@/components/ContactForm/ContactForm'
// import Marquee from '@/components/Marquee/Marquee'

export const metadata = {
    title: 'Melo | Our Artist Services',
    description: 'Melo provides an extensive range of artist services to our budding and super-talented artists because it knows that all they need is a good mentoring platform.',
    openGraph: {
        images: ['https://melo.works/assets/images/favicon.png'],
      },
   
}
export default function page() {
    const cardData = [
        {
            image: card1,
            head: 'Consultancy And Guidance',
            text: 'We know the roller coaster of emotions your heart and mind are riding on when making decisions regarding your album/single release. Or when you have to make a debut as a budding music artist. However, we can assure you that Melo will be right here to comfort you with the best solutions and answers to all your doubts initially and at every step of your journey from being an amateur to a professional artist.'
        },
        {
            image: card2,
            head: 'Pitching Your Music To Stores And Platforms',
            text: 'Need help in experiencing the bliss to see your tracks in the editorial playlists of various online music stores and streaming platforms? Melo is here at your service to make this dream of yours come true! Melo is the global DIY platform for independent artists to build audiences and careers -- with technology and services across distribution, publishing administration, and a range of promotional services.'
        },
        {
            image: card3,
            head: 'Boosting Online Presence',
            text: 'Our team here at Melo works on strengthening your music circulation game and letting your music make people recognize you. We specifically work on boosting and fueling up your social media presence as an artist for people to know you and form a connection with your music so that they enjoy it better. Then, once your music is out there, we make sure it gets heard.'
        },
        {
            image: card4,
            head: 'Cover Licensing',
            text: `Want to cover a song of your favourite artist but are sceptical about the legalities of it? Melo got you covered, as we get the licensing part done with utmost accuracy and efficiency so that you can proceed further on your part as an artist. Who knows, maybe your voice pleases the song's original artist, and you get promoted in the best way possible? Share your music and grow your fan base. Manifesting the best!`
        },
    ]

    return (
        <>
            
            <section className={`d-flex align-items-center flex-lg-row flex-column justify-content-center w-100 text-light p-md-5 p-4 ${styles.bgImg}`}>
                <div className="text-center pe-lg-5 pe-0 w-100">
                    <h1 style={{ fontWeight: '900', fontSize: '3.2rem' }} className='mb-3'>ARTIST SERVICES</h1>
                    <h4 className=''>WHATEVER YOU NEED, WE ARE HERE</h4>
                </div>
                <div className={`${styles.glassMorph} my-lg-0 my-3 fs-md-5 fs-6 rounded-2 w-100 me-0 me-lg-4 p-lg-5 p-4 text-center`}>
                    <p className='mb-0 fs-6 lh-lg'>
                        We at Melo strongly believe that artists can only expect outstanding results if nurtured with incredibly extraordinary efforts. Therefore, to convert our belief into action, we present a range of unique services for our budding and super-talented music artists because we know that all they need is an excellent mentoring platform like Melo, with which they are all set to conquer the world of music.
                    </p>
                </div>

            </section>

            <section className='bg-black text-light p-4'>
                <h4 className='text-center pt-3 fw-bold'>WHAT WE DO</h4>
                <div className="pt-0 d-flex justify-content-center ">
                    <div className="d-flex flex-wrap justify-content-center align-items-center flex-column flex-lg-row p-3 p-md-4 pt-0"
                    >
                        {
                            cardData.map((item, index) => (
                                <>
                                    <div
                                        key={index}
                                        className={`d-flex flex-grow-1 flex-lg-grow-0 ${styles.cardSize} py-4 p-md-5 p-3  m-1 flex-column`}
                                    >
                                        <Image src={item.image} width={500} height={290}
                                            className='rounded-2 border-1 object-fit-cover'
                                            alt='melo'
                                        />
                                        <div className="my-md-3 my-2 text-center ">
                                            <h4 className='greenTxt fw-bold mt-2'>{item.head}</h4>
                                            <p className='fs-6 fs-md-5 text-justify'>{item.text}</p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }


                    </div>
                </div>
            </section>
            {/* <Marquee/> */}
            <div className="py-4">
                <ContactForm />
            </div>


        </>
    )
}
