import { Link } from "react-router-dom";
import homeImg from "../assets/images/home-hero.png";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-9 mt-24 mb-24 w-[90%] m-auto">
      <div className="flex flex-col  h-fit gap-9">
        <h1 className="text-4xl font-extrabold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="vans"
          className="bg-[#FF8C38] text-white p-4 text-center rounded"
        >
          Find your van
        </Link>
      </div>
      <div className="h-[600px] overflow-hidden">
        <img
          src={homeImg}
          alt="home-hero"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
