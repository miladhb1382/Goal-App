import React from "react";
import Main from "../../Homepage";
import { NavLink } from "react-router-dom";
export default function Logo() {
  return (
    <NavLink to="/" componet={Main} style={{ textDecoration: "none" }}>
      <div className="logo">
        <span role="img">🏠</span>
        <h1>برنامن</h1>
      </div>
    </NavLink>
  );
}
