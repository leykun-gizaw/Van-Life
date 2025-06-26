import { Link, NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="p-[20px] flex justify-between border-b border-[#AAAAAA]">
        <Link className="text-3xl font-[900]" to="/">
          #VANLIFE
        </Link>
        <nav className="flex gap-4">
          <NavLink
            to="host"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Host
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Vans
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
