import { Link } from "react-router-dom";
//firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
// next ui
import { Avatar } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

//react icons
import { FcCameraIdentification, FcLike, FcDownload } from "react-icons/fc";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useState } from "react";

//Global context
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";

const getDataFromLocalStorage = () => {
  return localStorage.getItem("theme") || "cupcake";
};

function Navbar1() {
  const [theme, setTheme] = useState(getDataFromLocalStorage());
  const { user, dispatch } = useGlobalContext();
  console.log(user);
  const toggleMode = () => {
    const newTheme = theme == "cupcake" ? "dracula" : "cupcake";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const signOutUser = async () => {
    try {
      const signout = await signOut(auth);
      dispatch({ type: "LOGOUT" });
      toast.success("User signed out!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header className="bg-base-100 relative z-50 ">
      <div className="custom-container">
        <div className="navbar ">
          <div className="navbar-start">
            <Link to="/">
              <FcCameraIdentification className="text-2xl md:text-4xl hidden lg:block" />
            </Link>
            <div className="dropdown">
              <CiMenuKebab tabIndex={0} className="lg:hidden w-7 h-7" />
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-4">
              <li>
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-links">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-links">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-4">
            <Link to="/downloadedImages">
              <FcDownload className="text-lg sm:text-xl md:text-2xl" />
            </Link>
            <Link to="/likedImages">
              <FcLike className="text-lg sm:text-xl md:text-2xl" />
            </Link>
            <label className="md:grid cursor-pointer place-items-center hidden ">
              <input
                onClick={toggleMode}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1 "
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            {/* <div className="flex  items-center relative group">
              <Avatar
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                isBordered
                color="primary"
                src={user.photoURL}
              />
              <span class="absolute top-8 -right-20 hidden group-hover:inline-flex transition-all  items-center rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {user.displayName} <br />
                {user.email}
              </span>
            </div> */}
            <div className="">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-8 rounded-full">
                    <img alt="userPhoto" src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li className="relative group">
                    <Link to="profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                    <span class="absolute top-0 right-52 hidden group-hover:inline-flex transition-all  items-center rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {user.displayName} <br />
                      {user.email}
                    </span>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={signOutUser}>Log Out</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar1;
