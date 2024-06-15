import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { useEffect, useRef, useState } from "react";

function Darkmode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const elementRef = useRef(document.documentElement);

  useEffect(() => {
    console.log(elementRef);

    if (theme === "dark") {
      elementRef.current.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      elementRef.current.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`absolute z-10 w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-1005"}`}
      />

      <img
        src={DarkButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
}

export default Darkmode;
