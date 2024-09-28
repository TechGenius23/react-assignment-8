import { NavLink } from "react-router-dom";


const Nav = () => {
 const Links=<>
 <li><NavLink  to='/home' className={({isActive})=>isActive? 'text-2xl': 'text-xl'}>Home</NavLink></li>
 <li><NavLink to='/listedbook'className={({isActive})=>isActive? 'text-2xl ': 'text-xl '}>Listed Books</NavLink></li>
 <li><NavLink to='/pagetoread'className={({isActive})=>isActive? 'text-2xl text-red-500': 'text-xl '}>pages to Read</NavLink></li>

 
 
 </>
    return (
        <div>
            
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {Links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bookshelf</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div className="navbar-end  gap-2">
    <a className="btn bg-green-300">Sign In</a>
    <a className="btn bg-green-300">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default Nav;