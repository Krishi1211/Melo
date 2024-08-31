
import meloxtiltiinverse from "../../assets/Blog/meloxtiltinverse2.png";
import "./styles.css";
import TiltJamsComponent from "@/components/TiltJams/TitleJams";

export const metadata = {
  title: "Tilt Jams & Melo Collaboration | Empowering Mumbai Music Scene",
  description: "Melo and Tilt join forces to revolutionize Mumbai's music landscape, offering unmatched music distribution and promotion. Dive into our collaborative effort for a vibrant Mumbai music community.",
  openGraph: {
    images: ['https://melo.works/assets/images/favicon.png']
  },
}

export default function TiltJams() {
  return (
    <>
      <TiltJamsComponent meloxtiltiinverse={meloxtiltiinverse} />
    </>
  );
}
