import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Main from "../../Homepage";
import Goal from "../right box/showgoal";
import Logo from "./logo";
import Search from "./Search";
import NumResualt from "./numresualt";
import Hamberger from "./Hambeger";
import Backdrop from "./Backdrop";
export default function Navbar({ Goals, setGoals, setSearch }) {
  const [shouldRender, setShouldRender] = React.useState(false);
  const [Modal, setModal] = useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1660) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    };
    handleResize(); // Check initial width on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Navbar">
      <NumResualt Goals={Goals} />
      <Search Goals={Goals} setGoals={setGoals} setSearch={setSearch} />
      <Logo />
      {shouldRender && <Hamberger setModal={setModal} />}
      {Modal && <Backdrop setModal={setModal} />}
    </div>
  );
}
