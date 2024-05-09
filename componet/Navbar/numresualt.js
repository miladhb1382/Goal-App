import React from "react";
export default function NumResualt({ Goals }) {
  return (
    <div>
      <Emoji Goals={Goals} />
    </div>
  );
}
function Emoji({ Goals }) {
  if (Goals.length !== 0) {
    return (
      <p className="num-results">😞!هنوز {Goals.length} کار تکمیل نشده داری</p>
    );
  } else {
    return <p className="num-results">😍وقتشه هدف جدید مشخص کنی </p>;
  }
}
