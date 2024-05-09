import React, { useState } from "react";
import "../index.css";
import { Redirect } from "react-router-dom";
export default function App({ setGoals }) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [rating, setRating] = useState(1);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [type, setType] = useState("اهداف مالی");
  const [condition, setCondition] = useState("در حال انجام");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(), // Generate a unique id using the current timestamp
      Title: title,
      Caption: caption,
      Condition: condition,
      type: type,
      Rating: rating,
    };
    console.log(newItem);
    setGoals((prevGoals) => [...prevGoals, newItem]);
    setRedirectToHome(true);
  }
  if (redirectToHome) {
    return <Redirect to="/" />;
  }

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
        <StarRatingComponent maxRating={5} OnRate={setRating} size={38} />
      </div>
      <button type="submit">اضافه کردن</button>
    </form> // JSX code for the form and other components
  );
}

const starContainerStyle = {
  display: "flex",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

function StarRatingComponent({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  OnRate,
}) {
  const [Rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const TextStyle = {
    lineHeight: "1",
    margin: "0",
    color: color,
    fontSize: `${size / 1.5}px`,
  };
  function HandleRate(i) {
    setRating(i + 1);
    OnRate(i + 1);
  }
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onClick={() => HandleRate(i)}
            full={tempRating ? tempRating >= i + 1 : Rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

function Star({ onClick, full, onHoverIn, onHoverOut, color, size }) {
  const StarStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={StarStyle}
      onClick={onClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
