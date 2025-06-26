import clsx from "clsx";
import React from "react";
import { Link, useParams } from "react-router-dom";
import chooseTypeColor from "../utils/helpers";

export default function VanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  console.log(currentVan);
  if (!currentVan) return <h1>Loading...</h1>;

  return (
    <div className="p-[40px]">
      <Link to=".." relative="path" className="text-[#201F1D] text-lg">
        {" "}
        ← Back to all vans
      </Link>
      <div className="flex mt-12 p-[40px] gap-9 flex-col lg:flex-row ">
        <img src={currentVan.imageUrl} className="w-[600px]" />
        <div className="flex flex-col justify-between gap-12">
          <span
            className={clsx(
              chooseTypeColor(currentVan.type),
              "text-[#FFEAD0]",
              "w-fit py-2",
              "px-4",
              "rounded-lg"
            )}
          >
            {currentVan.type}
          </span>
          <h2 className="text-4xl font-semibold">{currentVan.name}</h2>
          <span className="text-2xl">
            <b>${currentVan.price}</b> /day
          </span>
          <p className="text-lg">{currentVan.description}</p>
          <Link
            to=""
            className="bg-[#FF8C38] text-center p-4 rounded-lg text-white font-semibold text-lg"
          >
            Rent this van
          </Link>
        </div>
      </div>
    </div>
  );
}
