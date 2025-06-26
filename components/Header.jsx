import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="p-[20px] flex justify-between border-b border-[#AAAAAA]">
        <Link className="text-3xl font-[900]" to="/">
          #VANLIFE
        </Link>
        <nav className="flex gap-4">
          <Link to="host">Host</Link>
          <Link to="about">About</Link>
          <Link to="vans">Vans</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
