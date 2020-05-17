import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Haberi bul</h5>
            <p>Haber bulmanın en kolay yolu.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/bkalafat"> bkalafat </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
