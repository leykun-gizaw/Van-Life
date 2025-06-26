import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const currentHostVan = useOutletContext();
  return (
    <span className="text-xl">
      <b className="text-2xl">${currentHostVan.price}</b> /day
    </span>
  );
}
