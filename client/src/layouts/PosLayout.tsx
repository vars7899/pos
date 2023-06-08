import React, { useState } from "react";
import { CustomSideBar, PosNavbar } from "../components";
import { posNavigationList } from "../navigation/posNavigationList";

type Props = {
  isLoading: boolean;
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
};

const PosLayout = ({ isLoading, leftChildren, rightChildren }: Props) => {
  const [expandSidebar, setExpandSidebar] = useState<boolean>(false);
  const toggleSidebar = () => setExpandSidebar((current) => !current);

  return (
    <div
      className={`grid ${
        expandSidebar ? "grid-cols-[275px,_1fr]" : "grid-cols-[70px,_1fr]"
      }  max-h-[100vh] h-[100vh] max-w-[100vw] w-[100vw]`}
    >
      <CustomSideBar expandSidebar={expandSidebar} options={posNavigationList} />

      <div className="grid grid-cols-[5fr,_380px]">
        <div>
          <PosNavbar expandSidebar={expandSidebar} toggleSidebar={toggleSidebar} />
          <div className="h-[calc(100vh-70px)] overflow-y-scroll">{leftChildren}</div>
        </div>
        <div className="h-[100vh] overflow-y-scroll">{rightChildren}</div>
      </div>
    </div>
  );
};

export default PosLayout;
