import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const currentHostVan = useOutletContext();
  return (
    <img src={currentHostVan.imageUrl} width="100px" className="rounded-lg" />
  );
}
