import React from "react";
import * as Component from "../components";


interface DashboardLayoutParams {
  isLoading: boolean;
  children: React.ReactNode;
}

const DashboardLayout = ({ isLoading, children }: DashboardLayoutParams) => {
  
  return (
    <div className="max-h-[100vh] h-[calc(100vh-75px)]">
      <Component.DashboardNavbar />
      <div className="grid grid-cols-[350px,_1fr] bg-zinc-100 h-[100%]">
        <Component.DashboardSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
