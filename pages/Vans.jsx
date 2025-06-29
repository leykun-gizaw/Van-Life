import React from "react";
import clsx from "clsx";
import { Link, useSearchParams } from "react-router-dom";
import Tag from "../utils/components";
import { fetchVans } from "../api/api";

export default function Vans() {
  const [vansList, setVanslist] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const validFilters = new Set(["simple", "rugged", "luxury"]);
  const typ = searchParams.get("type");
  const typeFilter = validFilters.has(typ) ? typ : null;

  React.useEffect(() => {
    const getVans = async () => {
      try {
        setVanslist(await fetchVans());
        setLoading(false);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getVans();
  }, []);

  if (loading) {
    return <h1 className="text-3xl">Loading...</h1>;
  } else if (error) {
    return <h1 className="text-2xl p-[20px]">Something Went Wrong</h1>;
  } else {
    const filteredVanElements = typeFilter
      ? vansList.filter((van) => van.type === typeFilter)
      : vansList;

    const vanElements = filteredVanElements.map((van) => {
      return (
        <Link
          to={`${van.id}`}
          key={van.id}
          state={{ search: searchParams.toString(), filterType: typeFilter }}
        >
          <div className="flex flex-col gap-2">
            <img src={van.imageUrl} width={"300px"} className="rounded-lg" />
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{van.name}</h2>
              <p>
                <b>${van.price}</b>/day
              </p>
            </div>
            <Tag name={van.type} />
          </div>
        </Link>
      );
    });

    function handleFilter(key, value) {
      const newSearchParams = new URLSearchParams(searchParams);
      if (key && value !== null) {
        newSearchParams.set(key, value);
      } else if (value === null) {
        newSearchParams.delete(key);
      }
      setSearchParams(newSearchParams);
    }
    return (
      <div className="mb-12 p-[40px] flex flex-col gap-12">
        <h1 className="text-3xl">Explore our van options</h1>
        <div className="flex justify-between">
          <div className="flex w-3/4 gap-10">
            <button
              onClick={() => handleFilter("type", "simple")}
              className={clsx(
                "bg-[#FFEAD0]",
                "py-2",
                "px-5",
                "rounded-lg",
                "text-[#4D4D4D]",
                "cursor-pointer",
                "active:scale-95",
                "hover:bg-simple",
                "hover:text-[#FFEAD0]"
              )}
            >
              Simple
            </button>
            <button
              onClick={() => handleFilter("type", "rugged")}
              className={clsx(
                "bg-[#FFEAD0]",
                "py-2",
                "px-5",
                "rounded-lg",
                "text-[#4D4D4D]",
                "cursor-pointer",
                "active:scale-95",
                "hover:bg-rugged",
                "hover:text-[#FFEAD0]"
              )}
            >
              Rugged
            </button>
            <button
              onClick={() => handleFilter("type", "luxury")}
              className={clsx(
                "bg-[#FFEAD0]",
                "py-2",
                "px-5",
                "rounded-lg",
                "text-[#4D4D4D]",
                "cursor-pointer",
                "active:scale-95",
                "hover:bg-luxury",
                "hover:text-[#FFEAD0]"
              )}
            >
              Luxury
            </button>
          </div>
          <button
            className="w-fit active:border-b-[#4D4D4D] cursor-pointer hover:border-b p-0"
            onClick={() => handleFilter("type", null)}
          >
            Clear Filters
          </button>
        </div>
        <div className="flex flex-wrap gap-8">{vanElements}</div>
      </div>
    );
  }
}
