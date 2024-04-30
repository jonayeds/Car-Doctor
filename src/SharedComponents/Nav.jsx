import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'
const Nav = () => {
  const navigation = <>
   <NavLink to={'/'}><li><a>Home</a></li></NavLink>
   <NavLink to={'/about'}><li><a>About</a></li></NavLink>
   <NavLink to={'/Services'}><li><a>Services</a></li></NavLink>
   <NavLink to={'/Blog'}><li><a>Blog</a></li></NavLink>
   <NavLink to={'/contact'}><li><a>Contact</a></li></NavLink>
  </>
    return (
        <div>
            <div className="navbar bg-base-100 h-24">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
          navigation
       }
      </ul>
    </div>
    <Link to={'/'} className=" text-xl">
        <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navigation
      }
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-error">Appointment</button>
  </div>
</div>
        </div>
    );
};

export default Nav;