"use client"
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { domain } from '@/app/city/service/api';
import './LandingForm.css'
import { Montserrat } from "@next/font/google";
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/primereact.min.css";

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    mobileNumber: Yup.string().matches(/^[0-9]+$/, 'Must be only digits')
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits')
        .required('Mobile number is required'),
    interest: Yup.array()
        .min(1, 'At least one interest must be selected')
        .required('Interest is required'),
    message: Yup.string(),
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700']
});

export default function LandingForm() {
    const [selectedInterests, setSelectedInterests] = useState([]);

    const interestsArr = [
        'Video Production',
        'Mix Master',
        'Music Production',
        'Music Distribution',
        'Promotions',
    ];

    const panelFooterTemplate = () => {
        const length = selectedInterests ? selectedInterests.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    };

    const handleInterestChange = (selectedOptions) => {
        // const interestsString = selectedOptions; // Join selected options into a comma-separated string
        // console.log(interestsString)
        setSelectedInterests(selectedOptions);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobileNumber: '',
            interest: [], // Initialize as an empty array
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const interestsString = selectedInterests.join(','); // Convert array to comma-separated string
                const response = await axios.post(`${domain}/landing/newArtist`,
                    {
                        ...values, interest: interestsString,
                    });
                if (response.status === 200) {
                    toast.success('Thankyou For Contacting Melo!');
                    resetForm();
                    setSelectedInterests([]); // Reset the state if you're still using it
                }
            } catch (err) {
                toast.error('Form submission failed!');
                console.error(err.message);
            }
        },
    });


    return (
        <>

            <div className="bg-black d-lg-flex d-none flex-column align-items-center justify-content-center col-lg-4 col-12 px-4" style={{ height: '100vh' }}>
                <h3 className={`fw-bold text-white pb-3 ${montserrat.className} w-100`}>Get Started For <span className='greenTxt fw-bolder'>Free</span></h3>
                <div className="w-100">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className={`bg-white text-black form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                name="name"
                                placeholder='Name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="errorMsg">{formik.errors.name}</div>
                            ) : null}
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                className={`bg-white text-black form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                placeholder='Email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="errorMsg">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                className={`bg-white text-black form-control ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'is-invalid' : ''}`}
                                id="mobileNumber"
                                name="mobileNumber"
                                placeholder='Mobile Number'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.mobileNumber}
                            />
                            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                                <div className="errorMsg">{formik.errors.mobileNumber}</div>
                            ) : null}
                        </div>

                        <div className="mb-3">
                            {/* <input
                                type="text"
                                className={`bg-white text-black form-control ${formik.touched.interest && formik.errors.interest ? 'is-invalid' : ''}`}
                                id="interest"
                                name="interest"
                                placeholder='Interest'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.interest}
                            />
                            {formik.touched.interest && formik.errors.interest ? (
                                <div className="errorMsg">{formik.errors.interest}</div>
                            ) : null} */}
                            <div className="card d-flex justify-content-center">

                                <MultiSelect
                                    name='interest'
                                    value={selectedInterests} // Ensure selectedInterests is an array

                                    options={interestsArr}
                                    onChange={(e) => {
                                        handleInterestChange(e.value)
                                        formik.setFieldValue('interest', e.value); // Update formik value for validation

                                    }}

                                    placeholder="Select Interest"
                                    panelFooterTemplate={panelFooterTemplate}
                                    className="w-100 p-2 bg-white rounded-1 text-black"
                                    display="chip"
                                />

                                {formik.touched.interest && formik.errors.interest ? (
                                    <div className="errorMsg">{formik.errors.interest}</div>
                                ) : null}

                                {/* <input type="text" name='interest' onChange={formik.handleChange} value={formik.values.interest} /> */}
                            </div>

                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                className={`bg-white text-black form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                                id="message"
                                name="message"
                                placeholder='Message'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className="errorMsg">{formik.errors.message}</div>
                            ) : null}
                        </div>

                        <button type="submit" className={`btn fw-bold ${montserrat.className} greenBg w-100`}>Submit</button>
                    </form>
                </div>
            </div>

            <div className="d-block bg-black d-lg-none">
                <div className="container py-5 d-flex flex-column align-items-center justify-content-center col-12 px-4">
                    <h3 className={`fw-bold text-white pb-3 ${montserrat.className} w-100`}>Get Started For <span className='greenTxt fw-bolder'>Free</span></h3>
                    <div className="w-100">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`bg-white text-black form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    placeholder='Name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="errorMsg">{formik.errors.name}</div>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className={`bg-white text-black form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    name="email"
                                    placeholder='Email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="errorMsg">{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`bg-white text-black form-control ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'is-invalid' : ''}`}
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    placeholder='Mobile Number'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobileNumber}
                                />
                                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                                    <div className="errorMsg">{formik.errors.mobileNumber}</div>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <div className="card d-flex justify-content-center">

                                    <MultiSelect
                                        name='interest'
                                        value={selectedInterests} // Ensure selectedInterests is an array

                                        options={interestsArr}
                                        onChange={(e) => {
                                            handleInterestChange(e.value)
                                            formik.setFieldValue('interest', e.value); // Update formik value for validation

                                        }}
                                        placeholder="Select Interest"
                                        panelFooterTemplate={panelFooterTemplate}
                                        className="w-100 p-2 bg-white rounded-1 text-black"
                                        display="chip"
                                    />
                                    {formik.touched.interest && formik.errors.interest ? (
                                        <div className="errorMsg">{formik.errors.interest}</div>
                                    ) : null}
                                    {/* <input type="text" name='interest' onChange={formik.handleChange} value={formik.values.interest} /> */}
                                </div>
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`bg-white text-black form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                                    id="message"
                                    name="message"
                                    placeholder='Message'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                />
                                {formik.touched.message && formik.errors.message ? (
                                    <div className="errorMsg">{formik.errors.message}</div>
                                ) : null}
                            </div>

                            <button type="submit" className={`btn fw-bold ${montserrat.className} greenBg w-100`}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
