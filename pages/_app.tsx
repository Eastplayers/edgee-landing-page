import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import Header from "components/Header/Header";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
