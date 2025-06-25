import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-[20px] flex justify-between border-b border-[#AAAAAA]">
      <Link className="text-3xl font-[900]" to="/">
        #VANLIFE
      </Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
