import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUserdata }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setUserdata((prev) => [...prev, data]); // add new user in array
    reset(); // form clear after submit
  };

  return (
    <div className="flex justify-center items-center mb-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-96 space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Register Form
        </h1>

        {/* Same input fields as before... */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">Name:</label>
          <input {...register("name")} type="text" placeholder="Enter your name"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"/>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">Email:</label>
          <input {...register("email")} type="email" placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"/>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">Password:</label>
          <input {...register("password")} type="password" placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"/>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">Mobile:</label>
          <input {...register("mobile")} type="text" placeholder="Enter your mobile number"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"/>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">Image URL:</label>
          <input {...register("image")} type="url" placeholder="Enter your image URL"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"/>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">Gender</label>
          <select {...register("gender")}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400">
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-all duration-200">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
