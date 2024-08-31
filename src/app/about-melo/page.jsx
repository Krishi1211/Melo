import Image from 'next/image'
import styles from './aboutMelo.module.css'
import logo from "@/assets/images/path-112.png"

export const metadata = {
    title: 'Melo | About Us',
    description: 'Melo is an all-in-one music distribution platform. It helps you get recognized and known worldwide and get personalized music labels.',
    openGraph: {
        images: ['https://melo.works/assets/images/favicon.png']
    },
}
export default function page() {


    return (
        <>
            <div className="d-flex flex-lg-row flex-column">
                <div className="blackBg w-lg-50 w-100 d-flex justify-content-lg-start justify-content-center p-5">
                    <Image className="object-fit-contain pt-4" style={{ width: '17rem' }} height={150} src={logo} alt="Melo" />
                </div>
                <div className="text-uppercase p-md-5 p-3 w-lg-50 w-100">
                    <h2 className={`fw-bold py-md-3 ps-md-5 mb-3 pe-md-4 p-0 ${styles.subtext}`}
                    >Want to get recognised and known worldwide by your melodious music? Your search for a perfect music distribution platform ends right <u>here</u>.</h2>
                </div>
            </div>
            <section className="">
                <div className="greenBg p-4">
                    <h1 className={`text-uppercase text-center ${styles.bolded} ${styles.heading} m-auto`} >What makes Melo the all-in-one music distribution platform for you?</h1>
                </div>

                <div className="d-flex text-uppercase flex-lg-row flex-column">
                    <div className="blackBg text-light p-5 pb-4 pe-4 w-lg-50 w-100">
                        <h1 className={`${styles.bolded} ${styles.heading}`}>THEN:</h1>
                        <ul style={{ fontWeight: '600' }} className='text-uppercase fs-md-5 fs-6 mt-3'>
                            <li>Hassle in getting a personalised music label </li>
                            <li>Lack on pocket-friendliness in promoting music</li>
                            <li>Ineffective results in terms of recognition and promotion of music</li>
                            <li>Extensive documentation and verification issues</li>
                            <li>Negligible accountability</li>
                        </ul>
                    </div>

                    <div className="w-100 w-lg-50 p-5 px-3 pb-4">
                        <h1 className={`${styles.bolded} text-uppercase ${styles.heading}`}>Melo changes the whole scenario for the good:</h1>
                        <ul style={{ fontWeight: '600' }} className='text-uppercase fs-md-5 fs-6 mt-3'>
                            <li>Absolutely smooth and hassle-free process of getting a personalised music label</li>
                            <li>Reasonable packages available for music promotion</li>
                            <li>Brilliant results in terms of music recognition and promotion</li>
                            <li>No documentation and verification issues</li>
                            <li>Full accountability</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='text-center greenBg p-5'>
                <h1 className={`${styles.heading} ${styles.bolded}`}>OUR TARGET</h1>
                <div className="text-uppercase px-md-5 px-2 w-100 m-auto pt-4">
                    <p>To make your music reach the top music streaming digital platforms like Spotify, Apple Music, Gaana, Wynk and many more. because we know what an absolute feeling of happiness and delight it is to see your song being a part of peoples’ playlist.</p>
                    <p className={`pt-4 ${styles.bolded}`}>Let the world enjoy the beats and rhythms of your music!</p>
                </div>
            </section>
        </>
    )
}
