import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

interface PosNavbarProps {
  expandSidebar: boolean;
  toggleSidebar: () => void;
}

const PosNavbar = ({ expandSidebar, toggleSidebar }: PosNavbarProps) => {
  const [currentDate] = useState<string>(Date());
  return (
    <div className="bg-white h-[70px] flex justify-between items-center px-4 border-b-[1px]">
      <div className="border-[1px] p-2 rounded-lg cursor-pointer" onClick={toggleSidebar}>
        {expandSidebar ? <IconX strokeWidth={1.5} /> : <IconMenu2 strokeWidth={1.5} />}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="w-[100%] border-[1px] border-solid rounded-lg border-slate-100 text-lg px-4 py-2"
          placeholder="Search Menu"
        />
      </div>
      <div className="flex flex-col items-end">
        <p className="text-lg font-semibold capitalize">Johnhansen Flamingo</p>
        <p className="text-sm text-slate-600">{currentDate.slice(0, 15).replace(/-/g, "/")}</p>
      </div>
    </div>
  );
};

export default PosNavbar;
