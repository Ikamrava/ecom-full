import { useEffect } from 'react';
import '../styles/globals.css'

import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "../components/Cart.context";




function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
      <CartContextProvider>
         <Component {...pageProps} />
      </CartContextProvider>
  )
}

export default MyApp
