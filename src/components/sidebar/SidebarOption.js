import React from "react";
import { Link } from "react-router-dom";

import "./SidebarOption.css";

const SidebarOption = (props) => {
  const text = props.text;
  const Icon = props.Icon;
  const active = props.active;
  const handlelogout = () => {
    if (text === "Logout") {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
    }
  };
  return (
    <Link
      className="link"
      to={text === "Logout" ? "/home" : text.toLowerCase()}
      onClick={handlelogout}
    >
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2> {text}</h2>
      </div>
    </Link>
  );
};

export default SidebarOption;
