import { useState } from "react";
// import { IconArrowsMaximize } from "@tabler/icons-react";

const PosNavbar = () => {
  const [currentDate] = useState<string>(Date());
  return (
    <div className="bg-white h-[95px] flex items-center px-4 border-b-[1px]">
      <div className="w-3/5 flex items-center">
        <input
          type="text"
          className="w-[100%] border-[1px] border-solid rounded-lg border-slate-6=100 text-lg px-4 py-2"
          placeholder="Search Menu"
        />
      </div>
      <div className="w-2/5 flex flex-col items-end">
        <p className="text-lg font-semibold capitalize">Johnhansen Flamingo</p>
        <p className="text-sm text-slate-600">{currentDate.slice(0, 15).replace(/-/g, "/")}</p>
      </div>
    </div>
  );
};

export default PosNavbar;
