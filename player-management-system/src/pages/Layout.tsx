import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex">
      <div className="menu">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/listing">Listing</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/random">Random</NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
