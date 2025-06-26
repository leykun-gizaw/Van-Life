import React from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import chooseTypeColor from "../../utils/helpers";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentHostVan, setCurrentHostVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentHostVan(data.vans);
      });
  }, []);

  if (!currentHostVan) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-col gap-9">
      <Link to=".." relative="path">
        ← Back to all vans
      </Link>
      <div className="p-[40px] flex flex-col gap-9 bg-white max-w-[1000px]">
        <div className="flex gap-6">
          <img
            src={currentHostVan.imageUrl}
            width={"200px"}
            className="rounded-md"
          />
          <div className="flex flex-col gap-3 justify-center">
            <span className={`${chooseTypeColor(currentHostVan.type)}`}>
              {currentHostVan.type}
            </span>
            <h2 className="text-3xl font-semibold">{currentHostVan.name}</h2>
            <span className="text-xl">
              <b className="text-2xl">${currentHostVan.price}</b> /day
            </span>
          </div>
        </div>
        <div className="flex gap-9">
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={currentHostVan} />
      </div>
    </div>
  );
}
