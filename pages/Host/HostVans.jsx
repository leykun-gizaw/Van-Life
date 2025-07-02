import React from "react";
import { Link } from "react-router-dom";
import { fetchHostVans } from "../../api/api";

export default function HostVans() {
  const [hostVans, setHostVans] = React.useState([]);

  React.useEffect(() => {
    const getHostVans = async () => {
      const hostVans = await fetchHostVans("123");
      setHostVans(hostVans);
    };
    getHostVans();
  }, []);

  if (hostVans.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-col gap-9 mt-9">
      {hostVans.map((hostVan) => {
        return (
          <Link to={`${hostVan.id}`} key={hostVan.id}>
            <div className="flex items-center bg-white p-[15px] max-w-[800px] gap-9 rounded-lg">
              <img
                src={hostVan.imageUrl}
                width="100px"
                className="rounded-md"
              />
              <div>
                <h1 className="text-xl font-bold">{hostVan.name}</h1>
                <p>
                  <b>${hostVan.price}</b>/day
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
