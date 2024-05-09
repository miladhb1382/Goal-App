import React from "react";
import Login from "./Login";
import Options from "./Options";

export default function Menu({ setGoals }) {
  return (
    <div className="menu">
      <Login />
      <Options setGoals={setGoals} />
    </div>
  );
}
