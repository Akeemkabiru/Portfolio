"use client";

import React, { useState, useEffect } from "react";

const TypingComponent = ({ textToType }: { textToType: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + textToType[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, textToType]);

  return (
    <div>
      <h1>{displayedText}</h1>
    </div>
  );
};

export default TypingComponent;
