import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-300 px-8 md:px-16 lg:px-24 py-5 md:py-20">
      <form className="w-2/3 mx-auto bg-white rounded p-4">
        <div className="flex items-center gap-3">
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">First name</label>
            <input
              type="text"
              placeholder="Enter your First name"
              className="border border-black bg-transparent outline-none rounded placeholder:text-black px-2 py-1 w-full"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Last name</label>
            <input
              type="text"
              placeholder="Enter your Last name"
              className="border border-black bg-transparent outline-none rounded placeholder:text-black px-2 py-1 w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 my-3">
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border border-black bg-transparent outline-none rounded placeholder:text-black px-2 py-1 w-full"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              placeholder="Enter your phone number"
              className="border border-black bg-transparent outline-none rounded placeholder:text-black px-2 py-1 w-full"
            />
          </div>
        </div>
        <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows="10" className="border border-black focus:outline-none w-full p-3"></textarea>
        </div>
        <div>
            <button className="bg-cyan-500 rounded-md text-white py-2 px-4">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
