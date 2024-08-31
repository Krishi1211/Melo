"use client";
import { useParams } from "next/navigation";
import { FaPlay } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { getArtist } from "../../service/api";
import { getArtistSongs } from "../../service/api";
import Image from "next/image";
import Link from "next/link";
import artits from "@/app/city/assets/artist/shudhiramani.webp";
import spotify from "@/app/city/assets/icons/082-spotify.png";
import apple from "@/app/city/assets/icons/Applemusicandroid-512.png";
import amzone from "@/app/city/assets/icons/Amazon_icon.png";
import jio from "@/app/city/assets/icons/jio.png";
import wynk from "@/app/city/assets/icons/wynk.png";
import youtube from "@/app/city/assets/icons/116-youtube.png";
import youmusic from "@/app/city/assets/icons/Youtube_Music_Icon.png";
import insta from "@/app/city/assets/icons/044-instagram.png";
import vi from "@/app/city/assets/icons/vi.png";
import airtel from "@/app/city/assets/icons/airtel.png";
import jioo from "@/app/city/assets/icons/jioo.png";
import facebook from "@/app/city/assets/icons/024-facebook.png";
import path from "@/app/city/assets/icons/Path 113.png";
import WA from "@/app/city/assets/icons/109-whatsapp.png";
import sms from "@/app/city/assets/icons/sms.png";
import gmail from "@/app/city/assets/icons/gmail.png";
import axios from "axios";

export default function ArtistSong() {
  const params = useParams();
  const [artistInfo, setArtisInfo] = useState();
  const [artistSongs, setArtistSongs] = useState({});

  const handleArtistDetails = async () => {
    const response = await getArtist(params?.artistName);
    const data = response.data.artistData;
    // console.log(data);
    if (data) {
      setArtisInfo(data);
    }
  };

  const handleArtistSongsDetails = async () => {
    try {
      const response = await getArtistSongs(
        params?.artistName,
        params?.artistSong
      );
      const data = response.data.melocityData[0];
      //   console.log(data);
      // if (data && data.length > 0) {
      setArtistSongs(data);
      // }
    } catch (err) {
      console.log(err);
    }
  };

  const testApi = async () => {
    try {
      const response = await axios.get(
        "http://test-api.melo.works/user/dashboard/melocity"
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleArtistDetails();
    handleArtistSongsDetails();
    // testApi();
  }, []);

  return (
    <main>
      {artistSongs && artistInfo && (
        <>
          <title>{artistInfo?.artistName}</title>
          <div className="container-fluid bg">
            <div className="sitimg">
              <Image
                unoptimized
                width={100}
                height={100}
                className="bgimg"
                src={artits}
                alt="cover image"
              />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-sm-7 col-md-5 col-lg-4 col-xl-4"
                  style={{ padding: "0", marginBottom: "30px" }}
                >
                  <div
                    style={{
                      background: "white",
                      boxShadow: "0 0 28px 0 rgba(0,0,0,.8)",
                      borderRadius: "6px",
                      overflow: "hidden",
                      marginTop: "30px",
                    }}
                  >
                    <div className="row">
                      <div className="col-12 p-0">
                        <Image
                          className="img-fluid"
                          src={artits}
                          alt="cover image"
                          style={{
                            position: "relative",
                            zIndex: "1000",
                            width: "100%",
                          }}
                        />
                        <Link
                          href="{artistSongs[0].melocity.youTubeURL ? artistSongs[0].melocity.youTubeURL : ''}"
                          target="_blank"
                          className="text-decoration-none"
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "35%",
                              zIndex: "1000",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              backgroundColor: "rgba(0,0,0,.45)",
                              borderRadius: "70%",
                              cursor: "pointer",
                              width: "5%",
                              height: "10%",
                            }}
                          >
                            <FaPlay
                              color="white"
                              size={40}
                              style={{
                                position: "absolute",
                                top: "23%",
                                zIndex: "1000",
                                left: "29%",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <ul className="list-group">
                      <li className="header">
                        <h1 className="name-artits">
                          {artistInfo?.artistName}
                        </h1>
                        Song Name: {artistSongs?.melocity?.songName}
                        <br />
                      </li>
                      <li className="overall">
                        <div className="row">
                          <div className="col-6">
                            <button className="btnsid w-100" id="copy">
                              Copy Link
                            </button>
                          </div>
                          <div className="col-6">
                            <button
                              className="btnsid w-100"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Share
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className="overall">
                        <div className="row">
                          <div className="col-12 pb-3">
                            <p className="mb-0">LISTEN</p>
                          </div>
                          <div className="col-3 py-3">
                            <Link
                              href={artistSongs?.melocity?.spotifyURL}
                              className="text-decoration-none"
                              target="_blank"
                            >
                              <Image
                                className="img-fluid"
                                src={spotify}
                                alt="logo"
                              />
                              <p className="head-text">Spotify</p>
                            </Link>
                          </div>
                          <div className="col-3 py-3">
                            <Link
                              href={artistSongs?.melocity?.appleURL}
                              className="text-decoration-none"
                              target="_blank"
                            >
                              <Image
                                className="img-fluid"
                                src={apple}
                                alt="logo"
                              />
                              <p className="head-text">Apple</p>
                            </Link>
                          </div>
                          <div className="col-3 py-3">
                            <Link
                              href={artistSongs?.melocity?.amazonURL}
                              className="text-decoration-none"
                              target="_blank"
                            >
                              <Image
                                className="img-fluid"
                                src={amzone}
                                alt="logo"
                              />
                              <p className="head-text">Amazon</p>
                            </Link>
                          </div>
                          <div className="col-3 py-3">
                            <Link
                              href={artistSongs?.melocity?.jioSavaanURL}
                              className="text-decoration-none"
                              target="_blank"
                            >
                              <Image
                                className="img-fluid"
                                src={jio}
                                alt="logo"
                              />
                              <p className="head-text">JioSaavn</p>
                            </Link>
                          </div>
                          <div className="col-3 py-3">
                            <Link
                              href={artistSongs?.melocity?.wynkURL}
                              className="text-decoration-none"
                              target="_blank"
                            >
                              <Image
                                className="img-fluid"
                                src={wynk}
                                alt="logo"
                              />
                              <p className="head-text">Wynk</p>
                            </Link>
                          </div>
                          <div className="col-3 py-3">
                            <Link
                              href={artistSongs?.melocity?.youTubeURL}
                              className="text-decoration-none"
                              target="_blank"
                            >
                              <Image
                                className="img-fluid"
                                src={youtube}
                                alt="logo"
                              />
                              <p className="head-text">YouTube</p>
                            </Link>
                          </div>
                          <div className="col-3 py-3">
                            <Link
                              href={artistSongs?.melocity?.youTubeMusicURL}
                              className="text-decoration-none"
                              target="_blank"
                            >
                              <Image
                                className="img-fluid"
                                src={youmusic}
                                alt="logo"
                              />
                              <p className="head-text">YouTube Music</p>
                            </Link>
                          </div>
                          <div className="col-3 py-3">
                            <Link
                              href={artistSongs?.melocity?.instagramURL}
                              className="text-decoration-none"
                              target="_blank"
                            >
                              <Image
                                className="img-fluid"
                                src={insta}
                                alt="logo"
                              />
                              <p className="head-text">Instagram</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <li className="overall">
                      <div className="row">
                        <div className="col-12 pb-3">
                          <p className="mb-0">AVAILABLE ON</p>
                        </div>
                        <div className="col-3 py-3">
                          <Image className="img-fluid" src={vi} alt="logo" />
                          <p className="head-text">VI</p>
                        </div>
                        <div className="col-3 py-3">
                          <Image
                            className="img-fluid"
                            src={airtel}
                            alt="logo"
                          />
                          <p className="head-text">Airtel</p>
                        </div>
                        <div className="col-3 py-3">
                          <Image className="img-fluid" src={jioo} alt="logo" />
                          <p className="head-text">Jio</p>
                        </div>
                        <div className="col-3 py-3">
                          <Image
                            className="img-fluid"
                            src={facebook}
                            alt="logo"
                          />
                          <p className="head-text">Facebook</p>
                        </div>
                        <div className="col-3 py-3">
                          <Image className="img-fluid" src={insta} alt="logo" />
                          <p className="head-text">Instagram</p>
                        </div>
                      </div>
                    </li>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <p
                        className="mb-0"
                        style={{
                          color: "white",
                          fontWeight: "700",
                          position: "relative",
                          zIndex: "1000",
                        }}
                      >
                        Powered by &nbsp;
                      </p>
                      <Link href="https://melo.works">
                        <Image
                          className="img-fluid pb-1"
                          style={{
                            position: "relative",
                            zIndex: "1000",
                            width: "100px",
                          }}
                          src={path}
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Modal */}
            <div
              className="modal fade modal-sm"
              id="exampleModal"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-size">
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      style={{ float: "right", height: "2px" }}
                    ></button>
                    <div className="row">
                      <div className="col-4 py-3">
                        <Link href="" target="_blank">
                          <Image className="img-fluid" src={WA} alt="logo" />
                        </Link>
                      </div>
                      <div className="col-4 py-3">
                        <Link
                          href="sms://?body=https://melo.city/shudhi-ramani/christmas-is-almost-here"
                          target="_blank"
                        >
                          <Image className="img-fluid" src={sms} alt="logo" />
                        </Link>
                      </div>
                      <div className="col-4 py-3">
                        <Link
                          href="mailto:?subject=Melo City | One Page Link&amp;body=Check out this new release https://melo.city/shudhi-ramani/christmas-is-almost-here"
                          target="_blank"
                        >
                          <Image className="img-fluid" src={gmail} alt="logo" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
