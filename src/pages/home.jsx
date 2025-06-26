import React from "react";
import hero from "../assets/images/banner.png";
import hero_2 from "../assets/images/banner-img2.png";
import banner from "../assets/images/2.png";
import top_left from "../assets/images/1.jpg";
import bottom_left from "../assets/images/3.jpg";
import bottom_right from "../assets/images/4.jpg";
import ServiceCards from "../components/cards/serviceCard";
import DoctorsCard from "../components/cards/doctorsCard";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="bg-primary h-screen px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-3">
            <div
              style={{ backgroundImage: `url(${hero_2})` }}
              className="bg-center bg-no-repeat"
            >
              <img
                src={hero}
                alt="hero"
                className="w-full h-[90vh] object-contain"
              />
            </div>
            <div>
              <div className="bg-white/40 text-6xl font-Manrope font-bold text-white p-2">
                Best Reliable Medical Service
              </div>
              <div className="font-Manrope text-base font-normal text-white py-6">
                We provide dependable, high-quality medical care through
                certified technology and expert professionals—delivering
                hospital-level service to you, wherever you are.
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <button className="bg-white rounded-full text-sm font-Manrope px-6 py-3">
                    Learn More
                  </button>
                </div>
                <div>
                  <button className="border-[1px] border-white rounded-full text-sm text-white font-Manrope px-6 py-3">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 px-8 md:px-16 lg:px-24 py-5 md:py-16 lg-py-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-3">
          <div>
            <div className="text-5xl text-blue-950 font-Manrope font-bold">
              Consult A Doctor Anywhere, Anytime
            </div>
            <div className="font-Manrope text-base font-normal text-slate-600 py-6">
              Connect instantly with certified doctors from the comfort of your
              home. Our remote healthcare platform ensures you get expert
              medical advice – whenever you need it, wherever you are.
            </div>
            <div>
              <button className="bg-primary rounded-full text-white text-sm font-Manrope px-6 py-3">
                More About Us
              </button>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className="bg-center bg-no-repeat"
          >
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                <div>
                  <img
                    src={top_left}
                    alt="Doctors"
                    className="rounded-tl-[50px] rounded-br-[50px] w-full h-auto object-cover"
                  />
                </div>
                <div className="flex items-center">
                  <div className="bg-white w-40 h-40 md:w-48 md:h-48 rounded-full flex flex-col justify-center items-center shadow-md text-center p-6">
                    <p className="text-blue-600 text-4xl font-bold">5+</p>
                    <p className="text-gray-700 text-lg font-semibold mt-2">
                      Years of experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div className="flex justify-center md:justify-end">
                  <img
                    src={bottom_left}
                    alt="Patient Care"
                    className="w-64 h-64 object-cover rounded-full"
                  />
                </div>
                <div className="flex justify-center md:justify-start">
                  <img
                    src={bottom_right}
                    alt="Meeting"
                    className="w-64 h-64 object-cover rounded-tr-[50px] rounded-bl-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 md:px-16 lg:px-24 py-5 md:py-16 lg-py-20">
        <div className="text-center text-blue-900 text-5xl font-Manrope font-semibold mb-4 md:mb-11">
          Our Best services
        </div>
        <ServiceCards />
        <div className="text-center mt-4 md:mt-11">
          <button className="bg-primary rounded-full px-6 py-3 font-Manrope text-white">
            View All Services
          </button>
        </div>
      </section>
      <section className="px-8 md:px-16 lg:px-24 py-5 md:py-16 lg-py-20 bg-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <DoctorsCard />
          </div>
          <div>
            <div className="bg-white/40 text-6xl font-Manrope font-bold text-white p-2">
              Meet Our Expert Doctors
            </div>
            <div className="font-Manrope text-base font-normal tracking-[1px] text-white py-6">
              Our team of highly qualified and experienced doctors from across
              specialties is here to provide you with trusted, personalized care
              anytime, anywhere.
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full text-primary p-2"><FaArrowRightLong /></div>
              <div className="text-white font-Manrope">Trust care is health care, but easy.</div>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="bg-white rounded-full text-primary p-2"><FaArrowRightLong /></div>
              <div className="text-white font-Manrope">Top Searched Specialties.</div>
            </div>
            <div className="mt-5">
                  <button className="bg-white rounded-full font-Manrope px-6 py-3">
                    View All Team
                  </button>
                </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
