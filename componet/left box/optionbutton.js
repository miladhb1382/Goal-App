import React from "react";
import { NavLink } from "react-router-dom";
export default function OptionButton({ setGoals }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "0.5fr 0.5fr" }}>
      <button style={{ backgroundColor: "red" }} onClick={() => setGoals([])}>
        پاک کردن لیست
      </button>
      <NavLink to="/Add" exact>
        <button>اضافه کردن هدف</button>
      </NavLink>
    </div>
  );
}
