import React from "react"
import { Link } from "react-router-dom"
import { Categories } from "../utils/constant"

const Navigator = () => {
  return (
    <div>
      <nav className="navigator navbar navbar-expand-sm navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {Object.values(Categories).map(c => (
              <li className="nav-item">
                <Link style={{ color: "black" }} className="nav-link" to={c.to}>
                  {c.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="center">
        <Link to="/">
          <img
            className="logo"
            alt="haberi bul logo"
            src={`${process.env.PUBLIC_URL}/haberibul.png`}
          />
        </Link>
        <p>Haberi bulmanın en kolay yolu</p>
      </div>
    </div>
  )
}

export default Navigator
