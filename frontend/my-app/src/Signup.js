import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleclick = async () => {
    if (!email && !name && !password) {
      alert("name,email and pasword is required");
      return;
    } else {
      alert("Signup successfully");
    await fetch("http://localhost:7000/signup", {
      method: "POST",
      headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(navigate("/login")).catch();
  }
  };
  return (
    <div className="form">
    <h3>Create a New Account</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      ></input>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      ></input>
      <button onClick={handleclick}>SIGNUP</button>
      
    </div>
  );
}

export default Signup;
