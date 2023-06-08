import { NavigationOptionList } from "../navigation/Navigation";
import { useNavigate, useLocation } from "react-router-dom";
import { IconSettings, IconLogout, IconBallVolleyball } from "@tabler/icons-react";

interface Props {
  expandSidebar: boolean;
  options: NavigationOptionList;
}

const CustomSideBar = ({ expandSidebar, options }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="bg-white h-[100%] border-r-[1px] min-w-[100%]">
      <div className="flex items-center h-[70px] px-4 border-b-[1px]">
        <IconBallVolleyball strokeWidth={1.5} size={36} />
        {expandSidebar ? (
          <div className="ml-4">
            <p className="text-xl font-semibold tracking-wide">Register Ox</p>
            <p className="text-xs text-zinc-400 font-medium">Svar Studio</p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col justify-between max-h-max px-2">
        <div>
          {options.map((tab, index) => (
            <div
              key={`tab-${index}`}
              onClick={() => navigate(tab.path)}
              className={`p-3 my-3 rounded-lg flex items-center cursor-pointer ${
                tab.path === pathname ? "bg-orange-100 text-orange-700" : "text-slate-700"
              } ${expandSidebar ? "justify-start" : "justify-center"}`}
            >
              <div>{tab.icon}</div>
              {expandSidebar ? <p className="ml-6 font-medium">{tab.name}</p> : null}
            </div>
          ))}
        </div>
        <div>
          {/* <div
            className={`p-4 my-3 rounded-lg flex cursor-pointer ${
              pathname === "/pos/settings" ? "bg-orange-100 text-orange-700" : "text-slate-700"
            }`}
            onClick={() => navigate("/pos/settings")}
          >
            <div>
              <IconSettings />
            </div>
            <p className="ml-4 font-medium">Settings</p>
          </div> */}
          {/* TODO Add orange to the logout button when clicked */}
          {/* <div className={`p-4 my-3 rounded-lg flex cursor-pointer text-slate-700`}>
            <div>
              <IconLogout />
            </div>
            <p className="ml-4 font-medium">Logout</p>
          </div>
          <div className="p-4">
            <p className="text-slate-400 text-sm">Created by Vaibhav Dhiman</p>
            <p className="text-slate-400 text-sm">Version 1.1.3</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomSideBar;
