import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosTimer } from "react-icons/io";
import defaultImage from '../../../assets2/defaultImage.jpg';
import Head from 'next/head';
const BlogCard = ({ image, shortDate, item, styles }) => {
    return (
        <div className={`${styles.cardSize} border-2 rounded-3 bg-light p-3 m-2 d-flex flex-column `} >
            <Head>
                <title>{ item && item?.metaTitle}</title>
                <metadata name="description" content={ item && item?.metaDescription} />
            </Head>
            <Link className='text-decoration-none text-black' style={{}} href={`/blogs/${item.slug}`}>
                <Image
                    src={image}
                    className={`img-fluid h-100 object-fit-cover ${styles.blogThumbnail}`}
                    width={500}
                    height={200}
                    alt='melo blogs'
                // style={{ height: '50%' }}
                />

                <div className=" d-flex flex-column align-items-center justify-content-center mt-2"
                // style={{ height: '20%' }}
                >
                    <div className="d-flex align-items-center">
                        <IoIosTimer />
                        <p style={{ fontSize: '.7rem' }} className='m-0'>{shortDate}</p>
                    </div>
                    <p style={{ fontSize: '.7rem' }}>{item?.blogAuthor}</p>
                    <h6 className='fw-bold text-center'>{item?.blogName}</h6>
                </div>
            </Link >
        </div>
    )
}

export default BlogCard