import React, { useState } from "react";
import Form from "./Components/Form";
import UserCard from "./Components/UserCard";

const App = () => {
  const [userdata, setUserdata] = useState([]); // array of users

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Form */}
      <Form setUserdata={setUserdata} />

      {/* Cards list */}
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {userdata.map((user, index) => (
          <UserCard key={index} data={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
