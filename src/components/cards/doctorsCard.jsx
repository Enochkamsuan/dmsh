import React from "react";
import data from "../../data/data";

const DoctorsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {data.specialist.map((val, id) => {
        return (
          <div key={id}>
            <div>
              <img src={val.image} alt="val.image" className="w-full rounded-t-[2em]" />
            </div>
            <div className="bg-white rounded-b-[2em] relative p-5">
                <div className="absolute -top-[1.3em] left-[38%] bg-primary rounded-full text-white border-4 text-2xl border-white p-4">{val.icon}</div>
                <div className="text-center font-Manrope font-extrabold text-blue-950 mt-6">{val.name}</div>
                <div className="text-center font-Manrope text-slate-600">{val.speciality}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorsCard;
