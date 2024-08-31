"use client";
import "./WhatsappFloat.css";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { floatButtonClick } from "@/app/services/api";
import { usePathname } from "next/navigation";

const WhatsappFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappClicked = 'Whatsapp Clicked';
  const path = usePathname();

  useEffect(() => {
    const checkVisibility = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const min = now.getMinutes();

      // Day is between Monday (1) and Saturday (6) and time is between 10 AM (10) and 6 PM (18)
      if (
        day >= 1 &&
        day <= 6 &&
        (hour > 10 || (hour === 10 && min >= 0)) &&
        (hour < 18 || (hour === 18 && min <= 30))
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility();
    const intervalId = setInterval(checkVisibility, 60000);

    return () => clearInterval(intervalId);
  }, []);

  
  return isVisible ? (
    <>
      <a href="https://wa.me/+917021572975" target="_blank">
        <button onClick={() => floatButtonClick(path, whatsappClicked)} className="waButtonStyle">
          <FaWhatsapp className="waIconStyle fa-2x" />
        </button>
      </a>
    </>
  ) : null;
};

export default WhatsappFloat;
