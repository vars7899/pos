import React from "react";
import * as Component from "../components";

interface DashboardLayoutParams {
  isLoading: boolean;
  children: React.ReactNode;
}

const DashboardLayout = ({ isLoading, children }: DashboardLayoutParams) => {
  return (
    <div>
      <Component.DashboardNavbar />
      <div className="grid grid-cols-[250px,_1fr]">
        <Component.DashboardSidebar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
