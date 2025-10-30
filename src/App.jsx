import BackVideo from "./components/BackVideo";
import MainCont from "./components/MainCont";
import LenisScroll from "./components/LenisScroll";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1440);
    };

    handleResize(); // check on first load
    window.addEventListener("resize", handleResize); // check on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <LenisScroll>
        {isMobile ? (
          <div className="w-full h-screen flex items-center justify-center bg-[#202020] text-white text-2xl px-[40px]">
            Not Responsive Yet 🤐. Please Open This Link In Your PC/Laptop.
          </div>
        ) : (
          <div className="w-full min-h-screen flex">
            <BackVideo />
            <MainCont />
          </div>
        )}
      </LenisScroll>
    </>
  );
}

export default App;
