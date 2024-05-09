import React from "react";
import { NavLink } from "react-router-dom";
import OptionButton from "./optionbutton";
export default function Options({ setGoals }) {
  return (
    <div>
      <p>آرامش نتیجه تحمل اضطراب هاست </p>
      <p>موفقیت در پرتو برنامه ریزی</p>
      <div
        style={{
          justifyContent: "center",
          display: "grid",
          gridTemplateColumns: "0.1fr auto",
        }}
      >
        <OptionButton setGoals={setGoals} />
      </div>
    </div>
  );
}
