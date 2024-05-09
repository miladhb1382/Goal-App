import React from "react";
import { useState } from "react";
export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  function Login() {
    alert("it is done");
    setusername("");
    setpassword("");
  }

  return (
    <div className="Login">
      <div>
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div style={{ justifyContent: "center" }}>
        <button onClick={() => Login()}>ورود/ثبت نام</button>
      </div>
    </div>
  );
}
