import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#fdfaf3] text-[#4a3f35] font-sans">
      <Navbar />
      <Outlet />
    </div>
  );
}