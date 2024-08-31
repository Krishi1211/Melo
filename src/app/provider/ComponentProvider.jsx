"use client";
import ContactForm from '@/components/ContactForm/ContactForm';
import PhoneFloat from '@/components/PhoneFloat/PhoneFloat';
// import PopUpForm from '@/components/PopUpForm/PopUpForm';
import SecondHeader from '@/components/SecondHeader/SecondHeader';
import WhatsappFloat from '@/components/WhatsappFloat/WhatsappFloat';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';
import Marquee from '@/components/Marquee/Marquee';
import { addUTM } from '../services/api';
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';
import Fb_Pixel from '@/components/Fb_Pixel/Fb_Pixel';

export default function ComponentProvider({ children }) {
    const path = usePathname();
    // console.log(path);
    const specialRoutes = ['/landing'];
    const isSpecialRoute = specialRoutes.includes(path);

    const queries = useSearchParams();
    const utmSource = queries.get('utm_source');
    const utmMedium = queries.get('utm_medium');
    const utmContent = queries.get('utm_content');


    useEffect(() => {
        console.log(utmSource && utmMedium && utmContent);
        if (utmSource && utmMedium || utmContent) {
            addUTM(utmSource, utmMedium, utmContent);
        }
    }, []);

    // https://test-api.melo.works/pageClick/addPageClick

    return (
        <>
            <GoogleAnalytics />
            <Suspense fallback={null}>

                {!isSpecialRoute ? <Header /> : <SecondHeader />}

                {children}

                {!isSpecialRoute && <Marquee />}
                {!isSpecialRoute && <ContactForm />}

                <Footer />
                <WhatsappFloat />
                <PhoneFloat />

            </Suspense>
            <Fb_Pixel />

        </>
    )
}
