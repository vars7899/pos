import { useState } from "react";
import { IconBallVolleyball, IconSun } from "@tabler/icons-react";

interface DashboardNavbarProps {
  $toggleTheme?(): void;
}

const DashboardNavbar = ({ $toggleTheme }: DashboardNavbarProps) => {
  const [currentDate] = useState<string>(Date());
  return (
    <div className="px-6 border-b-[1px] h-[75px] flex items-center justify-between">
      <div className="flex items-center font-normal text-zinc-950 dark:bg-purple-400">
        <IconBallVolleyball strokeWidth={1.5} size={40} />
        <p className="text-xl ml-2">Register Ox Admin</p>
        <div className="bg-red-200 px-2 py-1 text-xs rounded-md ml-2 text-red-600">Beta</div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-end mr-4">
          <p className="text-lg font-medium">Vaibhav Dhiman</p>
          <p className="text-sm text-zinc-500">{currentDate.slice(0, 15).replace(/-/g, "/")}</p>
        </div>
        <button className="rounded-md border-[1px] p-3" onClick={$toggleTheme}>
          <IconSun />
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
