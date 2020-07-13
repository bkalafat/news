import Link from "next/link"
import { Categories } from "../utils/constant"
import { isMobile } from "react-device-detect"

const Navigator = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
        <Link href="/"><a className="navbar-brand" >
          <img
            src={`/circleLogo.png`}
            alt="haberibul"
            style={{ width: 80, height: 50, marginTop: -7 }}
          />
        </a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {Object.values(Categories).map(c => (
              <li key={c.key} className="nav-item">
                <Link href={"/" + c.to}><a className="nav-link" >{c.value}</a></Link>
              </li>
            ))}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Haberi" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Bul</button>
          </form>
        </div>
      </nav>
      <div className="center">
        <Link href="/">
          <a><img src="/haberibul.png" alt="image" /></a>
        </Link>
        <p> Haber ve haberleri bul haberibul.com </p>
      </div>
    </div>
  )
}

export default Navigator
