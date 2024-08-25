import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have normal weight. Keep maintaining a healthy lifestyle.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
    } else {
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
    }
  };

  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-center mb-4">BMI CALCULATOR</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <form onSubmit={calculateBMI} className="space-y-4">
            <div>
              <label className="block font-medium">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block font-medium">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block font-medium">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Calculate BMI
            </button>
          </form>
        </div>
        <div className="max-w-xl">
          <img src="/bmi.jpg" alt="bmiImage" className="rounded-lg shadow w-auto h-auto " />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
