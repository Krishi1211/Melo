"use client";
import Image from "next/image";
import React from "react";
import submit from "../../assets/images/button/Path 232.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import styles from "./ContactForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Montserrat } from "@next/font/google";
import "./ContactForm.css"
import { domain } from "@/app/city/service/api";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700']
});

export default function ContactForm() {
  const path =  usePathname();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phoneNumber: Yup.string()
        .required("Mobile is required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          `${domain}/user/website/contact`,
          {...values, path}
        );
        toast.success("Thankyou For Contacting Melo!", {
          closeButton: false,
          autoClose: 2500,
        });
        resetForm();
      } catch (err) {
        console.log("Error:", err);
      }
    },
  });

  const handleMobile = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    formik.setFieldValue("phoneNumber", numericValue);
  };

  return (
    <>
      <div className="container">
        <div
          className="d-flex py-5 justify-content-between align-items-center flex-column flex-md-row"
          // style={{ padding: "5rem 0rem" }}
        >
          <div className="pe-md-3 pe-0 py-md-4 pt-0 pb-4 d-flex flex-column align-items-center">
            <h1 className={`display-4 ${montserrat.className}`}>Get in touch</h1>
            <div className="d-flex">
              <Link
                href="https://www.instagram.com/melo.works/"
                target="_blank"
              >
                <div
                  style={{ width: "3.2rem", height: "3.2rem" }}
                  className={`m-2 bg-transparent p-1 rounded-circle border-2 d-flex justify-content-center align-items-center ${styles.iconButton}`}
                >
                  <FaInstagram className={`socialicon ${styles.socialIcon}`} />
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/melo.works.official"
                target="_blank"
              >
                <div
                  style={{ width: "3.2rem", height: "3.2rem" }}
                  className={`m-2 bg-transparent p-1 rounded-circle border-2 d-flex justify-content-center align-items-center ${styles.iconButton}`}
                >
                  <FaFacebook className={`socialicon ${styles.socialIcon}`} />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/showcase/melo-works/"
                target="_blank"
              >
                <div
                  style={{ width: "3.2rem", height: "3.2rem" }}
                  className={`m-2 bg-transparent p-1 rounded-circle border-2 d-flex justify-content-center align-items-center ${styles.iconButton}`}
                >
                  <FaLinkedin className={`socialicon ${styles.socialIcon}`} />
                </div>
              </Link>

              <Link href="https://twitter.com/melo_works" target="_blank">
                <div
                  style={{ width: "3.2rem", height: "3.2rem" }}
                  className={`m-2 bg-transparent p-1 rounded-circle border-2 d-flex justify-content-center align-items-center ${styles.iconButton}`}
                >
                  <FaXTwitter className={`socialicon ${styles.socialIcon}`} />
                </div>
              </Link>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="px-0 ps-md-3">
            <div>
              <p className="text-center text-md-left">
                <span className="text-black">
                  By continuing you agree to our{" "}
                  <Link
                    className="greenTxt"
                    style={{ textDecoration: "none" }}
                    href="/terms-and-conditions"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="greenTxt"
                    style={{ textDecoration: "none" }}
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </p>
              <input
                type="text"
                className="form-control blackBg greenTxt mt-2"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Name"
                autoComplete="off"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="errorMsg">{formik.errors.name}</div>
              ) : null}
              <input
                type="number"
                className="form-control blackBg greenTxt mt-2"
                name="phoneNumber"
                onChange={handleMobile}
                // onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // maxLength={10}
                value={formik.values.phoneNumber}
                placeholder="Mobile"
                autoComplete="off"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="errorMsg mb-2">{formik.errors.phoneNumber}</div>
              ) : null}
              <input
                type="email"
                className="form-control blackBg greenTxt mt-2"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email"
                autoComplete="off"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="errorMsg mb-2">{formik.errors.email}</div>
              ) : null}
              <div className="d-flex justify-content-md-end justify-content-center mt-3 mt-lg-3">
                <button type="submit" className="border-0 bg-transparent">
                  <Image unoptimized src={submit} className="img-fluid" alt="Submit" width={115} height={28} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
