import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/fontawesome.css";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop } from "@mui/material";
const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));
export const Loader = () => {
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  useEffect(() => {
    AOS.init({
      offset: 50,
    });
  }, []);
  useEffect(() => {
    route.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    route.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [route.events]);
  return (
    <>
      <Header />
      {loading ? <Loader /> : <Component {...pageProps} />}
      <Footer />
    </>
  );
}
