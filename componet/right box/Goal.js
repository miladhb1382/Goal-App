import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../../index.css";
export default function Goal({ Goals, match, setGoals }) {
  const { id } = match.params;
  const filteredGoals = Goals.filter((goal) => goal.id === id - 0);
  const filteredGoal = filteredGoals.length > 0 ? filteredGoals[0] : null;
  const [goalDetails, setGoalDetails] = useState(filteredGoal);
  function handleDelete() {
    const newGoals = Goals.filter((goal) => goal.id !== id - 0);
    console.log(newGoals);
    setGoals(newGoals);
  }
  return (
    <div className="Goal">
      <h1>{goalDetails.Title}</h1>
      <p>{goalDetails.Caption}</p>
      <div>
        <label>نوع هدف: </label>
        <span>{goalDetails.type}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
        <label>اولویت:</label>
        <span>
          <StarRating rate={goalDetails.Rating} size={33} />
        </span>
      </div>
      <div>
        <label>وضعیت :</label>
        <span
          className={`condition ${
            goalDetails.Condition === "تکمیل شد"
              ? "done"
              : goalDetails.Condition === "در حال انجام"
              ? "in-progress"
              : "cancel"
          }`}
          id="res"
        >
          {goalDetails.Condition}
        </span>
      </div>
      <div style={{ justifyContent: "center", gridTemplateColumns: "1fr 1fr" }}>
        <Link to={`/edit/${id}`} className="editbut">
          ویرایش
        </Link>
        <Link to="/" onClick={handleDelete} className="deletebut">
          پاک کردن
        </Link>
      </div>
    </div>
  );
}

function StarRating({ maxRating = 5, color = "#fcc419", size = 48, rate = 1 }) {
  const [rating, setRating] = useState(rate);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  return (
    <div style={containerStyle}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star key={i} filled={i < rating} color={color} size={size} />
      ))}
    </div>
  );
}

function Star({ filled, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    fill: filled ? color : "none",
    stroke: color,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={starStyle}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2L15.09 8.88L22 9.82L17 14.5L18.18 21L12 17.77L5.82 21L7 14.5L2 9.82L8.91 8.88L12 2Z"
      />
    </svg>
  );
}
