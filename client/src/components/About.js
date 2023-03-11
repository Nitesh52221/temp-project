import React, { useState } from "react";
import axios from "axios";

const About = () => {
  const [message, setMessage] = useState("");
  const welcome = async () => {
    const res = await axios.get("https://temp-project-server.vercel.app/about");
    setMessage(res.data.message);
    console.log(res);
  };
  return (
    <div>
      <button onClick={welcome}>click to know about me</button>
      <h1>{message}</h1>
    </div>
  );
};

export default About;
