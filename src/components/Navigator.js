import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navigator = () => {

  let history = useHistory();

  return (
    <div className="banner">
      <img
        onClick={()  => history.push("/")}
        className="logo"
        src="https://via.placeholder.com/399x132.png/000000/FFFFFF/?text=AJANS"
      />
      <nav>
        <ul>
          <li>
            <Link to="/NewsDetail">Test Detay</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigator;
