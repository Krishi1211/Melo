
"use client"
import React, { useEffect, useState } from "react";
import { Dialog } from 'primereact/dialog';
// import styles from "./ContactForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { Montserrat } from "@next/font/google";
import { domain } from "@/app/city/service/api";
import submit from "../../assets/images/button/Path 232.png";
import Link from "next/link";
import Image from "next/image";
import './PopUpForm.css'
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700']
});

export default function PopUpForm() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState('center');
    const path = usePathname();
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
                if(response.status === 200){
                    toast.success("Thankyou For Contacting Melo!", {
                        closeButton: false,
                        autoClose: 2500,
                    });
                    resetForm();
                    setVisible(false);
                }
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

    const show = (position) => {
        setPosition(position);
        setVisible(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            show('center');
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Dialog style={{
                boxShadow: '0px 0px 4px rgb(165 198 30)',
            }}
                className="bg-black rounded-2 p-4 col-lg-5 col-md-8 col-11" visible={visible} position={position} dismissableMask={true} onHide={() => { if (!visible) return; setVisible(false); }} draggable={false} resizable={false}>
                <div className="mt-3">
                    <h1 className={`fs-2 title text-white fw-bold ${montserrat.className} text-center`}>Get Started with <span className={`fw-bold ${montserrat.className}`}>Melo</span></h1>
                    <form onSubmit={formik.handleSubmit} className="px-0 ps-md-3">
                        <div className="inputSize">
                            <p style={{ fontSize: '.9rem' }} className="text-center text-md-left">
                                <span className="text-white">
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
                                className="form-control text-black bg-light"
                                name="name"
                                style={{ minHeight: '1rem !important' }}
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
                                className="form-control text-black bg-light"
                                style={{ minHeight: '1rem !important' }}
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
                                className="form-control text-black bg-light"
                                name="email"
                                style={{ minHeight: '1rem !important' }}
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
            </Dialog>
        </>
    )
}
