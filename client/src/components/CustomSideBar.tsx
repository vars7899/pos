// import { Dispatch, SetStateAction } from "react";
import { NavigationOptionList } from "../navigation/Navigation";
import { useNavigate, useLocation } from "react-router-dom";
import { IconSettings, IconLogout } from "@tabler/icons-react";

type Props = {
  expandSidebar: boolean;
  // setExpandSidebar: Dispatch<SetStateAction<boolean>>;
  toggleSidebar: () => void;
  options: NavigationOptionList;
};

const CustomSideBar = ({ expandSidebar, toggleSidebar, options }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="bg-white h-[100%] px-2 py-5 border-r-[1px]">
      <div className="mb-6 flex items-center">
        <div className="bg-slate-100 px-4 py-3 rounded-lg">
          <p className="text-slate-700 font-semibold">Rx</p>
        </div>
        <p className="text-xl font-semibold tracking-wide ml-4">Register Ox</p>
      </div>
      <div className="flex flex-col justify-between max-h-max h-[94%]">
        <div>
          {options.map((tab, index) => (
            <div
              key={`tab-${index}`}
              onClick={() => navigate(tab.path)}
              className={`p-4 my-3 rounded-lg flex cursor-pointer ${
                tab.path === pathname ? "bg-orange-100 text-orange-700" : "text-slate-700"
              }`}
            >
              <div>{tab.icon}</div>
              <p className="ml-7 font-medium">{tab.name}</p>
            </div>
          ))}
        </div>
        <div>
          <div
            className={`p-4 my-3 rounded-lg flex cursor-pointer ${
              pathname === "/pos/settings" ? "bg-orange-100 text-orange-700" : "text-slate-700"
            }`}
            onClick={() => navigate("/pos/settings")}
          >
            <div>
              <IconSettings />
            </div>
            <p className="ml-4 font-medium">Settings</p>
          </div>
          {/* TODO Add orange to the logout button when clicked */}
          <div className={`p-4 my-3 rounded-lg flex cursor-pointer text-slate-700`}>
            <div>
              <IconLogout />
            </div>
            <p className="ml-4 font-medium">Logout</p>
          </div>
          <div className="p-4">
            <p className="text-slate-400 text-sm">Created by Vaibhav Dhiman</p>
            <p className="text-slate-400 text-sm">Version 1.1.3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSideBar;
