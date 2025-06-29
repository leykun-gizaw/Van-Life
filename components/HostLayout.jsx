import { Outlet } from "react-router-dom";
import HostHeader from "./HostHeader";

export default function HostLayout() {
  return (
    <div className="flex flex-col mt-12 p-[20px] gap-9 w-full">
      <HostHeader />
      <Outlet />
    </div>
  );
}
