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
    <div className="grid grid-cols-[minmax(80px,_275px),_1fr] max-h-[100vh] min-h-[100vh] max-w-[100vw]">
      <div className="h-[100%] min-w-[100%]">
        <CustomSideBar expandSidebar={expandSidebar} toggleSidebar={toggleSidebar} options={posNavigationList} />
      </div>
      <div>{isLoading ? <p>Loading...</p> : <div className="h-[100%]">{children}</div>}</div>
    </div>
  );
};

export default PosLayout;
