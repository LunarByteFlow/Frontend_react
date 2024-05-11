import React from "react";

const GetStarted_1 = () => {
  return (
    <>
      <div className="bg-gray-100 mx-auto px-4 md:px-8">
        <div className="flex flex-row md:flex-row bg-gray-100 py-4 md:py-16">
          <div className="flex justify-center w-full md:w-1/2">
            <div className="flex flex-col">
              <img
                src="./images/download.jpeg"
                alt="Image 3"
                className="w-100 h-87 rounded-[40px] m-2 object-cover border-4 border-gray-200 transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 mr-4">
            <h2 className="text-5xl font-bold mb-8 p-4 rounded-lg text-left">
              <span className="block">Secure payment system</span>
            </h2>
            <p className="text-gray-700 text-2xl leading-loose p-4 rounded-lg text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. In a free hour, when our power of choice is untrammelled
              and when nothing prevents our being able to do what we like best,
              every pleasure is to be welcomed.
            </p>
            <p className="text-black hover:text-bold text-2xl leading-loose p-4 rounded-lg text-justify">
              <span className="block">Find excellent deals</span>
              <span className="block">Friendly host & Fast support</span>
              <span className="block">Secure payment system</span>
            </p>

            <a
              href="#"
              className="relative inline-flex items-center justify-center px-4 py-3 bg-black  hover:bg-yellow-300 hover:text-black cursor-pointer text-white rounded-lg font-bold text-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              Learn More
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
        </div>
      </div>
    </>
  );
};

export default GetStarted_1;
