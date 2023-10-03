import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./NavBar";
import { Link } from "react-router-dom";
import cage from "../assets/SVG/cage.jpg";
import fish from "../assets/SVG/blueShark.png";
import Products from "./Products";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Layout = () => {
  return (
    <div className="flex bg-blue-50 h-screen w-screen overflow-hidden">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        <div>
          <Header homepage={true} />
        </div>
        <div className="overflow-y-auto overflow-x-hidden scrollbar-hide">
          {/* {<Outlet />} */}
          <div className="grid grid-cols-2  justify-center w-auto h-screen items-center">
            {/* The Right Side of the Greeting  */}
            <div className="col-span-1 col-start-1  text-primary px-8 flex justify-center">
              <div className="">
                <div className="text-6xl font-serif font-bold ">
                  Welcome To Menteko
                </div>
                <div className="text-3xl font-serif font-bold mt-4 ">
                  The Largest Fish Network in Africa.
                </div>
                <div className="text-xs max-w-lg mt-4 mb-4 font-serif">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris.
                </div>
                <div className="mt-4 pt-8">
                  <Link
                    to={"/auth/login"}
                    className="px-8 py-4  bg-blue-800 hover:bg-blue-950 rounded-lg text-white font-bold "
                  >
                    {" "}
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 col-start-2 flex flex-col w-full h-full py-12">
              <img
                className="bg-blue-500 rounded-l-3xl ml-40 mb-12 w-full h-full"
                alt="cage"
                src={cage}
              />
              <img
                className="absolute z-20 mt-4 h-1/2"
                alt="shark"
                src={fish}
              />
            </div>
          </div>
          {/* <section className="w-full bg-blue-50 py-[50px] justify-center items-center p-4">
            <div className="md:max-w-[1100px] m-auto max-w-[400px]">
              <h1 className="text-center text-xl font-bold text-[#536e90]">
                Trusted by over 25,000 teams around the world
              </h1>
              <p className="text-center text-[#536e96] text-2x1 py-2">
                Leading Companies use the same courses to help their employees
                keep skill up
              </p>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 lg:gap-x-12">
                <img src={cage} alt="company1" />
                <img src={fish} alt="company2" />
                <img src={cage} alt="company3" />
                <img src={fish} alt="company4" />
              </div>
            </div>
          </section> */}
          {/* <Products /> */}
          <section className="w-full bg-blue-50 py-24 p-4 items-center border-t-md">
            <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[400px]">
              <img src={fish} alt="hero" className="w-[500px] mx-auto" />
              <div className="flex flex-col justify-start gap-4">
                <div>
                  <h1 className="md:leading-[42px] py-8 md:text-3xl text-lg font-semibold">
                    Join one of the best{" "}
                    <span className="text-blue-900">
                      Fish Network In Africa
                    </span>{" "}
                    With Vast Ammount of Networks
                  </h1>
                  <p className="py-2 text-lg text-gray-900">
                    Various versions have evolved over the years
                  </p>
                  <button className="max-[780px]:w-full px-8 text-white py-3 bg-blue-500 rounded-lg hover:bg-blue-900">
                    Work With Us
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-blue-50 py-24 p-4 items-center border-t-md">
            <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[400px]">
              <div className="flex flex-col justify-start gap-4">
                <div>
                  <h1 className="md:leading-[42px] py-8 md:text-3xl text-lg font-semibold">
                    Join one of the best{" "}
                    <span className="text-blue-900">
                      Fish Network In Africa
                    </span>{" "}
                    With Vast Ammount of Networks
                  </h1>
                  <p className="py-2 text-lg text-gray-900">
                    Various versions have evolved over the years
                  </p>
                  <button className="max-[780px]:w-full px-8 text-white py-3 bg-blue-500 rounded-lg hover:bg-blue-900">
                    Work With Us
                  </button>
                </div>
              </div>
              <img
                src={cage}
                alt="hero"
                className="w-[500px] mx-auto rounded-lg"
              />
            </div>
          </section>
          {/* Footer Part */}
          <section className="w-full bg-white py-24 p-4">
            <div className="md:max-w-[1100px] m-auto grid md:grid-cols-5 max-[768px]:md:grid-cols-6 gap-8 max-w-[400px]">
              <div className="col-span-1">
                <img src={fish} alt="logo-footer" className="h-[25px]" />
                {/* <h1 className="h-[24px]">Menteko</h1> */}
                <h3 className="font-bold text-2xl mt-10">Contact us</h3>
                <h3 className="py-2 text-[#60737a]">call: 647 68658 86658</h3>
                <h3 className="py-2 text-[#60737a]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam officia .
                </h3>
                <h3 className="py-2 text-[#363a3d]">
                  Email: example@gmail.com
                </h3>

                <div className="flex gap-4 py-4">
                  <div className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer">
                    <FaFacebook size={25} />
                  </div>
                  <div className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer">
                    <FaTwitter size={25} />
                  </div>
                  <div className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer">
                    <FaLinkedin size={25} />
                  </div>
                  <div className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer">
                    <FaYoutube size={25} />
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <h3 className="font-bold text-2xl mt-10">Explore</h3>
                <ul className="py-3 text-[#60737a]">
                  <li className="py-2">Home</li>
                  <li className="py-2">About us</li>
                  <li className="py-2">Courses</li>
                  <li className="py-2">Contact us</li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="font-bold text-2xl mt-10">Categories</h3>
                <ul className="py-3 text-[#60737a]">
                  <li className="py-2">Design</li>
                  <li className="py-2">Development</li>
                  <li className="py-2">Marketing</li>
                  <li className="py-2">Finance</li>
                  <li className="py-2">Music</li>
                  <li className="py-2">Photography</li>
                </ul>
              </div>

              <div className="col-span-2">
                <h3 className="font-bold text-2xl mt-10">Subscribe</h3>
                <h3 className="py-2 text-[#60737a]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam officia .
                </h3>
                <form className="input-box-shadow flex justify-content-between items-center bg-transparent gap-2">
                  <input
                    type="text"
                    className="my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500"
                    placeholder="Enter your email address here"
                  />
                  <button className="max-[768px]:w-full my-2 w-full px-2 py-3 bg-blue-600 rounded-lg text-white font-bold">
                    Join
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Layout;
