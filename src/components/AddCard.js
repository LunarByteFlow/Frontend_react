import React from "react";

const AddCard = () => {
  return (
    <>
      <div className="bg-gray-200 py-8 px-4">
        <div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Card content */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="./images/scenery.jpg"
                alt="Property Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Luxury Penthouse in the Sky
                </div>
                <p className="text-gray-700 text-base">
                  987 Pine St, City, State 56789
                </p>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-gray-700">Bedrooms</p>
                    <p className="font-bold">3</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Bathrooms</p>
                    <p className="font-bold">3</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-gray-700">Area</p>
                    <p className="font-bold">2000 sqft</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Type</p>
                    <p className="font-bold">Penthouse</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
                <span className="text-gray-700 text-base ml-4">$1,500,000</span>
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="./images/scenery.jpg"
                alt="Property Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Luxury Penthouse in the Sky
                </div>
                <p className="text-gray-700 text-base">
                  987 Pine St, City, State 56789
                </p>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-gray-700">Bedrooms</p>
                    <p className="font-bold">3</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Bathrooms</p>
                    <p className="font-bold">3</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-gray-700">Area</p>
                    <p className="font-bold">2000 sqft</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Type</p>
                    <p className="font-bold">Penthouse</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
                <span className="text-gray-700 text-base ml-4">$1,500,000</span>
              </div>
            </div>
            {/* Card content */}
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Card content */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="./images/scenery.jpg"
                alt="Property Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Luxury Penthouse in the Sky
                </div>
                <p className="text-gray-700 text-base">
                  987 Pine St, City, State 56789
                </p>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-gray-700">Bedrooms</p>
                    <p className="font-bold">3</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Bathrooms</p>
                    <p className="font-bold">3</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-gray-700">Area</p>
                    <p className="font-bold">2000 sqft</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Type</p>
                    <p className="font-bold">Penthouse</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
                <span className="text-gray-700 text-base ml-4">$1,500,000</span>
              </div>
            </div>
          </div>
          {/* Repeat the above three divs for each card */}
        </div>
      </div>
    </>
  );
};

export default AddCard;
