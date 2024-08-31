import './globals.css';
import HomePage from "@/components/Home/home";

export const metadata = {
  title: "Melo | Digital Music Distribution | Sell Music Online",
  description: "Melo is the best digital music distribution company. It can spread your music on various platforms like Spotify, Apple, Amazon, Tidal, TikTok, YouTube, and more.",
  openGraph: {
    images: ['https://melo.works/assets/images/favicon.png']
  },
}

export default function Home() {
  return (
    <div className='custom_minHeight'>
      <HomePage />
    </div>
  );
}
