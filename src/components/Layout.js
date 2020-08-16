import Navigator from "./Navigator"
import Footer from "./Footer"
import { isMobile } from "react-device-detect"
import { SWRConfig } from "swr"
import axios from "axios"

function Layout({ children }) {
  return <div>
    <Navigator />
    <SWRConfig
      value={{
        dedupingInterval: 1000000,
        fetcher: url => axios(url).then(r => r.data)
      }}
    >
      {children}
    </SWRConfig>
    <Footer />
  </div>
}

export default Layout