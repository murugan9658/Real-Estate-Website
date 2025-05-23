import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Scroll on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Restore scroll on reload ONLY for home page
  useEffect(() => {
    if (pathname === "/") {
      const saved = sessionStorage.getItem("scrollY");
      if (saved !== null) {
        window.scrollTo({ top: parseInt(saved), behavior: "auto" });
      }
    }
  }, []); // empty array = only on initial load

  // Save scroll position before unload
  useEffect(() => {
    const saveScroll = () => {
      if (pathname === "/") {
        sessionStorage.setItem("scrollY", window.scrollY.toString());
      }
    };

    window.addEventListener("beforeunload", saveScroll);
    return () => window.removeEventListener("beforeunload", saveScroll);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
