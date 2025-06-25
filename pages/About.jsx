import React from "react";
import bgImg from "../assets/images/about-hero.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex gap-9 w-[90%] m-auto mt-24 mb-24">
      <div className="h-[600px] overflow-hidden">
        <img
          src={bgImg}
          alt="home-hero"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div>
        <div className="flex flex-col gap-9">
          <h1 className="font-extrabold text-4xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="p-10 bg-[#FFCC8D] rounded-lg mt-24 flex flex-col gap-7 items-start">
          <h2 className="text-2xl font-bold">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="bg-black text-white py-3 px-6 rounded-lg" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}
