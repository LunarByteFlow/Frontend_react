import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto grid grid-cols-5 gap-8">
          {/* Column 1 - Company Logo */}
          <div className="col-span-1 flex items-center">
            <img
              src="company-logo.png"
              alt="Company Logo"
              className="w-16 h-16"
            />
            <p>
              <span className="block">
                59 Bervely Hill Ave, Brooklyn Town, New York, NY 5630, CA, US
              </span>
              <span className="block">
                59 Bervely Hill Ave, Brooklyn Town, New York, NY 5630, CA, US
              </span>
            </p>
          </div>

          {/* Column 2 - About Us */}
          <div className="col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">Home Page 1</a>
            </p>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">Home Page 2</a>
            </p>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">About</a>
            </p>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">Contact</a>
            </p>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">Search</a>
            </p>
          </div>

          {/* Column 3 - Contact */}
          <div className="col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Company Details</h3>
            <p className="text-xl text-bold font-mono text-left my-2">
              Listing
            </p>
            <p className="text-xl text-bold font-mono text-left my-2">
              Property Details
            </p>
            <p className="text-xl text-bold font-mono text-left my-2">
              Agent List
            </p>
            <p className="text-xl text-bold font-mono text-left my-2">
              Agent profile
            </p>
          </div>

          {/* Column 4 - Follow Us */}
          <div className="col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">Blog</a>
            </p>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">Blog-Simple</a>
            </p>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">Privacy policy</a>
            </p>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">License</a>
            </p>
            <p className="text-xl text-bold font-mono text-left my-2 hover:underline-offset-2 duration-300 cursor-pointer ">
              <a href="#">404 Page</a>
            </p>
          </div>

          {/* Column 5 - Additional Heading */}
          <div className="col-span-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Additional Heading</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
