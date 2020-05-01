import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navigator = () => {
  let history = useHistory();

  return (
    <div className="banner">
      <img
        onClick={() => history.push("/")}
        className="logo"
        src="https://via.placeholder.com/399x132.png/45b6fe/FFFFFF/?text=AJANS"
        alt="LogoAjans"
      />
      <nav className="navigator navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigator;
