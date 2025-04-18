"use client";
import "./PhoneFloat.css";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { floatButtonClick } from "@/app/services/api";

const PhoneFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneClicked = 'Phone Clicked';
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
    <a href="tel:+91 7738193314" target="_blank">
      <button onClick={() => floatButtonClick(path, phoneClicked)} className="phButtonStyle mb-2">
        <FaPhoneAlt className="phIconStyle fa-2x" />
      </button>
    </a>
  ) : null;
};

export default PhoneFloat;
