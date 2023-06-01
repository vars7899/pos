import React, { useState } from "react";
import { CustomSideBar, PosNavbar } from "../components";
import { posNavigationList } from "../navigation/posNavigationList";

type Props = {
  children: React.ReactNode;
  isLoading: boolean;
};

const PosLayout = ({ children, isLoading }: Props) => {
  const [expandSidebar, setExpandSidebar] = useState<boolean>(false);
  const toggleSidebar = () => setExpandSidebar((current) => !current);

  return (
    <div className="grid grid-cols-[minmax(80px,_275px),_1fr] max-h-[100vh] min-h-[100vh]">
      <div className="h-[100%]">
        <CustomSideBar expandSidebar={expandSidebar} toggleSidebar={toggleSidebar} options={posNavigationList} />
      </div>
      <div className="">
        {isLoading ? <p>Loading...</p> : <div className="overflow-y-scroll h-[100%]">{children}</div>}
      </div>
    </div>
  );
};

export default PosLayout;
