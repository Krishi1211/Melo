

import Image from 'next/image';
import Link from 'next/link';
import { data } from '../services/constant';


export const metadata = {
    title: 'Melo',
    description: 'A music distribution company.'
}
export default function page({ }) {
    
    return (
        <>
            <div className="p-5">
                <h1 className='fw-bold text-center'>Our Streaming Partners</h1>

                <div className="px-md-5 px-0">
                    <div className="d-flex w-100 p-md-5 p-3 justify-content-evenly flex-wrap">
                        {
                            data.map((item, index) => {
                                const image = item.image;
                                const slug = (item.platform).toLowerCase().replaceAll(' ', '-');
                                return (
                                    <Link key={index} className='greenTxt' href={`/streaming-platforms/${slug}`}>
                                        <div className="d-flex flex-column align-items-center mx-2 my-3"
                                            style={{ width: '9rem', height: '8rem' }}
                                        >
                                            <Image
                                                className='object-fit-contain'
                                                src={image}
                                                width={50}
                                                height={50}
                                                alt={item.platform}
                                            />
                                            <p className='py-2'>{item.platform}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
