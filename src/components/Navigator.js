import React from "react"
import { Link } from "react-router-dom"
import { Categories } from "../utils/constant"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import { isMobile } from "react-device-detect"

const Navigator = () => {
  return (
    <div>
      <Navbar collapseOnSelect={true} bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {Object.values(Categories).map(c => (
              <Link target={isMobile ? "_self" : "_blank"} className="nav-link" to={c.to}>
                {c.value}
              </Link>
            ))}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Ara" className="mr-sm-2" />
            <Button variant="outline-success">Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div className="center">
        <Link to="/">
          <img
            className="logo"
            alt="haberi bul logo"
            src={`${process.env.PUBLIC_URL}/haberibul.png`}
          />
        </Link>
        <p> Haber ve haberleri bul haberibul.com </p>
      </div>
    </div>
  )
}

export default Navigator
