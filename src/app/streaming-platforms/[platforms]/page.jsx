// "use client"
import axios from "axios";

export async function generateMetadata({ params }) {
    // fetch data
    const product = await fetch(`https://api.melo.works/user/website/viewPlatform?slug=${params.platforms}`).then((res) => res.json())
    // optionally access and extend (rather than replace) parent metadata
    return {
        title: product.data.metaTitle,
        description: product.data.metaDescription,
    }
}

export default async function page({ params }) {
  // generateMetadata(params);
  async function getData() {
    const res = await axios.get(
      `https://api.melo.works/user/website/viewPlatform?slug=${params.platforms}`
    );
    //console.log(res.data);
    return res.data;
  }

  const brands = (await getData()).data;

  return (
    <>
      <div className="container">
        <div className="py-5">
          {/* <p>{brands}</p> */}
          <div
            dangerouslySetInnerHTML={{ __html: brands?.platformDescription }}
          />
        </div>
      </div>
    </>
  );
}
// export const metaData = {
//     title: titleName, // Provide a default value or handle the case when brands is undefined or doesn't have the metaTitle property
//     description: des, // Provide a default value or handle the case when brands is undefined or doesn't have the metaDescription property
// };
// console.log(metaData);
