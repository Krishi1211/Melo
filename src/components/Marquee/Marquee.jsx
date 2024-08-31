import React from "react";
import './Marquee.css'
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Spotify from '../../assets/images/spotify.png'
import AppleMusic from '../../assets/images/apple-music.jpg'
import Youtube from '../../assets/images/youtube.png'
import JioSaavn from '../../assets/images/jiosaavn-1.png'
import WynkMusic from '../../assets/images/wynk.png'
import Gaana from '../../assets/images/gaana.png'
import AmazonMusic from '../../assets/images/amazon.png'
import Deezer from '../../assets/images/New folder/Deezer.png'
import Facebook from '../../assets/images/New folder/logo-facebook.png'
import TickToc from '../../assets/images/New folder/logo-TikTok.png'
import Maskgrp from '../../assets/images/New folder/Mask Group 2.png'
import MxPlayer from '../../assets/images/New folder/MX Player.png'
import Napster from '../../assets/images/New folder/Napster.png'
import tp2 from '../../assets/images/New folder/44cc8ba00da42e8a92b78ba78d2be1ba.png'
import Iheart from '../../assets/images/New folder/1200px-IHeartRadio_logo.png'
import SoundCloud from '../../assets/images/New folder/1200px-Soundcloud_logo.svg.png'

const MarqueeComp = () => (
  <Marquee sx={{background:'Black'}} className="black ">
    <Image src={Spotify} unoptimized alt="Spotify" width="auto" height="auto"sx={{marginRight:'10%'}} className="imgz"/>
    <Image src={AppleMusic} unoptimized alt="Apple Music" width=" auto"height="auto"className="imgz"/>
    <Image src={Youtube} unoptimized alt="Youtube" width="auto" height="auto" className="imgz "/>
    <Image src={JioSaavn} unoptimized alt="Spotify" width="auto" height="auto"className="imgz "/>
    <Image src={WynkMusic} unoptimized alt="Apple Music" width="auto" height="auto"className="imgz "/>
    <Image src={Gaana} unoptimized alt="Youtube" width="auto" height="auto"className="imgz " />
    <Image src={AmazonMusic} unoptimized alt="Spotify" width="auto" height="auto"className="imgz "/>
    <Image src={Deezer} unoptimized alt="Apple Music" width="auto" height="auto"className="imgz "/>
    <Image src={Facebook} unoptimized alt="Youtube" width="auto" height="auto" className="imgz "/>
    <Image src={TickToc} unoptimized alt="Spotify" width="auto" height="auto"className="imgz "/>
    <Image src={Maskgrp} unoptimized alt="Apple Music" width="auto" height="auto"className="imgz "/>
    <Image src={Napster} unoptimized alt="Youtube" width="auto" height="auto" className="imgz "/>
    <Image src={MxPlayer} unoptimized alt="Spotify" width="auto" height="auto"className="imgz "/>
    <Image src={tp2} unoptimized alt="Apple Music" width="auto" height="auto"className="imgz "/>
    <Image src={Iheart} unoptimized alt="Youtube" width="auto" height="auto" className="imgz "/>
    <Image src={SoundCloud} unoptimized alt="Spotify" width="auto" height="auto"className="imgz "/>
  </Marquee>
);

export default MarqueeComp;
