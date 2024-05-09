import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { func } from "prop-types";
import { Link, NavLink } from "react-router-dom";
import Options from "./componet/left box/Options";
import OptionButton from "./componet/left box/optionbutton";
import AddGoal from "./AddGoal";
import Navbar from "./componet/Navbar/Navbar";
import Goal from "./componet/right box/showgoal";
import Login from "./componet/left box/Login";
import Menu from "./componet/left box/menu";
export default function Main({ Goals, setGoals }) {
  return (
    <div className="mainStyle">
      <Menu setGoals={setGoals} />
      <Box Goals={Goals} />
    </div>
  );
}

function Box({ Goals, setGoals }) {
  return (
    <div className="box">
      <MapData Goals={Goals} />
      <div style={{ textAlign: "center" }}>
        <NavLink to="/Add" component={AddGoal}>
          <svg
            style={{
              width: "30px",
              cursor: "pointer",
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}
function MapData({ Goals }) {
  const [sort, setSort] = useState("input");
  let SortData;
  if (sort === "input") {
    SortData = Goals;
  }
  if (sort === "Rate") {
    SortData = Goals.slice().sort(
      (a, b) => Number(b.Rating) - Number(a.Rating)
    );
  }
  if (sort === "Condition") {
    const conditionOrder = {
      "تکمیل شد": 0,
      "در حال انجام": 1,
      "لغو شده": 2,
    };

    SortData = Goals.slice().sort((a, b) => {
      return conditionOrder[a.Condition] - conditionOrder[b.Condition];
    });
  }
  return (
    <div>
      <select className="sort" onChange={(e) => setSort(e.target.value)}>
        <option value="input">بر اساس اضافه شدن</option>
        <option value="Rate">بر اساس اولویت</option>
        <option value="Condition">بر اساس وضعیت</option>
      </select>
      {SortData.map((goal) => (
        <Link to={`/Goal/${goal.id}`} style={{ textDecoration: "none" }}>
          <div
            key={goal.id}
            className="item"
            style={{ textDecoration: "none" }}
          >
            <Goal
              id={goal.id}
              Title={goal.Title}
              type={goal.type}
              Rating={goal.Rating}
              Condition={goal.Condition}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
