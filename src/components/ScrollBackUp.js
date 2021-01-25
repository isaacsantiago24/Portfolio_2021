import React, { useEffect, useState } from "react";
import "./ScrollBackUp.css";

import up from "../icons/up2.png";

export default function ScrollBackUp() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="pic-container" onClick={scrollToTop}>
          <img src={up} alt="Go to top" id="up" title="Go to top" />
        </div>
      )}
    </div>
  );
}
