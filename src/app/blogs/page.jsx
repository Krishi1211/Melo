"use client"
import styles from './blogs.module.css'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import BlogCard from '@/components/Blog/BlogsCard/BlogCard';

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    //const [imgSrc, setImgSrc] = useState(`https://api.melo.works/file/noauth/getFile?path=${blogs?.blogThumbnail}`);

    const getBlogs = async () => {
        try {
            const response = await axios.get(`https://api.melo.works/user/website/blog`);
            console.log(response.data.data);

            setBlogs(response.data.data);
            //console.log(response.data.data)

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBlogs();

    }, [])



    return (
        <>
            <div className="p-md-5 p-3">
                <h1 className='fw-bold text-center'>Blogs</h1>
                <div className="d-flex flex-wrap flex-column flex-sm-row  align-items-center justify-content-center">
                    {
                        blogs.map((item, index) => {

                            // const image = item?.blogCover;
                            let image = `https://api.melo.works/file/noauth/getFile?path=${item?.blogThumbnail}`;
                            // console.log(image);
                            // console.log(item?.blogThumbnail );
                            // if (image == `https://api.melo.works/file/noauth/getFile?path=undefined`) {
                            //     image = defaultImage;
                            // }
                            // else {
                            //     image = `https://api.melo.works/file/noauth/getFile?path=${item?.blogThumbnail}`
                            // }
                            // console.log(Object.keys(item));
                            const shortDate = (item?.publishDate).split("T")[0];

                            return (
                                <div key={index}>
                                    <BlogCard image={image} shortDate={shortDate} item={item} styles={styles} />
                                </div>
                            )
                        })
                    }

                </div>


                {/* <div className="d-flex flex-wrap flex-column flex-sm-row  align-items-center justify-content-center">


                    {
                        blogs.map((item, index) => {
                            // const image = item?.blogCover;



                            const  blogThumbnail = item.blogThumbnail;


                            const shortDate = (item?.publishDate).split("T")[0];

                            return (
                                <>
                                    <div className={`${styles.cardSize} border-2 rounded-3 bg-light p-3 m-2 d-flex flex-column `} key={index}>

                                        {
                                            (blogThumbnail == null || blogThumbnail == undefined || blogThumbnail == '') ? (
                             

                                                <Image
                                                src={defaultImage}
                                                className={`img-fluid h-100 object-fit-cover ${styles.blogThumbnail}`}
                                                width={500}
                                                height={200}
                                                alt="melo blogs"
                                            />
                                            ) : (
                                                <Image
                                                src={`https://api.melo.works/file/noauth/getFile?path=${blogThumbnail}`}
                                                className={`img-fluid h-100 object-fit-cover ${styles.blogThumbnail}`}
                                                width={500}
                                                height={200}
                                                alt="melo blogs"
                                            />
                                            )
                                        }



                                        <div className=" d-flex flex-column align-items-center justify-content-center mt-2"
                                        // style={{ height: '20%' }}
                                        >
                                            <div className="d-flex">
                                                <IoIosTimer />
                                                <p style={{ fontSize: '.7rem' }} className='m-0'>{shortDate}</p>
                                            </div>
                                            <p style={{ fontSize: '.7rem' }}>{item?.blogAuthor}</p>
                                            <h6 className='fw-bold text-center'>{item?.blogName}</h6>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div> */}


            </div>
        </>
    )
}
