"use client"
import Image from "next/image";
import React from "react";
import { BsInstagram, BsSpotify } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import artist from "../../assets/Blog/ayush.webp";
import { FaShareSquare } from "react-icons/fa";

const ArtistCard = () => {
  return (
    <>
      <div
        className="w-100 d-block mx-2  justify-content-center align-items-center position-relative"
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
          borderRadius: "10px",
          // minWidth: "320px",
          // width:"auto",
          height: "auto",
          background: "white",
          width:"auto",
          
        }}
      
      >
        <div style={{ width: "100%", height: "60vh", textAlign: "center" }}>
          <Image
            src={artist}
            alt="Artist"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius:"10px",
              borderTopRightRadius:"10px",

              
            }}
          />
        </div>
        <div
          className="position-absolute w-100"
          style={{ textAlign: "center", top: "50%" }}
        >
        <button
      className="py-2 rounded-pill"
      style={{
        width: "50%",
        
        background: "#ffffff",
        color: "#784f5a",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "none",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#f8f9fa";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#ffffff";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      Follow
    </button>
        </div>

        <div
          className="position-absolute w-100 d-block d-md-none"
          style={{ textAlign: "center", top: "45%" }}
        >
          <button
            className="py-1"
            style={{
              background: "transparent",
              cursor:"pointer",
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "bold",
              border: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background 0.3s, transform 0.3s",
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
            }}
          >
            Ayush
          </button>
        </div>

        
        <div className="mt-3 ps-4">
          <h6
            className=""
            style={{
              fontWeight: "bold",
              color: "#784f5a",
              textAlign: "start",
            }}
          >
            ABOUT
          </h6>
          <p
            className="fs"
            style={{
              fontSize: "0.75rem",
              lineHeight: "1rem",
              paddingRight: "1rem",
            }}
          >
            &quot;Art&quot; represents the creative expression of human imagination and
            skill. It transcends boundaries, serving as a universal language
            that communicates emotions, ideas, and cultural identities. Through
            aart, individuals weave narratives, evoke emotions, and challenge
            perceptions, enriching the human experience
          </p>
        </div>
        <div className="px-4 mt-2" style={{ fontSize: "0.9rem" }}>
          <div
            className="d-flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div>Followers</div>
            <div>123</div>
          </div>
          <div
            className="d-flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div>Following</div>
            <div>123</div>
          </div>
        </div>
        <div
          className="d-flex my-3 pb-4"
          style={{ alignItems: "center", justifyContent: "space-evenly" }}
        >
          <FaYoutube
            style={{ color: "red", fontSize: "1.5rem", cursor: "pointer" }}
          />
          <BsSpotify
            style={{ color: "green", fontSize: "1.5rem", cursor: "pointer" }}
          />
          <BsInstagram
            style={{ color: "#57363d", fontSize: "1.5rem", cursor: "pointer" }}
          />
        </div>
        <FaShareSquare
        className="d-md-none d-block"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: 'white',
          fontSize: '20px',
        }}
      />
      </div>
    </>
  );
};

export default ArtistCard;
