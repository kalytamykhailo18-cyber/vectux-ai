"use client";

import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

export default function LayoutWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    // Show loader for minimum 1 sec
    setTimeout(() => {
      setHideLoader(true); // fade out animation
      setTimeout(() => setLoading(false), 1000); // wait for fade-out to finish
    }, 1000);
  }, []);

  return (
    <>
      {/* Preloader */}
      {!loading && null}
      <Preloader hide={hideLoader} />

      {/* Page content */}
      <div
        className={`
          transition-opacity duration-700 overflow-hidden
          ${hideLoader ? "opacity-100" : "opacity-0"}
        `}
      >
        {children}
      </div>
    </>
  );
}
