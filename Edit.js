import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import StarRatingComponent from "./componet/StarRating";
export default function Edit({ Goals, match, setGoals }) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [type, setType] = useState("اهداف مالی");
  const [condition, setCondition] = useState("در حال انجام");
  const { id } = match.params;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const data = Goals.filter((goal) => goal.id === (parseInt(id) || 0));
    if (data.length > 0) {
      const goalData = data[0];
      setTitle(goalData.Title);
      setCaption(goalData.Caption);
      setType(goalData.type);
      setRating(goalData.Rating);
      setCondition(goalData.Condition);
    }
    setIsLoaded(true);
  }, [Goals, id]);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedGoals = Goals.map((goal) => {
      if (goal.id === (parseInt(id) || 0)) {
        return {
          ...goal,
          Title: title,
          Caption: caption,
          Condition: condition,
          type: type,
          Rating: rating,
        };
      }
      return goal;
    });
    setGoals(updatedGoals);
    setRedirectToHome(true);
  }

  if (redirectToHome) {
    return <Redirect to="/" />;
  }

  if (isLoaded) {
    return (
      <form className="AddBar" onSubmit={handleSubmit}>
        <h1>🏠اضافه کردن هدف</h1>
        <input
          type="text"
          placeholder="عنوان هدف"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="توضیحات"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
        <div style={{ columnGap: "20px" }}>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="در حال انجام">درحال انجام</option>
            <option value="تکمیل شد">تکمیل شد</option>
            <option value="لغو شد">لغو شد</option>
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="اهداف مالی">اهداف مالی</option>
            <option value="اهداف تفریحی">اهداف تفریحی</option>
            <option value="اهداف آموزشی">اهداف آموزشی</option>
          </select>
        </div>
        <div style={{ display: "revert" }}>
          <StarRatingComponent
            maxRating={5}
            OnRate={setRating}
            size={38}
            Rate={rating}
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          ویرایش
        </button>
      </form>
    );
  } else {
    return <h1>loading...</h1>;
  }
}
