import React, { useState, useEffect } from "react";
import styled from "styled-components";

const neutralPalette = [
  "#ffffff",
  "#ADD8E6",
  "#90EE90",
  " #FFFFE0",
  "#D3D3D3",
  "#E6E6FA",
  "#FFDAB9",
  "#E6E6FA",
  "#FFB6C1",
  "#F5F5DC",
  "#98FB98",
]; // Light gray palette

const AnimatedImage = styled.img`
  width: 700px; /* Adjust width as needed */
  height: 750;

  border-radius: 40px;
  margin: 2px;
  object-cover: border-box; /* Ensure border covers image */
  border: 4px solid transparent;
  background-color: transparent;
  transform: translateX(0); /* Initial position (optional) */
  animation: animateImage 2s infinite alternate ease-in-out; /* Animation definition */

  @keyframes animateImage {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(20px);
    } /* Move image 20px to the right */
  }
`;
const backgroundTextureUrl = "path/to/your/texture.png"; // Replace with your texture image path

const ColorBanner = () => {
  const [colorIndex, setColorIndex] = useState(0); // Track current color in palette
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    // Calculate color based on cursor position
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const index = Math.floor((x / width) * neutralPalette.length); // Adjust the formula according to your preference
    setColorIndex(index);
    setCursorPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run effect only once

  const backgroundStyle = {
    // backgroundImage: `url(${backgroundTextureUrl})`, // Set background texture
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-color 0.5s ease-in-out", // Transition for color change
  };

  return (
    <div
      style={{
        ...backgroundStyle, // Spread background styles
        width: "100vw",
        height: "100vh",
        backgroundColor: neutralPalette[colorIndex], // Dynamic background color
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Your content here */}
      <div className=" mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-row md:flex-row  py-4 md:py-16">
          <div className="w-full md:w-1/2 mr-4">
            <h2 className=" text-bold lg:text-5xl md:text-3xl font-bold mb-8 lg:p-4 lg:pt-3 rounded-lg text-left ">
              <span className="block text-red-800">Simple & Easy Way</span>
              <span className="block">To Find Your</span>
              <span className="block">Dream Apartment</span>
            </h2>
            <p className="text-gray-700 lg:text-3xl md:text-xl leading-loose lg:p-4 rounded-lg text-justify md:2xl ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. In a free hour, when our power of choice is untrammelled
              and when nothing prevents our being able to do what we like best,
              every pleasure is to be welcomed.
            </p>

            <a
              href="#"
              className="relative inline-flex items-center justify-center px-4 py-3 bg-black  hover:bg-yellow-300 hover:text-black text-white rounded-lg font-bold text-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  transitionProperty: "stroke",
                  transitionTimingFunction: "ease",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l8 8 8-8"
                />
              </svg>
              <span className="absolute top-0 left-0 w-full h-full bg-yellow-600 rounded-lg transition-transform duration-300 transform scale-x-0 origin-left" />
            </a>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <div className="flex flex-col">
              {/* <img
                src="./images/house-styling.png"
                width="700px" height="750px"
                // alt="Image 1"
                className="w-100 h-108  m-2 object-cover bg-transparent transform hover:scale-105 transition duration-300"
              /> */}
              <AnimatedImage
                src="./images/house-styling.png"
                alt="Image of house styling"
                className="hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>



      

      <div className="cursor-pointer animate-spin hover:scale-110">
        {" "}
        {/* Cursor animation & hover effect */}
        {/* Your cursor content */}
      </div>
    </div>
  );
};

export default ColorBanner;
