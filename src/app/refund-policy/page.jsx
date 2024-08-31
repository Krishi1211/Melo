import { Montserrat } from '@next/font/google';
import React from 'react'

export const metadata = {
    title: "Refund Policy | Music Distribution | Sell Music Online",
    description: "Bombay-Bred | Indian & International platforms | Caller tunes for Indian telecom | Easy migration | Easier royalty payout.",
    openGraph: {
        images: ['https://melo.works/assets/images/favicon.png']
    },
}
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700']
});

export default function page() {
    return (
        <>
            <section className="py-5" id="">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10 text-justify">
                            <h4 className={`mb-4 display-4 ${montserrat.className}`}>
                                Refund Policy</h4>
                            <p className="display-7"><strong>Refunds (if applicable)</strong></p>
                            <p className="display-7">Melo features a 30-day money back guarantee on our
                                distribution services (Forever Release, Release
                                Covers &amp; Label Subscription).</p>
                            <ul>
                                <li className="display-7">If you are facing problems with our website or
                                    services, please contact us on <a className='text-decoration-none greenTxt' href="mailto:hi@melo.works">hi@melo.works</a> or contact us
                                    via <a className='text-decoration-none greenTxt' href="https://melo.works/contact">https://melo.works/contact</a>.</li>
                                <li className="display-7">Partial Refunds (50%) are applicable if the Cover
                                    License is rejected or not available.</li>
                                <li className="display-7">Full Refunds are applicable if your release
                                    doesn&rsquo;t match the required standards or is
                                    rejected by the platforms for Copyright Infringement.</li>
                                <li className="display-7">
                                    Furthermore, it is expressly understood that in the event a Cover song has been available for
                                    distribution for a period exceeding 6 months, no refund shall be initiated, as the fees
                                    associated with the cover license have been remitted. Any decisions regarding the removal or
                                    resolution of conflicts related to such Cover songs remain the sole prerogative of the original
                                    Label/Artists.
                                </li>
                            </ul>
                            <p className="display-7">Melo doesn&rsquo;t provide any refunds or guarantees for
                                our promotion services (Promote).</p>
                            <ul>
                                <li className="display-7">Promotions are based on the quality of content
                                    provided by the user.</li>
                                <li className="display-7">If you are facing issues with your ongoing promotion,
                                    please contact us on <a href="mailto:hi@melo.works" className='text-decoration-none greenTxt'>hi@melo.works</a> or contact us via <a
                                        href="https://melo.works/contact" className='text-decoration-none greenTxt'>https://melo.works/contact</a>.</li>
                                <li className="display-7">Partial Refunds (50%) are applicable if your content
                                    gets rejected by the ad platforms for
                                    Copyright Infringement.</li>
                                <li className="display-7">Full Refunds are applicable if we are not able to
                                    complete your promotions within a 30-day
                                    period (this is valid only for YouTube &amp; Spotify Promotions).</li>
                                <li className="display-7"> Full Refunds are applicable if we are not able to
                                    complete your promotions within a 60-day
                                    period (this is valid only for Gaana Promotions).</li>
                            </ul>
                            <p className="display-7">If you are approved, then your refund will be processed, a
                                pay-out link will be sent to you, or the
                                credit will automatically be applied to your credit card or original method of payment, within a
                                10-14 working days.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}
