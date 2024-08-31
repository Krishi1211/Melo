"use client";
import { useEffect } from "react";

export const BootstrapClient = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("bootstrap/dist/css/bootstrap.css");
  }, []);
  return null;
};
