import { Sidebar, SidebarTrigger } from "@/components/ui/sidebar";
import {
  ArrowRightLeft,
  ChartScatter,
  ChevronUp,
  Home,
  LightbulbIcon,
  LogOut,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const links = [
  {
    icon: Home,
    label: "Overview",
    path: "/",
  },
  {
    icon: ArrowRightLeft,
    label: "Transactions",
    path: "/transactions",
  },
  {
    icon: LightbulbIcon,
    label: "Business Insights",
    path: "/insights",
  },
  {
    icon: ChartScatter,
    label: "Reports",
    path: "/reports",
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [isCardShowing, setIsCardShowing] = useState(false);
  const currentPath = location.pathname;
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/auth/signin");
  }

  return (
    <Sidebar className="flex w-[257px] flex-col">
      {/* header */}
      <div className="flex items-center justify-between px-4 pt-2">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="size-[25px]" />
          <h1 className="text-2xl font-medium text-[#333333]">SaveSmart</h1>
        </div>
        <SidebarTrigger />
      </div>

      {/* content */}
      <div className="mt-6 flex flex-col gap-2 px-4">
        {links.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`${currentPath === item.path && "rounded-[8px] bg-[#FD9E9E42] text-[#FC6060]"} flex items-center gap-2 p-2 text-[#474747]`}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </div>

      {/* footer */}
      <div className="relative mt-auto w-full px-4 pb-2">
        <div className="flex items-center justify-between rounded-[8px] border border-[#F0F0F0] px-4 py-2 text-[#474747]">
          Kwame Nsuo
          <ChevronUp
            className="cursor-pointer"
            onClick={() => setIsCardShowing((prev) => !prev)}
          />
        </div>
        <div
          className={`${isCardShowing ? "translate-y-0" : "translate-y-[300px]"} shadow-wide-down absolute bottom-16 left-6 z-20 flex w-[192px] flex-col gap-3 overflow-hidden rounded-[8px] bg-white px-2 py-2 transition duration-300`}
        >
          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage src="" />
              <AvatarFallback className="text-xs">CN</AvatarFallback>
            </Avatar>

            <p className="text-xs text-[#333333]">Profile</p>
          </div>
          <div className="flex items-center gap-2">
            <Settings size={20} color="#333333" />

            <p className="text-xs text-[#333333]">Settings</p>
          </div>
          <div className="flex items-center gap-2 text-[#D11100]">
            <LogOut size={18} />

            <p className="cursor-pointer text-xs" onClick={() => logOut()}>
              Log out
            </p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
