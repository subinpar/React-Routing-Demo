import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Header.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-wrap">
        <div className="header-left">
          <Link to="/" className="logo">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </Link>

          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/movie">영화</Link>
              </li>
              <li>
                <Link to="/tv">TV 프로그램</Link>
              </li>
              <li>
                <Link to="/person">인물</Link>
              </li>
              <li>
                <Link to="/test">More</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
