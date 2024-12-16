"use client";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Custom404() {
  let location = useLocation();
  const router = useNavigate();
  const [glitchText, setGlitchText] = useState("404");
  const [count, setCount] = useState(5);

  useEffect(() => {
    console.log(location);

    const glitchInterval = setInterval(() => {
      setGlitchText((prevText) =>
        prevText === "404" ? "4○4" : prevText === "4○4" ? "40⁴" : "404",
      );
    }, 500);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
    return;
  }, [count]);

  const handleTeleport = () => {
    if (count === 0) {
      router("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-9xl font-bold mb-4 animate-pulse">
        <span className="inline-block transform hover:scale-110 transition-transform duration-200 cursor-default">
          {glitchText.split("").map((char, index) => (
            <span key={index} className="inline-block hover:animate-spin">
              {char}
            </span>
          ))}
        </span>
      </h1>
      <p className="text-2xl mb-8 text-center">
        Oops! Looks like you've wandered into the void.
      </p>
      <div className="space-y-4 text-center">
        <p className="text-xl">
          Don't panic! Our highly trained space monkeys are working on it.
        </p>
        <p className="text-lg italic">
          (They're actually just eating bananas, but it sounds better this way)
        </p>
      </div>
      <button
        onClick={handleTeleport}
        disabled={count > 0}
        className="mt-8 text-lg px-6 py-3 bg-yellow-400 text-purple-900 rounded-full hover:bg-yellow-300 transition-colors duration-200"
      >
        {count > 0 ? `Teleport Home in ${count}s` : "Teleport Home"}
      </button>
    </div>
  );
}
