import { Outlet } from "react-router-dom";
import Home from "@/pages/HomeRoute";

export default function HomeRoute() {
  return (
    <div className="space-y-6">
      <Home />
      <div className="border-t pt-6">
        <Outlet />
      </div>
    </div>
  );
}