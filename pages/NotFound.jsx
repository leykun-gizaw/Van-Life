import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col justify-center items-center w-1/2 m-auto gap-5">
      <h1 className="text-4xl font-extrabold">404 NOT FOUND</h1>
      <Link
        to="/"
        className="bg-[#161616] p-5 w-full text-white text-center font-bold text-xl rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
