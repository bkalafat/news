import Navigator from "./Navigator"
import Footer from "./Footer"
import { isMobile } from "react-device-detect"

function Layout({ children }) {
  return <div className={!isMobile ? "App" : ""}>
    <Navigator />
    {children}
    <Footer />
  </div>
}

export default Layout