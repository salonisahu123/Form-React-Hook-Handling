import React from "react";

const UserCard = ({data}) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-[300px] bg-white shadow-lg rounded-2xl p-6 space-y-4">

        {/* User Image */}
        <img
          src={data.image}
          alt="image"
          className="w-24 h-24 rounded-full object-cover mx-auto"
        />

        {/* User Info */}
        <h2 className="text-xl font-bold text-gray-800">✨name : {data.name}</h2>
        <p className="text-gray-600 text-sm">✉️email : {data.email}</p>
        <p className="text-gray-600 text-sm">📞mobile : {data.mobile}</p>
        <p className="text-gray-500 text-sm italic">🔑password : {data.password}</p>
      </div>
    </div>
  );
};

export default UserCard;
