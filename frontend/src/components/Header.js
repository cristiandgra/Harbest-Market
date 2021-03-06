import React from "react";
import logo from "../assets/img/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="animate__animated animate__jackInTheBox header-logo ">
          <img src={logo} width="300px" height="40px" alt="logo" />
        </div>
      </div>
    </header>
  );
};
