import React from "react";
import Star from "./Star";
import { NavLink } from "react-router-dom";
export default function Goal({ Title, type, Rating, Condition, id }) {
  return (
    <div className="view">
      <div className="res-condition">
        <span
          className={`condition ${
            Condition === "تکمیل شد"
              ? "done"
              : Condition === "در حال انجام"
              ? "in-progress"
              : "cancel"
          }`}
        >
          {Condition}
        </span>
      </div>
      <div className="rate" style={{ textAlign: "center" }}>
        <Star />

        {Rating}
      </div>
      <div style={{ textAlign: "center" }}>{type}</div>
      <div style={{ textAlign: "right" }}>{Title}</div>
    </div>
  );
}
