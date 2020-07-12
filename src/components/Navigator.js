import React from "react"
import Link from "next/link"
import { Categories } from "../utils/constant"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import { isMobile } from "react-device-detect"

const Navigator = () => {
  return (
    <div>
      <Navbar collapseOnSelect={true} bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="navbar-brand">
          <Link href="/">
            <a>
              haberibul

            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {Object.values(Categories).map(c => (
              <Link
                key={c.key}
                href={"/" + c.to}
              >
                <a>
                  {c.value}
                </a>
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
        <Link href="/">
          <a>
            <p>test</p>
          </a>
        </Link>

        <p> Haber ve haberleri bul haberibul.com </p>
      </div>
    </div>
  )
}

export default Navigator
