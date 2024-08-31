
;
import styles from "./faq.module.css";
import "./faq.css";
import Faquestion from "@/components/Faq/Faq";

export const metadata = {
  title: 'Melo | Frequently Asked Questions',
  description: 'Here are some frequently asked questions about Melo.',
  openGraph: {
    images: ['https://melo.works/assets/images/favicon.png']
  },
}

export default function Faq() {


  return (
    <>
      <Faquestion styles={styles} />
    </>
  );
}
