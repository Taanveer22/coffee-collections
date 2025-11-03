import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar shadow-sm fixed z-50 backdrop-blur-xl bg-white/30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-gray-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/coffeeList"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-gray-600"
              }
            >
              Cofee List
            </NavLink>
            <NavLink
              to="/dashBoard"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-gray-600"
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <h1 className="text-3xl font-bold text-green-500">
          Coffee Collections
        </h1>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/coffeeList"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            Coffeelist
          </NavLink>
          <NavLink
            to="/dashBoard"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
