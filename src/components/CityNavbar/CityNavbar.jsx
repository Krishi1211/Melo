import React from "react";
import Image from "next/image";
import melo from "../../assets/images/path-114.png";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./CityNavbar.module.css";

const CityNavbar = () => {
  return (
    <>
      <div
        className=" d-sm-flex d-block justify-content-sm-between   px-md-5 px-3  pt-3 align-items-center justify-content-center "
        style={{
          backgroundColor: "transparent",
          position: "relative",
          zIndex: "3",
        }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <Image
            src={melo}
            width="auto"
            height="auto"
            className="logo object-fit-contain"
            alt="Melo"
          />
        </div>
        <div
          className="mt-sm-0 my-2 col-lg-4 d-flex justify-content-center "
          style={{}}
        >
          <input
            type="text"
            className={` position-relative bg-transparent fw-bold border border-white text-white rounded-4 ${styles.searchInput}`}
            style={{
              padding: ".5rem 2.5rem 0.5rem 2.5rem !important",
            }}
            placeholder="Search for Artist"
          />

          {/* <span
            className="input-group-text"
            style={{
              position: "absolute",
              fontSize: "1rem",
              right: "52%",
              top: "60%",
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaSearch />
          </span> */}
        </div>

        <div className="d-none d-md-block"></div>
      </div>
    </>
  );
};

export default CityNavbar;
