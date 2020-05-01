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
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" >
          <ul className="navbar-nav navbar-right ml-auto">

            <li className="nav-item active">
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
