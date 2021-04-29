import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTopButton() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <button className="no-outline" style={{color: "rgb(63, 62, 62);", border: "none", borderRadius: "3px 3px 3px 3px", height: "30px", width: "85px", backgroundColor: "white"}} onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
  )

  return null;
}

