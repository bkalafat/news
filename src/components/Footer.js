import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Ajans Haber</h5>
            <p>
            Dünyadan en son haberler, Türkiye'den son dakika gelişmeleri, günün öne çıkan gündem haberleri,
             dünya ekonomi piyasalarından flaş haberler, en yeni spor haberleri ve magazin dünyasından
             son olaylar Ajansımızda.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Bağlantılar</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Bir link</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Bir link</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Birşey linki</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Birşey linki</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> bkalafat </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;