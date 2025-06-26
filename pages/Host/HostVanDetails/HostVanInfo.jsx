import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const currentHostVan = useOutletContext();
  return (
    <div className="flex flex-col gap-5">
      <p>
        <b>Name</b>: {currentHostVan.name}
      </p>
      <p>
        <b>Category</b>: {currentHostVan.type}
      </p>
      <p>
        <b>Description</b>: {currentHostVan.description}
      </p>
      <p>
        <b>Visibility</b>: Public
      </p>
    </div>
  );
}
