"use client";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import "./ArtistsSwiper.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function ArtistsSwiper() {
  const [artists, setArtists] = useState([]);
  const swiperRef = useRef(null);

  const getArtists = async () => {
    try {
      const response = await axios.get(
        `https://api.melo.works/user/website/featuredArtist?count=16`
      );
      if (response.status === 200) {
        setArtists(response?.data?.featuredArtists);
      }
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="text-white bg-transparent border-0"
        style={{ cursor: "pointer" }}
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      >
        <IoIosArrowBack size={30} color=" #b9de22 " />
      </button>
      <Swiper
        ref={swiperRef}
        className="px-2 px-lg-3 pt-md-5 pt-0 pb-5 "
        spaceBetween={30}
        slidesPerView={4}
        modules={[Navigation, Scrollbar, Autoplay]}
        // navigation
        pagination={{ clickable: true, type: "bullets" }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000} // Transition speed in milliseconds
        breakpoints={{
          767: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {artists.map((artist, index) => (
          <SwiperSlide key={index}>
            <div
              className="blackBg  text-black card border-0 rounded-4"
              style={{ minHeight: "20rem" }}
            >
              <Image
                className="rounded-4 h-50 object-fit-cover rounded-bottom-0"
                width={300}
                height={0}
                src={`https://api.melo.works/file/noauth/getFile?path=${artist.artistImage}`}
                alt={artist.artistName}
              />
              <h5 className="fw-bold text-white text-center mt-2">
                {artist.artistName}
              </h5>
              <div className="d-flex justify-content-evenly p-2 pb-3">
                <Link
                  href={
                    artist?.facebookArtistURL === null
                      ? ""
                      : artist?.facebookArtistURL
                  }
                  target="_blank"
                  className={`${artist?.facebookArtistURL ? "social-icon" : "d-none"
                    }`}
                >
                  <FaFacebookF className="greenTxt" />
                </Link>
                <Link
                  href={
                    artist?.instagramArtistURL === null
                      ? ""
                      : artist?.instagramArtistURL
                  }
                  target="_blank"
                  className={`${artist?.instagramArtistURL ? "social-icon" : "d-none"
                    }`}
                >
                  <FaInstagram className="greenTxt" />
                </Link>
                <Link
                  href={
                    artist?.youtubeArtistURL === null
                      ? ""
                      : artist.youtubeArtistURL
                  }
                  target="_blank"
                  className={`${artist?.youtubeArtistURL ? "social-icon" : "d-none"
                    }`}
                >
                  <FaYoutube className="greenTxt" />
                </Link>
                <Link
                  href={
                    artist?.twitterArtistURL === null
                      ? ""
                      : artist.twitterArtistURL
                  }
                  target="_blank"
                  className={`${artist?.twitterArtistURL ? "social-icon" : "d-none"
                    }`}
                >
                  <FaTwitter className="greenTxt" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="text-white bg-transparent border-0"
        style={{ cursor: "pointer" }}
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        <IoIosArrowForward size={30} color=" #b9de22 " />
      </button>
    </div>
  );
}
