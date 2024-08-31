"use client"
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Fb_Pixel = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
  
    useEffect(() => {
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init(process.env.NEXT_PUBLIC_FB_PIXEL_ID); //don't forget to change this
          // ReactPixel.init(566826715611641); //don't forget to change this
          ReactPixel.pageView();
        });
    }, [pathname, searchParams]);
  
    return null;
}

export default Fb_Pixel;