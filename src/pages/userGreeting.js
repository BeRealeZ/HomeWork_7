import React from "react";
import { useLocation } from "react-router-dom";
import "./userGreeting.css"

const UserData = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="user-greeting">
      {isHomePage && (
        <>
          <h2>HELLO USER</h2>
          <p>GROUP 28-01</p>
          <p>UZENOV-IDRIS</p>
        </>
      )}
    </div>
  );
}

export default UserData;
