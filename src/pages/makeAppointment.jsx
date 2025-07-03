import React, { useState } from "react";

const MakeAppointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectDepartment, setSelectDepartment] = useState("");
  const [bookForm, setBookForm] = useState("form");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addHours = (date, hours) => {
    const result = new Date(date);
    result.setTime(result.getTime() + hours * 60 * 60 * 1000);
    return result;
  };

  const isAfter = (date1, date2) => {
    return date1.getTime() > date2.getTime();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!selectedDate || !selectedTime || !name || !email) {
      alert("Please select all required fields");
      return;
    }

    const [hours, minutes] = selectedTime.split(":");
    const combineDateAndTime = new Date(selectedDate);
    combineDateAndTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    const minAllowed = addHours(new Date(), 2);

    if (!isAfter(combineDateAndTime, minAllowed)) {
      setError("Appointment must be at least two hours from now");
      return;
    }

    confirmAppointment();
  };

  const confirmAppointment = () => {
    alert("Your Appointment is confirmed, we will get back to you");
    setName("");
    setEmail("");
    setSelectedDate("");
    setSelectedTime("");
    setSelectDepartment("");
    setBookForm("confirmed");
  };

  const resetForm = () => {
    setBookForm("form");
    setError("");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="px-8 md:px-16 lg:px-24 py-5 md:py-20 bg-gray-100">
      {bookForm === "form" ? (
        <div className="w-full lg:w-2/3 mx-auto">
          <div className="text-2xl font-bold text-center my-4">
            Book appointment
          </div>
          <div className="bg-slate-50 rounded-lg p-4 lg:p-11">
           <div className="block lg:flex items-center gap-3">
             <div className="mb-4 w-full">
              <label className="block text-sm font-medium mb-2">
                Select date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={today}
                className="border border-black/10 bg-transparent text-black/25 rounded-lg outline-none p-3 w-full"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium mb-2">
                Select time
              </label>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="border border-black/10 text-black/25 bg-transparent rounded-lg outline-none p-3 w-full"
              />
            </div>
           </div>
           <div className="block lg:flex items-center gap-3">
             <div className="mb-4 w-full">
              <label className="block text-sm font-medium mb-2">
                Select a department
              </label>
              <select
                name="options"
                id="opt"
                value={selectDepartment}
                onChange={(e) => setSelectDepartment(e.target.value)}
                className="border border-black/10 text-black/25 bg-transparent rounded-lg outline-none py-3 px-2 w-full"
              >
                <option value="">Select department</option>
                <option value="Vital">Vital</option>
                <option value="Lab test">Lab test</option>
                <option value="Ear Screening">Ear Screening</option>
                <option value="Breast screening">Breast screening</option>
                <option value="Lung function test">Lung function test</option>
                <option value="Heart function test">Heart function test</option>
                <option value="Haemoglobin">Haemoglobin</option>
                <option value="Lipid profile">Lipid profile</option>
                <option value="Blood glucose">Blood glucose</option>
                <option value="Urine RE">Urine RE</option>
                <option value="Doctor consultation">Doctor consultation</option>
              </select>
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium mb-2">
                Name of Patient:
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                type="text"
                className="border border-black/10 bg-transparent rounded-lg outline-none p-3 w-full"
              />
            </div>
           </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Email address:
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                className="border border-black/10 bg-transparent shadow-md rounded-lg outline-none p-3 w-full"
              />
            </div>

            {error && (
              <p className="text-base text-red-600 font-medium mb-4">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              className="bg-primary/80 rounded-md text-white py-3 px-4 hover:bg-primary/70 transition-colors w-full"
            >
              Book Appointment
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center max-w-md mx-auto">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            <h2 className="text-xl font-bold mb-2">Appointment Confirmed!</h2>
            <p>We will get back to you soon.</p>
          </div>
          <button
            onClick={resetForm}
            className="bg-blue-600 rounded-md text-white py-2 px-4 hover:bg-blue-700 transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default MakeAppointment;
