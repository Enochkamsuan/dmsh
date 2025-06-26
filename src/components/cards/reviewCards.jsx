import React from "react";
import data from "../../data/data";
import { FaStar } from "react-icons/fa";

const ReviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.reviews.map((val, id) => {
        return (
          <div key={id} className="bg-blue-50 rounded-2xl py-4 px-9 relative">
            <div className="absolute -top-[2.4em] left-16">
              <img
                src={val.image}
                alt="val.image"
                className="rounded-full border-4 border-white h-20 w-20 object-contain"
              />
            </div>
            <div className="pl-9 pt-12 text-primary flex gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <div className="text-slate-500 leading-7 font-Manrope mt-7 mb-4">
              {val.review}
            </div>
            <div className="relative inline-block before:absolute before:content-[''] before:top-[55%] before:left-[8em] before:h-[1px] before:w-[40%] before:bg-primary">
              {val.name}
            </div>
            <div className="font-Manrope text-slate-500">{val.customer}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewCards;
