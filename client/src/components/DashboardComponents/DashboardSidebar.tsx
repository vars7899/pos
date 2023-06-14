import DefaultIcon from "../../assets/react.svg";
import { IconChevronDown } from "@tabler/icons-react";
import { DashboardNavigationList } from "../../navigation/DashboardNavigationList";
import { useNavigate, useLocation } from "react-router-dom";

const DashboardSidebar = () => {
  const expandSidebar = false;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="bg-white pt-6 px-6 border-r-[1px]">
      <div className="border-[1px] rounded-md px-6 py-4 flex items-center">
        {/* <img src={DefaultIcon} alt="icon" className="h-8 w-8" /> */}
        <div className="mr-4 overflow-hidden">
          <p className="font-medium truncate">Rocky Mountaineer Company</p>
          <p className="text-xs truncate text-zinc-400">1175 Victoria street, Vancouver, British Columbia</p>
        </div>
        <IconChevronDown />
      </div>
      <div className="border-t-[1px] mt-4">
        <p className="pt-4 text-xs uppercase text-zinc-400">Dashboard Menu</p>
        <div>
          {DashboardNavigationList.map((tab, index) => (
            <div
              key={`tab-${index}`}
              onClick={() => navigate(tab.path)}
              className={`py-4 px-5 my-4 rounded-lg flex items-center cursor-pointer ${
                tab.path === pathname ? "bg-zinc-100 text-zinc-950" : "text-slate-700"
              } justify-start`}
            >
              <div>{tab.icon}</div>
              <p className="ml-6 font-medium">{tab.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
