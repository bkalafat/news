import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Provider } from 'next-auth/client'
import "reflect-metadata";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
}