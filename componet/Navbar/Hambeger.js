import React from "react";
export default function Hamberger({ setModal }) {
  return (
    <div className="hamberger" onClick={() => setModal(true)}>
      <svg
        style={{ width: "58px", height: "48px" }}
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
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
    </div>
  );
}
function Modal() {
  return (
    <form className="Modal">
      <div style={{ justifyContent: "center" }}>
        <div className="Modallogo">
          <span role="img">🏠</span>
          <h1>برنامن</h1>
        </div>
      </div>
      <input type="text" placeholder="نام کاربری" />
      <input type="password" placeholder="رمز عبور" />
      <div style={{ justifyContent: "center" }}>
        <button>ورود/ثبت نام</button>
      </div>
    </form>
  );
}
