import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    if (!email && !password) {
      alert("email and pasword is required");
      return;
    }
    //  else {
    //   alert("login successfully")
    // }

    await fetch("http://localhost:7000/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(async (res) => {
        let data = await res.json();

        if (data?.success) {
          console.log("success");
          setMsg("Login successfully");
          localStorage.setItem("id",data.name._id)
          console.log("data",data)
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          console.log("failed");
          setMsg("Email or password is invalid");
          setEmail("")
          setPassword("")
          setTimeout(()=>{
          setMsg("")

          },3000);
        }
      })
      .catch((e) => {
        console.log("failed", e);
      });
    // .then((val) => {
    //   setEmail("");
    //   setPassword("")
    //   setMsg(val.message);
    //   // setTimeout(() => {
    //   //   setMsg();
    //   // }, 3000)
    //   // .then(navigate("/blog"))
    // })
  };
  return (
    <div className="container">
      <div className="form">
      <span>{msg}</span>
        <h4>Enter Your Login Details Below</h4>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {/* {msg?
       <>
        <h4>{msg}</h4>
       </>:
       <>

       </>
       } */}
        <button onClick={handleLogin}>LOGIN</button>
      </div>
     
    </div>
  );
}

export default Login;
