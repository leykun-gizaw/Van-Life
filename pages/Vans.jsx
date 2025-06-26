import React from "react";
import chooseTypeColor from "../utils/helpers";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vansList, setVanslist] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVanslist(data.vans));
  }, []);

  if (vansList.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    const vanElements = vansList.map((van) => {
      return (
        <Link to={`${van.id}`} key={van.id}>
          <div className="flex flex-col gap-2">
            <img src={van.imageUrl} width={"300px"} className="rounded-lg" />
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{van.name}</h2>
              <p>
                <b>${van.price}</b>/day
              </p>
            </div>
            <span
              className={clsx(
                chooseTypeColor(van.type),
                "text-[#FFEAD0]",
                "w-fit py-2",
                "px-4",
                "rounded-lg"
              )}
            >
              {van.type}
            </span>
          </div>
        </Link>
      );
    });
    return (
      <div className="mb-12 p-[40px] flex flex-col gap-12">
        <h1 className="text-2xl">Explore our van options</h1>
        <div className="flex flex-wrap gap-8">{vanElements}</div>
      </div>
    );
  }
}
