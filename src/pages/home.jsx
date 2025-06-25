import React from "react";
import hero from "../assets/images/banner.png";
import hero_2 from "../assets/images/banner-img2.png";
import banner from "../assets/images/2.png";
import top_left from "../assets/images/1.jpg";
import bottom_left from "../assets/images/3.jpg";
import bottom_right from "../assets/images/4.jpg";
import ServiceCards from "../cards/serviceCards/service";

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
            className="bg-center bg-no-repeat">
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
        <ServiceCards />
      </section>
    </div>
  );
};

export default Home;
