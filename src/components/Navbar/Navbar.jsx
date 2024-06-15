import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";

const Navbar = () => {
  return (
    <div className="relative bg-white shadow-md duration-200 dark:bg-gray-900 dark:text-white">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div>
            <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="focus:border-1 focus:border-primary w-[200px] rounded-full border border-gray-300 px-2 py-1 transition-all duration-300 focus:outline-none group-hover:w-[300px] sm:w-[200px]"
              />
              <IoMdSearch className="group-hover:text-primary absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* order button */}
            <button
              onClick={() => alert("Odering is not available yet")}
              className="from-primary to-secondary group flex items-center gap-3 rounded-full bg-gradient-to-r px-4 py-1 text-white transition-all duration-200"
            >
              <span className="hidden transition-all duration-200 group-hover:block">
                Order
              </span>
              <FaCartShopping className="cursor-pointer text-xl text-white drop-shadow-sm" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
