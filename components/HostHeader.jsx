import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function HostHeader() {
  return (
    <header>
      <nav className="flex gap-9">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            clsx("hover:font-bold", isActive ? "font-bold" : "")
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            clsx("hover:font-bold", isActive ? "font-bold" : "")
          }
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            clsx("hover:font-bold", isActive ? "font-bold" : "")
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            clsx("hover:font-bold", isActive ? "font-bold" : "")
          }
        >
          Reviews
        </NavLink>
      </nav>
    </header>
  );
}
