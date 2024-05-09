import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./componet/Navbar/Navbar";
import Main from "./Homepage";
import AddGoal from "./AddGoal";
import Goal from "./componet/right box/Goal";
import Edit from "./Edit";
export default function GoalApp() {
  const [Goals, setGoals] = useState([
    {
      id: 1,
      Title: "خرید ماشین",
      Caption:
        "تا سال جاری با پس انداز ماهیانه 50 میلیون تومان قصد خرید ماشین دارم",
      type: "اهداف مالی",
      Condition: "تکمیل شد",
      Rating: 4,
    },
    {
      id: 2,
      Title: "یادگیری زبان انگلیسی",
      Caption:
        "در تلاشم برای سه سال دیگه مهاجرت کنم به کانادا نیاز به یاد گیری زبان دارم روزی دو ساعت آموزش می بینم",
      type: "اهداف آموزشی",
      Condition: "در حال انجام",
      Rating: 3,
    },
    {
      id: 3,
      Title: "مسافرت به دبی",
      Caption:
        "می خوام برای تعطیلات عید به کشور ترکیه برم و تعطیلات رو در اونجا بگذرونم",
      type: "اهداف تفریحی",
      Condition: "تکمیل شد",
      Rating: 1,
    },
  ]);
  const [search, setSearch] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar Goals={Goals} setGoals={setGoals} setSearch={setSearch} />
        </div>
        <Route
          path="/"
          exact
          render={() => <Main Goals={search} setGoals={setGoals} />}
        />
        <Route path="/Add" render={() => <AddGoal setGoals={setGoals} />} />
        <Route
          path="/Goal/:id"
          render={(props) => (
            <Goal {...props} Goals={search} setGoals={setGoals} />
          )}
        />
        <Route
          path="/edit/:id"
          render={(props) => (
            <Edit {...props} Goals={Goals} setGoals={setGoals} />
          )}
        />
      </div>
    </BrowserRouter>
  );
}
