import '../styles/globals.css'
import {useBgLightBlue} from "../hooks/useBgLightBlue"

function MyApp({ Component, pageProps }) {
  useBgLightBlue();
  return <Component {...pageProps} />
}

export default MyApp
