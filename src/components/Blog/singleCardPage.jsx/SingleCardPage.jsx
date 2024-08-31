'use client'
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { IoIosTimer } from 'react-icons/io';
const SingleCardPage = ({ params }) => {
    const [blogInfo, setSingleAutherData] = useState(null)

    const getData = async () => {
        try {
            const response = await axios.get(`https://api.melo.works/user/website/singleBlog?slug=${params.blogName}`);
            // console.log(response.data);
            setSingleAutherData(response.data.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const tags = (blogInfo?.blogTags)?.split(',');
    let image = `https://api.melo.works/file/noauth/getFile?path=${blogInfo?.blogThumbnail}`;
    const shortDate = (blogInfo?.publishDate)?.split("T")[0];

    return (
        <>
            <div className="d-flex flex-column align-items-center">

               {/*  <Image width={100} height={500} src={image} className='object-fit-contain' style={{objectPosition: 'top'}} /> */}
                <div className=""
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        // aspectRatio: '1200 / 300',
                        height: 'min(37rem, 60vh)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}></div>
                <div className="bg-light w-100 text-center">
                    <h2 className='py-4 pt-md-4 pt-3 text-center'>{blogInfo?.blogName}</h2>
                    <h6 className='text-black-50'>{blogInfo?.blogAuthor}</h6>
                    {/* <p className='text-black-50'>{shortDate}</p> */}
                    <div className="d-flex align-items-center justify-content-center pb-3">
                        <IoIosTimer />
                        <p style={{ fontSize: '.8rem' }} className='m-0'>{shortDate}</p>
                    </div>
                </div>
                <div className='text-justify container mt-3' dangerouslySetInnerHTML={{ __html: blogInfo?.blogContent }}>

                </div>
                <div className="py-5 d-flex container justify-content-start gap-3">
                    {
                        tags?.map((item, index) => {
                            return (
                                <>
                                    <p className='fw-bold d-inline-block bg-dark text-white rounded-2 p-1' style={{ fontSize: '.8rem' }} key={index}>#{item}</p>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default SingleCardPage