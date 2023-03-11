import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("");
  const welcome = async () => {
    const res = await axios.get("https://temp-project-server.vercel.app/home");
    setMessage(res.data.message);
    console.log(res);
  };
  return (
    <div>
      <button onClick={welcome}>Click to get welcome msg</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Home;
