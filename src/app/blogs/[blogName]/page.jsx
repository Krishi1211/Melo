
import SingleCardPage from '@/components/Blog/singleCardPage.jsx/SingleCardPage';
import axios from 'axios';

export async function generateMetadata({ params }) {

    // fetch data
    const response = await axios.get(`https://api.melo.works/user/website/singleBlog?slug=${params.blogName}`);
    let metaData = response.data.data
    return {
        title: metaData.metaTitle,
        openGraph: {
            title: metaData.metaTitle,
            description: metaData.metaDescription,
            images: [metaData.blogCover]
        },
    }
}

export default async function page({ params }) {

    return (
        <>
            <SingleCardPage params={params} />
        </>
    )
}
