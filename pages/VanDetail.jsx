import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import chooseTypeColor from "../utils/helpers";

export default function VanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);
  const location = useLocation();

  console.log(location.state);

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) return <h1>Loading...</h1>;

  return (
    <div className="p-[40px]">
      <Link
        to={`..?${location.state?.search || ""}`}
        relative="path"
        className="text-[#201F1D] text-lg"
      >
        {" "}
        ← Back to all vans
      </Link>
      <div className="flex mt-12 p-[40px] gap-9 flex-col lg:flex-row ">
        <img src={currentVan.imageUrl} loading="lazy" className="w-[600px]" />
        <div className="flex flex-col justify-between gap-12">
          <span className={chooseTypeColor(currentVan.type)}>
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
