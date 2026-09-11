import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo-text.png";
const Nav = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          ></ul>
        </div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Technologies</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <p className="border-none gap-4">Sign In</p>
        <a className="btn bg-[#D91B7E] rounded-4xl">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
