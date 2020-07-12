import Navigator from "../components/Navigator"
import Footer from "../components/Footer"
import { SWRConfig } from "swr"
import axios from "axios"
import { isMobile } from "react-device-detect"

function Index() {
  return (
    <div className={!isMobile ? "App" : ""}>
      <Navigator />
      <SWRConfig
        value={{
          dedupingInterval: 1000000,
          fetcher: url => axios(url).then(r => r.data)
        }}
      >
      </SWRConfig>
      <Footer />
    </div>
  )
}

export default Index