import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className=" bg-slate-600 mx-auto">
        <h2 className="text-[5rem] font-bold text-white mb-8  text-left ml-20 py-12">
          Featured Articles
        </h2>

        <div className="flex flex-wrap justify-center bg-slate-600 mx-auto my-12">
          {/* <!-- Card 1 --> */}
          <div className="m-4 p-4 max-w-xs sm:max-w-md md:max-w-lg rounded-lg transition duration-300">
            <div className="relative">
              <img
                src="./images/scenery.jpg"
                alt="Image"
                className="w-full h-auto rounded-[40px] transition opacity-80 hover:opacity-100 hover:scale-105 duration-300 ease-in-out my-3"
              />
            </div>
            <div className="p-1">
              <h3 className="text-3xl font-semibold text-white text-left my-4">
                <span className="block">
                  10 Delightful Dining Room Decor Trends
                </span>
                <span className="block">For Spring</span>
              </h3>

              <h2 class="text-gray-400 hover:text-white font-bold text-left text-2xl cursor-pointer transition duration-300 hover:transform hover:-translate-y-2">
                <a href="#">Read the Article</a>
              </h2>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="m-4 p-4 max-w-xs sm:max-w-md md:max-w-lg rounded-lg transition duration-300">
            <div className="relative">
              <img
                src="./images/scenery.jpg"
                alt="Image"
                className="w-full h-auto rounded-[40px] transition opacity-80 hover:opacity-100 hover:scale-105 duration-300 ease-in-out my-3"
              />
            </div>
            <div className="p-1">
              <h3 className="text-3xl font-semibold text-white text-left my-4">
                <span className="block">
                  10 Essential Tips and Tricks Every Developer
                </span>
                <span className="block">Should Know</span>
              </h3>
              <h2 class="text-gray-400 hover:text-white font-bold text-left text-2xl cursor-pointer transition duration-300 hover:transform hover:-translate-y-2">
                <a href="#">Read the Article</a>
              </h2>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="m-4 p-4 max-w-xs sm:max-w-md md:max-w-lg rounded-lg transition duration-300">
            <div className="relative">
              <img
                src="./images/scenery.jpg"
                alt="Image"
                className="w-full h-auto rounded-[40px] transition opacity-80 hover:opacity-100 hover:scale-105 duration-300 ease-in-out my-3"
              />
            </div>
            <div className="p-1">
              <h3 className="text-3xl font-semibold text-white text-left my-4">
                <span className="block">
                  10 Popular Building Designs that increase
                </span>
                <span className="block">site values</span>
              </h3>
              <h2 class="text-gray-400 hover:text-white font-bold text-left text-2xl cursor-pointer transition duration-300 hover:transform hover:-translate-y-2">
                <a href="#">Read the Article</a>
              </h2>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          


          <div className="m-4 mt-8 mb-8 w-3/4 p-3 ">
            <div className="max-w-xl mx-auto shadow-md rounded-lg overflow-hidden  bg-amber-400 ">
              {/* Card Header */}
              <div className="px-6 py-4">
                <h2 className="text-4xl font-bold text-gray-800">
                  For Recent Update, News.
                </h2>
                <p className="text-gray-600 mt-2 text-xl">
                  <span className="block">
                    We helps businesses customize, automate and scale up
                  </span>
                  <span className="block">
                    their ad production and delivery.
                  </span>
                </p>
              </div>

              {/* Input field and button */}
              <div className="px-6 py-4 flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />

                <button class="ml-4 bg-black text-white font-semibold py-2 px-4 rounded-md focus:outline-none hover:bg-amber-400 focus:bg-black-600 transition duration-300  hover:transform hover:-translate-x-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
