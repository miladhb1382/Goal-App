import React from "react";
export default function Backdrop({ setModal }) {
  return (
    <div>
      <div className="Backdrop" onClick={() => setModal(false)}></div>
      <Modal />;
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
