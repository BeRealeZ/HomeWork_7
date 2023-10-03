import React from "react";
import {Link} from "react-router-dom";
import "./homePage.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="pages">
        <Link to="/">Home</Link>
        <Link to="/todoList">Список Todo</Link>
        <Link to="/autorization">Форма Авторизации</Link>
        <Link to="/slider">Слайдер</Link>
      </div>
    </nav>
  );
}

export default Navbar;
