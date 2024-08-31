import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import locationPin from "@/assets2/location-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";
import "./contact.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700']
});
export const metadata = {
  title:" Melo | Contact Us",
  description: "If you face any issues accessing your Melo account, contact us here. Please provide a detailed report of the problem you are experiencing, and we will get back to you.",
  openGraph: {
    images: ['https://melo.works/assets/images/favicon.png']
  },
}
export default function Promote() {
  return (
    <div className="container py-5 ">
      <div className="row">
        <div className="card border-0 col-12 col-md-6">
          <div className="card-wrapper">
            <div className="row">
              <div className="col-2 d-flex  align-items-center ">
                <FaRegUser
                  color="#b9de22"
                  className=""
                  style={{ width: "1.8rem", height: "1.8rem" }}
                />
              </div>
              <div className="col-10">
                <div>
                  <h5 className={`mb-2 custom_size fw-normal ${montserrat.className}`}>New Enquiries</h5>
                  <br></br>
                  <p className="custom_font">Bedanta Sarma</p>
                  <p className="custom_font">
                    <Link
                      href="https://wa.me/916901718195"
                      className="text-black text-decoration-none"
                    >
                      Phone / WhatsApp: +91 69017 18195
                    </Link>
                  </p>
                  <p className="custom_font">
                    <Link
                      href="mailto:hi@melo.works"
                      className="text-decoration-none text-black"
                    >
                      Email: hi@melo.works
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 col-12 col-md-6">
          <div className="card-wrapper">
            <div className="row">
              <div className="col-2 d-flex  align-items-center ">
                <FaRegUser
                  color="#b9de22"
                  className=""
                  style={{ width: "1.8rem", height: "1.8rem" }}
                />
              </div>
              <div className="col-10">
                <div>
                  <h5 className={`mb-2 custom_size fw-normal ${montserrat.className}`}>Support Team</h5>
                  <br></br>
                  <p className="custom_font">Adnan Baig, Head A&R</p>
                  <p className="custom_font">
                    <Link
                      href="https://wa.me/917738193314"
                      className="text-black text-decoration-none"
                    >
                      Phone / WhatsApp: +91 77381 93314
                    </Link>
                  </p>
                  <p className="custom_font">
                    <Link
                      href="mailto:hi@melo.works"
                      className="text-deocaration-none  text-black"
                    >
                      Email: hi@melo.works
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 col-12 col-md-6">
          <div className="card-wrapper">
            <div className="row">
              <div className="col-2 d-flex  align-items-center ">
                <Image
                  src={locationPin}
                  className="pe-2 object-fit-contain w-auto"
                  width={35}
                  height={35}
                  alt="melo location"
                />
              </div>
              <div className="col-10">
                <div>
                  <h5 className={`mb-2 custom_size fw-normal ${montserrat.className}`}>Address</h5>
                  <br></br>
                  <p className="custom_font">
                    <Link
                      className="text-black text-decoration-none"
                      href="https://goo.gl/maps/7taT2ygzR8v2gU1Q6"
                      target="_blank"
                    >
                      603 Chaitanya Building, Ram Mandir Signal, Goregaon West,
                      Mumbai, Maharashtra 400104
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 col-12 col-md-6">
          <div className="card-wrapper">
            <div className="row">
              <div className="col-2 d-flex  align-items-center ">
                <FaRegClock
                  color="#b9de22"
                  className=""
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>
              <div className="col-10">
                <div>
                  <h5 className={`mb-2 custom_size fw-normal ${montserrat.className}`}>Working Hours</h5>
                  <br></br>
                  <p className="custom_font">
                    Monday to Friday : 11:00AM - 06:00PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
