import Image from 'next/image'
import melo from "../../assets/images/path-114.png";

export default function SecondHeader() {
    return (
        <div className="d-block">
            <nav className="py-2 navbar navbar-dropdown navbar-fixed-top navbar-expand-lg bg-white px-md-5 px-4">
                <div className="container flex-nowrap px-xl-3">
                    <Image
                        src={melo}
                        width="auto"
                        height="auto"
                        className="logo object-fit-contain me-4"
                        alt="Melo"
                    />

                </div>
            </nav>
            <div className="" style={{ paddingTop: "3.5rem" }}></div>
        </div>
    )
}
