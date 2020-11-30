import Link from "next/link"
import { Categories } from "../utils/constant"
import Navbar from "react-bootstrap/Navbar";


const Navigator = () => {
  return (
    <div>
      <Navbar collapseOnSelect={true} bg="dark" variant="dark" expand="lg">
        <Link href="/"><Navbar.Brand className="navbar-brand">
          <img
            src={`/circleLogo.png`}
            alt="haberibul"
            style={{ width: 80, height: 50, marginTop: -7 }}
          />
        </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav mr-auto">
            {Object.values(Categories).map(c => (
              <li key={c.key} className="nav-item">
                <Link href="/[category]" as={"/" + c.to}><a className="nav-link" >{c.value}</a></Link>
              </li>
            ))}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Haberi" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Bul</button>
          </form>
        </Navbar.Collapse>
      </Navbar>
      <div className="center">
        <Link href="/">
          <a><img className="logo" src="/haberibul.png" alt="image" /></a>
        </Link>
      </div>
    </div>
  )
}

export default Navigator