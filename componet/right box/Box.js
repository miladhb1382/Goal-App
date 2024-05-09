import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Goal from "./Goal";
import { NavLink } from "react-router-dom";
import AddGoal from "../../AddGoal";

export default function MapData({ Goals }) {
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
