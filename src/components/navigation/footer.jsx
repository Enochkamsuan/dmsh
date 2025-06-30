import React from "react";
import logo from "../../assets/images/logo.jpeg";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { GrLocationPin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="px-8 md:px-16 lg:px-24 py-5 md:py-16 lg-py-20 bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
        <div>
          <div>
            <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
          </div>
          <div className="font-Manrope text-white text-sm my-3">
            Divine Mercy Health Services Foundation – Seamless, borderless
            healthcare powered by compassion and technology.
          </div>
          <div className="flex gap-3 my-6 items-center">
            <div className="text-white cursor-pointer">
              <FaFacebook />
            </div>
            <div className="text-white cursor-pointer">
              <FaTwitter />
            </div>
            <div className="text-white cursor-pointer">
              <FaYoutube />
            </div>
            <div className="text-white cursor-pointer">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            <div>
              <div className="font-Manrope text-white text-base bg-white/40 pl-1">COMPANY</div>
              <ul>
                <li className="cursor-pointer text-white font-Manrope text-sm mt-3">
                  About
                </li>
                <li className="cursor-pointer text-white font-Manrope text-sm mt-3">
                  Contact Us
                </li>
                <li className="cursor-pointer text-white font-Manrope text-sm mt-3">
                  Book Appointment
                </li>
                <li className="cursor-pointer text-white font-Manrope text-sm mt-3">
                  Services
                </li>
              </ul>
            </div>
            <div>
              <div className="font-Manrope text-white text-base bg-white/40 pl-1">SUPPORT</div>
              <ul>
                <li className="cursor-pointer text-white font-Manrope text-sm flex gap-2 items-center mt-3">
                  <div>
                    <FaPhoneAlt className="text-red-600" />
                  </div>
                  <div>+917005526643</div>
                </li>
                <li className="cursor-pointer text-white font-Manrope text-sm flex gap-2 items-center mt-3">
                  <div>
                    <IoMdMailOpen />
                  </div>
                  <div> official@dmhs9.org</div>
                </li>
                <li className="cursor-pointer text-white font-Manrope text-sm flex gap-2 items-center mt-3">
                  <div>
                    <GrLocationPin className="text-red-600" />
                  </div>
                  <div>
                    Liangtuang Tower, NH-29,Chumoukedima Town-979103, Nagaland
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="md:list-disc whitespace-nowrap mt-5 md:mt-0 flex justify-center items-center gap-7">
         <li className="font-Manrope text-white text-sm">Copyright &copy; 2025</li>
         <li className="font-Manrope text-white text-sm">DHMS</li>
         <li className="font-Manrope text-white text-sm">All rights reserved</li>
      </ul>
    </div>
  );
};

export default Footer;
