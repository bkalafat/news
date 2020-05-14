import React from "react"
import { Link, useHistory } from "react-router-dom"

const Navigator = () => {
  let history = useHistory()

  return (
    <div>
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
      <div className="center">
        <img className="logo" onClick={() => history.push("/")} alt="haberi bul logo" src={`${process.env.PUBLIC_URL}/haberibul.png`}></img>
        <p>Haberi bulmanın en kolay yolu</p>
      </div>
    </div>
  )
}

export default Navigator
