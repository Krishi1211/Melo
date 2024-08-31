"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaPlay } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";

const FeedbackCard = ({ artistName }) => {
  return (
    <div
      className="mb-2 m-md-2 p-2 text-black card border-0 rounded-4"
      style={{
        cursor: "pointer",
        height: "300px",
        backgroundColor: "#333333",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
         transition: 'transform 0.2s ease-in-out'
      }} 
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div className="h-75">
        <Image
          className="rounded-4 h-100 rounded-bottom-0"
          style={{ width: "100%" }}
          src={artistName}
          alt={"name"}
        />
      </div>

      <div className="h-25 d-flex justify-content-between align-items-center px-5">
        <h5
          className="fw-bold text-white text-center mt-2"
          style={{ textWrap: "nowrap" }}
        >
          Ayush
        </h5>
        <div>
          <FaPlay style={{color:"#b9de22", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
